
const { src, dest, watch, parallel, series } = require('gulp');
   const scss          = require('gulp-sass');
   const browserSync   = require('browser-sync').create();
   const autoprefixer  = require('gulp-autoprefixer');
   const concat        = require('gulp-concat');
   const uglify        = require('gulp-uglify-es').default;
   const imagemin      = require ('gulp-imagemin');
   const del           = require ('del');

function images () {
  return src ('app/images/**/*')
  .pipe (imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
  .pipe(dest('dist/images'))
}

function styles() {
      return src([
        'node_modules/normalize.css/normalize.css', 
        'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        'node_modules/slick-carousel/slick/slick.css', 
        'node_modules/slick-carousel/slick/slick-theme.css', 
        'app/scss/style.scss'])
          .pipe(scss({outputStyle: 'compressed'}))
          .pipe(concat ('style.min.css'))
          .pipe(autoprefixer({
              overrideBrowserslist: ['last 8 versions']
           }))
          .pipe(dest('app/css'))
          .pipe(browserSync.stream())

} 

 function scripts (){
    return src([        
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'app/js/main.js'])
      .pipe (concat ('main.min.js'))
      .pipe (uglify())
      .pipe (dest('app/js'))
      .pipe(browserSync.stream())    
 }

 function build (){
   return src([
     'app/css/style.min.css',
     'app/fonts/**/*',
     'app/js/main.min.js',
     'app/*.html'
   ], {base:'app'})
   .pipe(dest('dist')) 
 }

 function cleandist (){
   return del('dist')
 } 

  function watching (){
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/*.html']).on('change', browserSync.reload);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
 }

  function browsersync (){
  browserSync.init({
     server: {
         baseDir: 'app/' 
      }
   });
 }

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;

exports.build = series(cleandist, images, build);
exports.default = parallel (browsersync, watching, scripts);

