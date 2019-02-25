// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* element ui  */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 隐藏元素类 */
import 'element-ui/lib/theme-chalk/display.css'
/* 过渡 动画 */ //fade/zoom
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
/* animate.css */
import animate from '../animate.css'
/* jq */
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI)
//过渡动画
Vue.component(CollapseTransition.name, CollapseTransition)
/*  */
Vue.use(animate)





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
