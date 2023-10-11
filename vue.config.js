const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue-calendar-custom': 'node_modules/vue-calendar-custom/VueCalendarCustom.umd.min.js' // Remplacez les valeurs appropriées
      }
    }
  }
})
