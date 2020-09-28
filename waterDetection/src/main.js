import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/homepage.vue'
import Footer from './components/footer.vue'
import HistoryList from './components/historylist.vue' 
import VCharts from 'v-charts'

import './assets/iconfont/iconfont.css'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(VueRouter) //使用Vuerouter对象
Vue.use(VCharts)

//配置路由规则
var router = new VueRouter({
	mode: 'history',
	routes: [{
			name: 'home',
			path: '/',
			components: {
				default: HomePage,
				footer: Footer
			}
		},
		{
				name: 'historylist',
				path: '/historylist',
				components: {
					default: HistoryList,
					footer: Footer
				}
			},
	]
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
