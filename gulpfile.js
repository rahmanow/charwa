/**
 *   Gulp + TailwindCSS - Starter Pack
 *   Author: Azat Rahmanov
 *   URL : rahmanow.com
 *   Twitter : @Azadik
 *  Instagram: @Azadik
 **/

/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run prod //To generate minifed files for live server
*/

const { src, dest, watch, series, parallel } = require('gulp');
const del = require('del'); //For Cleaning build/dist for fresh export
const options = require("./config"); //paths and other options from config.js
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));//For Compiling SASS files
const postCss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
const concat = require('gulp-concat'); //For Concatinating js,scss, css files
const uglify = require('gulp-terser');//To Minify JS files
const imagemin = require('gulp-imagemin'); //To Optimize Images
const cleanCSS = require('gulp-clean-css');//To Minify CSS files
const purgeCss = require('gulp-purgecss');// Remove Unused CSS from Styles

//Note : Webp still not supported in major browsers including firefox
// const webp = require('gulp-webp'); //For converting images to WebP format
// const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P
const fileInclude = require('gulp-file-include'); // Include header and footer files to work faster :)
const superChild = require('superchild');
const git = require('gulp-git'); // Execute command line shell for git push
const babel = require('gulp-babel');
const open = require('gulp-open'); // Opens a URL in a web browser
const tailwindcss = require('tailwindcss');
const log = require('fancy-log');

//Load Previews on Browser on dev
livePreview = (done) => {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base
    },
    port: options.config.port || 5000,
  });
  done();
}

// Triggers Browser reload
previewReload = (done) => {
  console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

//Development Tasks
devHTML = () => {
  return src([
    `${options.paths.src.base}/**/*.html`,
    `!${options.paths.src.base}/**/header.html`, // ignore
    `!${options.paths.src.base}/**/footer.html` // ignore
  ])
      .pipe(fileInclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(dest(options.paths.dist.base));
}

devStyles = () => {
  return src(`${options.paths.src.css}/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(dest(options.paths.src.css))
      .pipe(postCss([
          tailwindcss(options.config.tailwind),
          require('autoprefixer'),
      ]))
      .pipe(concat({ path: 'style.css'}))
      .pipe(cleanCSS())
      .pipe(dest(options.paths.dist.css));
}

devScripts = () => {
  return src([
        `${options.paths.src.js}/libs/**/*.js`,
        `${options.paths.src.js}/*.js`,
        `!${options.paths.src.js}/**/external/*`
      ])
       .pipe(babel({
           ignore: [
               `${options.paths.src.js}/libs/**/*.js`
           ]
       }))
      .pipe(concat({ path: 'main.js'}))
      .pipe(uglify())
      .pipe(dest(options.paths.dist.js));
}

devImages = () => {
  return src(`${options.paths.src.img}/**/*`)
      // .pipe(imagemin([
      //     imagemin.mozjpeg({quality: 75, progressiveLazyLoad: true}),
      //     imagemin.optipng({optimizationLevel: 5})
      // ]))
      .pipe(dest(options.paths.dist.img));
}


watchFiles = () => {
  watch(`${options.paths.src.base}/**/*.html`,series(devHTML, devStyles, previewReload));
  watch(`${options.paths.src.css}/**/*.scss`,series(devStyles, previewReload));
  watch(`${options.config.tailwind}`, series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
  console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
}

devClean = () => {
  console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}

//Production Tasks (Optimized Build for Live/Production Sites)
prodHTML = () => {
  return src(`${options.paths.src.base}/**/*.html`)
      .pipe(dest(options.paths.build.base));
}

prodStyles = () => {
  return src(`${options.paths.dist.css}/**/*`)
      .pipe(purgeCss({
        content: ['src/**/*.{html,js}'],
        defaultExtractor: content => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
          return broadMatches.concat(innerMatches)
        }
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(dest(options.paths.build.css));
}

prodScripts = () => {
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`
  ])
      .pipe(concat({ path: 'scripts.js'}))
      .pipe(uglify())
      .pipe(dest(options.paths.build.js));
}

prodImages = () => {
  return src(options.paths.src.img + '/**/*').pipe(imagemin()).pipe(dest(options.paths.build.img));
}

prodClean = () => {
  console.log("\n\t" + logSymbols.info,"Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

buildFinish = (done) => {
  console.log("\n\t" + logSymbols.info,`Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

// gitClear = async () => {
//
// }

gitAdd = async () => {
    // del(`./.git/index.lock`, {force: true})
    // log('Clear Done!');
    const child = superChild(`rm -rf .git/index.lock`);
    child.on('stdout_line', (line) => {
         console.log(line)
     });
    return src(`${options.paths.root}`)
        .pipe(git.add())
        .on('end', function(){ log('git add Done!'); });
}

gitCommit = async () => {
    return src(`${options.paths.root}`)
        .pipe(git.commit(`${options.deploy.gitCommitMessage}`, {args:`${options.deploy.gitCommitArgs}`}))
        .on('end', function(){ log('git commit Done!'); });
}

gitPush = async () => {
    git.push(`${options.deploy.gitURL}`, `${options.deploy.gitBranch}`, errorFunction);
    console.log('git push done!')
}

surgeDeploy = async () => {
    const child = superChild(`surge ${options.paths.dist.base} ${options.deploy.surgeUrl}`);
    child.on('stdout_line', () => {
        console.log('Deployed to surge');
    });
}

openBrowser = async () => {
    const opt = {uri: `https://${options.deploy.surgeUrl}`};
    return src('./dist')
        .pipe(open(opt));
}

errorFunction = (err) => {
    if (err) throw err;
}

// Deploy command
exports.deploy = series(surgeDeploy, openBrowser);
exports.gitter = series(gitAdd, gitCommit, gitPush);


exports.default = series(
    devClean, // Clean Dist Folder
    parallel(devStyles, devScripts, devImages, devHTML), //Run All tasks in parallel
    livePreview, // Live Preview Build
    watchFiles // Watch for Live Changes
);

exports.prod = series(
    prodClean, // Clean Build Folder
    parallel(prodStyles, prodScripts, prodImages, prodHTML), //Run All tasks in parallel
    buildFinish
);