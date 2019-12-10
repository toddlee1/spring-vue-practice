import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueLogger from 'vuejs-logger'

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);

export default router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});