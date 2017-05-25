/* global hexo */
'use strict'

var sassRenderer = require('./lib/renderer')
// export hexo to global vm context
global.hexo = hexo
// associate the Sass renderer with .scss AND .sass extensions
hexo.extend.renderer.register('scss', 'css', sassRenderer('scss'), true)
hexo.extend.renderer.register('sass', 'css', sassRenderer('sass'))
