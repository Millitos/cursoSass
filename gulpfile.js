//extrayendo src y dest de gulp - destructuring
const {src, dest, watch, series,parallel} = require('gulp'); //16 //18.2
const sass = require('gulp-sass')(require('sass')); //18.1
const imagemin = require('gulp-imagemin'); //38
const notify = require('gulp-notify'); //39
const webp = require('gulp-webp'); //40
const concat = require('gulp-concat'); //45

sass.compiler = require('dart-sass'); //20

//objeto para guardar los paths o direcciones
const paths = { //41
    imagenes : 'src/img/**/*',
    scss:"./src/scss/**/*.scss",
    js: 'src/js/**/*.js'
}


//tarea 1. (funcion que compila sass)
function compilarSASS(){
    //encuentra el archivo y luego a ese archivo le aplica sass()
    return src("./src/scss/app.scss") //encuentra el archivo escrito en sass //paths.scss
    .pipe(sass()) //convierte el archivo sass en css
    .pipe(dest("./build/css")) //guarda el archivo convertido en esa direccion
}

//tarea que comprime las lineas del css, hace que pese menos el archivo
function minificarCss(){
    //encuentra el archivo y luego a ese archivo le aplica sass()
    return src("./src/scss/app.scss") //encuentra el archivo escrito en sass //paths.scss
    .pipe(sass({outputStyle: 'compressed'})) //convierte el archivo sass en css y lo comprime
    .pipe(dest("./build/css")) //guarda el archivo convertido en esa direccion
}

function watchArchivos(){ //21
    //toma el archivo donde se hacen los cambios y que tarea va a ejecutar
    watch(paths.scss, compilarSASS); //24 //27
    watch(paths.js, javascript); //escucha los cambios dentro del archivo paths.js y ejecuta la funcion javascript
}

function imagenes(){
    //de esta manera tiene acceso a todas las img dentro de la carpeta img y ademas,
    //dentro de las carpetas que estan dentro de la carpeta img
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen minificada'}));
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img')) //ubicacion donde va a guardar
    .pipe(notify({message:'Version webP lista'}));
}

function javascript(){
    return src(paths.js)
    .pipe(concat('bundle.js')) //concat(fileName)
    .pipe(dest('./build/js'));
}


        //nombreQueLeQuieroDar
                        //nombreFuncion
exports.compilarSASS = compilarSASS; //9
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;
exports.javascript = javascript;

//compila por default las 3 funciones en orden de declaracion,
//se compila solo escribiendo 'gulp' en el terminal
exports.default = series(compilarSASS, javascript ,imagenes, versionWebp, watchArchivos);
