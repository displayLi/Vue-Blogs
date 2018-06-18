// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource' 
import VueRouter from 'vue-router'
import routed from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://wd9771413512zwwrev.wilddogio.com'
// axios defaults.headers.post['Content-type'] = 'application / x-www-form-urlencode'
// axios defaults.headers.get['Accepts'] = 'application / json'

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)

Vue.directive('changColor',{
	bind(el,binding,xxx){
		el.style.color = '#' + Math.random().toString(15).slice(2,8);
	}
})

Vue.filter('length',e => {
	return e.slice(0,100) + '...';
})


const router = new VueRouter({
	routes:routed,
	mode:'history',
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
