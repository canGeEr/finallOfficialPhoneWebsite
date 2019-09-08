// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
axios({
  url: 'api/Harry/LoginServlet',
  method: 'post',
  data: {
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  dataType: "json"
}).then((res) => {
  console.log(res.data)
})
.catch(function (error) {
  console.log(error)
})

