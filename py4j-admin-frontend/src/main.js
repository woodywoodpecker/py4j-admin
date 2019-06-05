// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入nprogress进度条
// import NProgress from 'nprogress'
// 引入nprogress进度条的样式
import 'nprogress/nprogress.css'

// 导入axios
import axios from 'axios'

// 引入字体图标
import './assets/iconfont/iconfont.css'
// 公共样式
import './assets/css/public.css'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入登录组件
const Login = () => import(/* webpackChunkName: "home" */ '@/components/login')

Vue.use(ElementUI)

Vue.config.productionTip = false

// 把axios对象绑定到Vue原型中全局使用
Vue.prototype.axios = axios

Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
