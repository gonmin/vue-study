// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VConsole from 'vconsole'
import App from './App'
import router from './router'
var vConsoleInstance = new VConsole()
console.log('Hello world', vConsoleInstance)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
