/**
 *   Gulp Starter Pack
 *   Author: Azat Rahmanov
 *   URL : blog.rahmanow.com
 *   Twitter : @Azadik
 *  Instagram: @Azadik
 **/

/*
  npm install   //To install all dev dependencies of package
  gulp          //To start development and server for live preview
  gulp prod     //To generate minified files for live server
  gulp surge    //To deploy your static website to surge.sh
  gulp git      // To add, commit and push to repository
  gulp push     // pushes to GitHub
*/

// Gulp
const { src, dest, watch, series, parallel } = require('gulp');
//const gulpIf = require('gulp-if');
const del = require('del');                             //For Cleaning build/dist for fresh export
const symbol = require('log-symbols');              //For Symbolic Console logs :) :P
const log = require('fancy-log');

//CSS
const sass = require('gulp-sass')(require('sass'));     //For Compiling SASS files
const post = require('gulp-postcss');                //For Compiling tailwind utilities with tailwind config
const clean = require('gulp-clean-css');             //To Minify CSS files
const purge = require('gulp-purgecss');              // Remove Unused CSS from Styles
const tailwind = require('tailwindcss');

// Image
const imagemin = require('gulp-imagemin');              //To Optimize Images
//Note : Webp still not supported in major browsers including firefox
// const webp = require('gulp-webp'); //For converting images to WebP format
// const replace = require('gulp-replace'); //For Replacing img formats to webp in html

// JavaScript
const concat = require('gulp-concat');                  //For Concatinating js,scss, css files
const uglify = require('gulp-terser');                  //To Minify JS files
const babel = require('gulp-babel');

// HTML
const include = require('gulp-file-include');       // Include header and footer files to work faster :)

// Server
const sync = require('browser-sync');
const exec = require('superchild');               // run terminal commands
const zip = require('gulp-zip');                        // create a zip file
const git = require('gulp-git');                        // Execute command line shell for git push
const open = require('gulp-open');                      // Opens a URL in a web browser


// Other
const opt = require("./config");                    //paths and other options from config.js

//Load Previews on Browser on dev
preview = (done) => {
    sync.init({
        server: {
            baseDir: opt.dist
        },
        port: opt.port || 5000
    });
    watch(opt.tailwind, devStyles);
    watch(opt.scss, devStyles);
    done();
}

// Triggers Browser reload
previewReload = (done) => {
    log("\n\t" + symbol.info,"Reloading Browser Preview.\n");
    sync.reload();
    done();
}

//Development Tasks
devHTML = async () => {
    src([opt.html,
        '!' + opt.src + '/header.html', // ignore
        '!' + opt.src + '/footer.html' // ignore
    ])
        .pipe(include({ prefix: '@@', basepath: '@file'}))
        .pipe(dest(opt.dist));
}

devStyles = async () => {
    src([opt.scss, opt.tailwind])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(opt.src + '/scss'))
        .pipe(post([
            tailwind(opt.tailConfig),
            require('autoprefixer'),
        ]))
        .pipe(concat({ path: 'style.css'}))
        .pipe(dest(opt.dist + '/css'))
        .pipe(sync.stream())
}

devScripts = async () => {
    src([
        opt.jsLibs,
        opt.js,
        '!' + opt.src + '/js/external/*'
    ])
        .pipe(babel({ignore: [opt.jsLibs] }))
        .pipe(concat({ path: 'main.js'}))
        .pipe(uglify())
        .pipe(dest(opt.dist + '/js'));
}

devImages = async () => {
    src(opt.img)
        .pipe(dest(opt.dist + '/img'));
}

watchFiles = () => {
    watch(opt.html, series(devHTML, previewReload));
    watch(opt.js, series(devScripts, previewReload));
    watch(opt.img, series(devImages, previewReload));
    log("\n\t" + symbol.info,"Watching for Changes..\n");
}

devClean = () => {
    log("\n\t" + symbol.info,"Cleaning dist folder for fresh start.\n");
    return del([opt.dist]);
}

//Production Tasks (Optimized Build for Live/Production Sites)
prodHTML = () => {
    return src(opt.html)
        .pipe(dest(opt.build));
}

prodStyles = () => {
    return src(opt.dist + '/css/**/*')
        .pipe(purge(
            {
                content: ['src/**/*.{html,js}'],
                defaultExtractor: content => {
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                    return broadMatches.concat(innerMatches)
                }
            }))
        .pipe(clean({compatibility: 'ie8'}))
        .pipe(dest(opt.build + '/css'));
}

prodScripts = () => {
    return src([
        opt.jsLibs,
        opt.js
    ])
        .pipe(concat({ path: 'scripts.js'}))
        .pipe(uglify())
        .pipe(dest(opt.build + '/js'));
}

