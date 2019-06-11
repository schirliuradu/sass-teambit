
let mix = require('laravel-mix');

mix.js('src/js/index.js', 'dist/js/script.js');
mix.sass('src/scss/main.scss', 'dist/css/style.css');

var browserSync = require("browser-sync").create();

browserSync.init({
    watch: true,
    port: 3000,
    server: {
      baseDir: "./",
      index: "index.html",
    }
});
