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
  3. npm run prod //To generate minified files for live server
*/

// Gulp
const { src, dest, watch, series, parallel } = require('gulp');

/*  CSS */
const clean = require('gulp-clean-css');            //To Minify CSS files
const purge = require('gulp-purgecss');             // Remove Unused CSS from Styles
const sass = require('gulp-sass')(require('sass')); //For Compiling SASS files

/*  JS  */
const concat = require('gulp-concat');              //For Concatenating js,scss, css files
const uglify = require('gulp-terser');              //To Minify JS files
const babel = require('gulp-babel');

/*  Image   */
const imagemin = require('gulp-imagemin');          //To Optimize Images
    //Note : Webp still not supported in major browsers including firefox
//const webp = require('gulp-webp');                  //For converting images to WebP format
//const replace = require('gulp-replace');            //For Replacing img formats to webp in html

/*  HTML    */
const fileInclude = require('gulp-file-include');   // Include header and footer files to work faster :)
const htmlMin = require('gulp-htmlmin');

/*  Server  */
const serve = require('browser-sync').create();
const open = require('gulp-open');                  // Opens a URL in a web browser
const del = require('del');                         //For Cleaning build/dist for fresh export
const log = require('fancy-log');
const symbols = require('log-symbols');          //For Symbolic Console logs :) :P
const superChild = require('superchild');
const git = require('gulp-git');                // Execute command line shell for git push
//const browserify = require('gulp-browserify');  // For bundling JS files

// Config
const options = require("./config");                //paths and other options from config.js

/* Frameworks */
    // TailwindCSS
    const post = require('gulp-postcss');           //For Compiling tailwind utilities with tailwind config
    const autoprefixer = require('autoprefixer');
    const tailwindcss = require('tailwindcss');


const jsFiles = [
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/data.js`,
    `${options.paths.src.js}/functions.js`,
    `${options.paths.src.js}/modules.js`,
    `${options.paths.src.js}/app.js`
]

//Load Previews on Browser on dev
livePreview = (done) => {
  serve.init({
    server: {
      baseDir: options.paths.dist.base
    },
    port: options.config.port || 5000,
  });
  watchFiles();
  done();
}

// Triggers Browser reload
previewReload = (done) => {
  log("\n\t" + symbols.info,"Reloading Browser Preview.\n");
  serve.reload();
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
      .pipe(htmlMin({ collapseWhitespace: true }))
      .pipe(dest(options.paths.dist.base))
      .pipe(serve.stream());
}

devStyles = () => {
    const plugins = [tailwindcss(options.config.tailwind), autoprefixer()];
  return src(`${options.paths.src.css}/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(dest(options.paths.src.css))
      .pipe(post(plugins))
      .pipe(concat({ path: 'style.css'}))
      .pipe(clean())
      .pipe(dest(options.paths.dist.css))
      .pipe(dest(options.paths.src.css))
      .pipe(serve.stream());
}

devScripts = () => {
  return src(jsFiles)
      .pipe(babel())
      .pipe(concat({ path: 'main.js'}))
      .pipe(uglify())
      .pipe(dest(options.paths.dist.js))
      .pipe(dest(options.paths.src.js));
}

devImages = () => {
  return src(`${options.paths.src.img}/**/*`)
      // .pipe(imagemin([
      //     imagemin.mozjpeg({quality: 75, progressiveLazyLoad: true}),
      //     imagemin.optipng({optimizationLevel: 5})
      // ]))
      .pipe(dest(options.paths.dist.img));
}

const watchFiles = () => {
  watch(`${options.paths.src.base}/**/*.html`,series(devHTML, devStyles, previewReload));
  watch(`${options.paths.src.css}/**/*.scss`,series(devStyles));
  watch(`${options.config.tailwind}`, series(devStyles));
  watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
  log("\n\t" + symbols.info,"Watching for Changes..\n");
}

devClean = () => {
  log("\n\t" + symbols.info,"Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}

//Production Tasks (Optimized Build for Live/Production Sites)
prodHTML = () => {
    return src([
        `${options.paths.src.base}/**/*.html`,
        `!${options.paths.src.base}/**/header.html`, // ignore
        `!${options.paths.src.base}/**/footer.html`, // ignore
        `!${options.paths.src.base}/modules/*.html` // ignore
    ])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest(options.paths.build.base));
}

prodStyles = () => {
  return src(`${options.paths.src.css}/style.css`)
      .pipe(purge({
        content: ['src/**/*.{html,js}'],
        defaultExtractor: content => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
          const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
          return broadMatches.concat(innerMatches)
        }
      }))
      .pipe(clean({compatibility: 'ie8'}))
      .pipe(dest(options.paths.build.css));
}

prodScripts = () => {
    return src(jsFiles)
        .pipe(babel())
        .pipe(concat({ path: 'main.js'}))
        .pipe(uglify())
        .pipe(dest(options.paths.dist.js))
}

prodImages = () => {
    return src(`${options.paths.src.img}/**/*`)
        .pipe(imagemin([
            imagemin.mozjpeg({quality: 75, progressiveLazyLoad: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(dest(options.paths.build.img));
}

prodClean = () => {
  log("\n\t" + symbols.info,"Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

buildFinish = (done) => {
  log("\n\t" + symbols.info,`Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

gitter = async () => {
    const child = superChild(`rm -rf .git/index.lock`);
    child.on('stdout_line', (line) => {
         log(line + ' index lock removed')
     });
    return src(`${options.paths.root}`)
        .pipe(git.add())
        .on('end', function(){ log('git add Done!'); })
        .pipe(git.commit(`${options.deploy.gitCommitMessage}`, {args:`${options.deploy.gitCommitArgs}`}))
        .on('end', function(){ log('git commit Done!'); })
}

push = async () => {
    git.push(`${options.deploy.gitURL}`, `${options.deploy.gitBranch}`, errorFunction);
    log('git push done!')
}

surgeDeploy = async () => {
    const child = superChild(`surge ${options.paths.build.base} ${options.deploy.surgeUrl}`);
    child.on('stdout_line', (e) => {
        log(e);
    });
}

openBrowser = async () => {
    const opt = {uri: `https://${options.deploy.surgeUrl}`};
    return src('./build')
        .pipe(open(opt));
}

errorFunction = (err) => {if (err) throw err;}

// Deploy command
exports.surge = series(surgeDeploy, openBrowser);
exports.git = series(gitter);
exports.push = series(push);

exports.default = series(
    devClean, // Clean Dist Folder
    parallel(devStyles, devScripts, devImages, devHTML), //Run All tasks in parallel
    livePreview, // Live Preview Build
);

exports.prod = series(
    prodClean, // Clean Build Folder
    parallel(prodStyles, prodScripts, prodImages, prodHTML), //Run All tasks in parallel
    buildFinish
);