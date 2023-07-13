/// <binding ProjectOpened='watcher' />
const del = require('del');
const GetGoogleFonts = require('get-google-fonts');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

const wwwroot = './wwwroot';
const tsProject = ts.createProject('tsconfig.json');

function cleanCSS(cb) {
    return del([`${wwwroot}/css/**`], cb);
}

function cleanJS(cb) {
    return del([`${wwwroot}/js/**`], cb);
}

function cleanFonts(cb) {
    return del([`${wwwroot}/fonts/**`], cb);
}

function minifyCSS(cb) {
    return gulp.src([`${wwwroot}/css/**/*.css`])
        .pipe(csso())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(`${wwwroot}/css`));
}

function minifyJS(cb) {
    return gulp.src([`${wwwroot}/js/**/*.js`])
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(`${wwwroot}/js`));
}

function transpileSASS(cb) {
    return gulp.src(['./Styles/**/*.scss', '!./Styles/lib/**/*'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${wwwroot}/css/`));
}

function transpileTS(cb) {
    tsProject()
    return gulp.src(["./Scripts/**/*.ts"]);
}

const buildCSS = gulp.series(transpileSASS, minifyCSS);
const buildJS = gulp.series(transpileTS, minifyJS);

function watchSCSS(cb) {
    return gulp.watch(['./Styles/**/*.scss'], gulp.series(cleanCSS, buildCSS));
}

function watchTS(cb) {
    return gulp.watch(['./Scripts/**/*.ts'], gulp.series(cleanJS, buildJS));
}

function getGoogleFonts(cb) {
    const fonts = new GetGoogleFonts({
        outputDir: `${wwwroot}/fonts`,
        cssFile: 'fonts.css'
    });
    return fonts.download('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,300,800italic,700italic,600italic,400italic,300italic,800,700,600');
}

function generateManifest(cb) {
    const id = process.env.OFFICE_ADDIN_ID || 'bcedd84e-dfb2-4bb4-aead-2c8625a7e821';
    const suffix = process.env.OFFICE_ADDIN_SUFFIX || '-pre';
    const url = process.env.OFFICE_ADDIN_URL || 'https://localhost:5001';

    del([`${wwwroot}/assets/manifest.xml`]);
    return gulp.src('./Areas/Office/manifest.xml')
        .pipe(replace(/bcedd84e-dfb2-4bb4-aead-2c8625a7e821/g, id))
        .pipe(replace(/https?:\/\/localhost:\d+/g, url))
        .pipe(replace(/(<DisplayName DefaultValue=")(.+)("\/>)/g, `$1$2${suffix}$3`))
        .pipe(gulp.dest('./wwwroot/assets/'));
}

const clean = gulp.parallel(cleanCSS, cleanJS, cleanFonts);
const build = gulp.parallel(buildCSS, getGoogleFonts);

exports.clean = clean;
exports.watcher = gulp.parallel(build, watchSCSS, watchTS);
exports.default = gulp.series(clean, build);
exports.genmanifest = gulp.series(generateManifest);