prodImages = () => {
    return src(opt.img)
        .pipe(imagemin())
        .pipe(dest(opt.build + '/img'));
}

prodClean = () => {
    log("\n\t" + symbol.info,"Cleaning build folder for fresh start.\n");
    return del([opt.build]);
}

buildFinish = (done) => {
    log("\n\t" + symbol.info,`Production build is complete. Files are located at ${opt.build}\n`);
    return src(opt.build + '/*')
        .pipe(zip('build.zip'))
        .pipe(dest(opt.build));
    done();
}

gitter = async () => {
    const child = exec(`rm -rf .git/index.lock`)
    child.on('stdout_line', (line) => { log (line + ' index lock removed')});

    return src(opt.root)
        .pipe(git.add())
        .on('end', () => { log('git add Done!'); })
        .pipe(git.commit(opt.git.m, {args: opt.git.args}))
        .on('end', () => { log('git commit Done!'); })
}

push = async () => {
    git.push(opt.git.url, opt.git.branch, errorFunction);
    log('git push done!');
}

surgeDeploy = async () => {
    const child = exec(`surge ${opt.dist} ${opt.surgeUrl}`);
    child.on('stdout_line', (line) => {
        log( line);
        if(line.includes('Success!')) {
            openBrowser();
            log('\n\n\t' + symbol.success + ' Deployed to surge \n\n\t');
        }
    });
}

openBrowser = async () => {
    const site = {uri: 'https://' + opt.surgeUrl};
    return src(opt.dist)
        .pipe(open(site))
}

errorFunction = (err) => { if (err) throw err; }

exports.surge = series(surgeDeploy);
exports.git = series(gitter);
exports.push = series(push);


// Default gulp command - gulp
exports.default = series(
    devClean, // Clean Dist Folder
    parallel(devStyles, devScripts, devImages, devHTML), //Run All tasks in parallel
    preview, // Live Preview Build
    watchFiles // Watch for Live Changes
);

// Production command - gulp prod
exports.prod = series(
    prodClean, // Clean Build Folder
    parallel(prodStyles, prodScripts, prodImages, prodHTML), //Run All tasks in parallel
    buildFinish
);







