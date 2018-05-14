const browserSync = require('browser-sync').create()

browserSync.init({
  server: "src",
  watch: true
})