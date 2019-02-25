import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstcompontents from '@/components/firstcompontents'
// import secondpage from '@/components/secondpage'
import about from '@/components/about'
import solution from '@/components/solution'
import customercase from '@/components/customercase'
import newsandinformation from '@/components/newsandinformation'
import contactus from '@/components/contactus'
/* resource */
import VueResource from 'vue-resource'
/* axios */
import axios from 'axios'

/*  */
import three from '@/components/three'


Vue.use(Router)
/* resource */ 
Vue.use(VueResource)
/* axios */
Vue.prototype.$axios = axios;

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/about',
			name: 'about',
			component: about
		},
		{
			path: '/solution',
			name: 'solution',
			component: solution
		},
		{
			path: '/customercase',
			name: 'customercase',
			component: customercase
		},
		{
			path: '/newsandinformation',
			name: 'newsandinformation',
			component: newsandinformation
		},
		{
			path: '/contactus',
			name: 'contactus',
			component: contactus
		},
		{
			path: '/three',
			name: 'three',
			component: three
		}
	]
})