//
// const { src, dest, watch, series, parallel } = require('gulp');
// const del = require('del'); //For Cleaning build/dist for fresh export
// const options = require("./config"); //paths and other options from config.js
// const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass')(require('sass'));//For Compiling SASS files
// const postCss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
// const concat = require('gulp-concat'); //For Concatinating js,scss, css files
// const uglify = require('gulp-terser');//To Minify JS files
// const imagemin = require('gulp-imagemin'); //To Optimize Images
// const cleanCSS = require('gulp-clean-css');//To Minify CSS files
// const purgeCss = require('gulp-purgecss');// Remove Unused CSS from Styles
//
// //Note : Webp still not supported in major browsers including firefox
// // const webp = require('gulp-webp'); //For converting images to WebP format
// // const replace = require('gulp-replace'); //For Replacing img formats to webp in html
// const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P
// const fileInclude = require('gulp-file-include'); // Include header and footer files to work faster :)
// const superChild = require('superchild');
// const git = require('gulp-git'); // Execute command line shell for git push
// const babel = require('gulp-babel');
// const open = require('gulp-open'); // Opens a URL in a web browser
// const tailwindcss = require('tailwindcss');
// const log = require('fancy-log');
//
// //Load Previews on Browser on dev
// livePreview = (done) => {
//   browserSync.init({
//     server: {
//       baseDir: options.paths.dist.base
//     },
//       port: options.config.port || 5000,
//       ui: {
//           port: options.config.ui
//       }
//   });
//     watch(`${options.paths.src.css}/**/*.scss`,devStyles);
//     watch(`${options.config.tailwind}`, devStyles);
//     done();
// }
//
// // Triggers Browser reload
// previewReload = (done) => {
//   console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
//   browserSync.reload();
//   done();
// }
//
// //Development Tasks
// devHTML = () => {
//   return src([
//     `${options.paths.src.base}/**/*.html`,
//     `!${options.paths.src.base}/**/header.html`, // ignore
//     `!${options.paths.src.base}/**/footer.html` // ignore
//   ])
//       .pipe(fileInclude({
//         prefix: '@@',
//         basepath: '@file'
//       }))
//       .pipe(dest(options.paths.dist.base));
// }
//
// devStyles = () => {
//   return src(`${options.paths.src.css}/**/*.scss`)
//       .pipe(sass().on('error', sass.logError))
//       .pipe(dest(options.paths.src.css))
//       .pipe(postCss([
//           tailwindcss(options.config.tailwind),
//           require('autoprefixer'),
//       ]))
//       .pipe(concat({ path: 'style.css'}))
//       .pipe(cleanCSS())
//       .pipe(dest(options.paths.dist.css))
//       .pipe(browserSync.stream())
// }
//
// devScripts = () => {
//   return src([
//         `${options.paths.src.js}/libs/**/*.js`,
//         `${options.paths.src.js}/*.js`,
//         `!${options.paths.src.js}/**/external/*`
//       ])
//        .pipe(babel({
//            ignore: [
//                `${options.paths.src.js}/libs/**/*.js`
//            ]
//        }))
//       .pipe(concat({ path: 'main.js'}))
//       .pipe(uglify())
//       .pipe(dest(options.paths.dist.js));
// }
//
// devImages = () => {
//   return src(`${options.paths.src.img}/**/*`)
//       // .pipe(imagemin([
//       //     imagemin.mozjpeg({quality: 75, progressiveLazyLoad: true}),
//       //     imagemin.optipng({optimizationLevel: 5})
//       // ]))
//       .pipe(dest(options.paths.dist.img));
// }
//
//
// watchFiles = () => {
//   watch(`${options.paths.src.base}/**/*.html`,series(devHTML, devStyles, previewReload));
//   watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
//   watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
//   console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
// }
//
// devClean = () => {
//   console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
//   return del([options.paths.dist.base]);
// }
//
// //Production Tasks (Optimized Build for Live/Production Sites)
// prodHTML = () => {
//   return src(`${options.paths.src.base}/**/*.html`)
//       .pipe(dest(options.paths.build.base));
// }
//
// prodStyles = () => {
//   return src(`${options.paths.dist.css}/**/*`)
//       .pipe(purgeCss({
//         content: ['src/**/*.{html,js}'],
//         defaultExtractor: content => {
//           const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
//           const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
//           return broadMatches.concat(innerMatches)
//         }
//       }))
//       .pipe(cleanCSS({compatibility: 'ie8'}))
//       .pipe(dest(options.paths.build.css));
// }
//
// prodScripts = () => {
//   return src([
//     `${options.paths.src.js}/libs/**/*.js`,
//     `${options.paths.src.js}/**/*.js`
//   ])
//       .pipe(concat({ path: 'scripts.js'}))
//       .pipe(uglify())
//       .pipe(dest(options.paths.build.js));
// }
//
// prodImages = () => {
//   return src(options.paths.src.img + '/**/*').pipe(imagemin()).pipe(dest(options.paths.build.img));
// }
//
// prodClean = () => {
//   console.log("\n\t" + logSymbols.info,"Cleaning build folder for fresh start.\n");
//   return del([options.paths.build.base]);
// }
//
// buildFinish = (done) => {
//   console.log("\n\t" + logSymbols.info,`Production build is complete. Files are located at ${options.paths.build.base}\n`);
//   done();
// }
//
// // gitClear = async () => {
// //
// // }
//
// gitter = async () => {
//     // del(`./.git/index.lock`, {force: true})
//     // log('Clear Done!');
//     const child = superChild(`rm -rf .git/index.lock`);
//     child.on('stdout_line', (line) => {
//          console.log(line + ' index lock removed')
//      });
//     return src(`${options.paths.root}`)
//         .pipe(git.add())
//         .on('end', function(){ log('git add Done!'); })
//         .pipe(git.commit(`${options.deploy.gitCommitMessage}`, {args:`${options.deploy.gitCommitArgs}`}))
//         .on('end', function(){ log('git commit Done!'); })
//         //.pipe(git.push(`${options.deploy.gitURL}`, `${options.deploy.gitBranch}`, errorFunction))
//         //.on('end', function(){ log('git push Done!'); })
// }
//
// push = async () => {
//     git.push(`${options.deploy.gitURL}`, `${options.deploy.gitBranch}`, errorFunction);
//     console.log('git push done!')
// }
//
// surgeDeploy = async () => {
//     const child = superChild(`surge ${options.paths.dist.base} ${options.deploy.surgeUrl}`);
//     child.on('stdout_line', () => {
//         console.log('Deployed to surge');
//     });
// }
//
// openBrowser = async () => {
//     const opt = {uri: `https://${options.deploy.surgeUrl}`};
//     return src('./dist')
//         .pipe(open(opt));
// }
//
// errorFunction = (err) => {
//     if (err) throw err;
// }
//
// // Deploy command
// exports.surge = series(surgeDeploy, openBrowser);
// exports.git = series(gitter);
// exports.push = series(push);
//
// exports.default = series(
//     devClean, // Clean Dist Folder
//     parallel(devStyles, devScripts, devImages, devHTML), //Run All tasks in parallel
//     livePreview, // Live Preview Build
//     watchFiles // Watch for Live Changes
// );
//
// exports.prod = series(
//     prodClean, // Clean Build Folder
//     parallel(prodStyles, prodScripts, prodImages, prodHTML), //Run All tasks in parallel
//     buildFinish
// );