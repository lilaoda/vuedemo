// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import { AlertPlugin, ToastPlugin } from 'vux'
// /* eslint-disable */
import {AjaxPlugin, LoadingPlugin,ToastPlugin  } from 'vux';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(AjaxPlugin);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);

Vue.prototype.$http.defaults.baseURL = 'http://192.168.8.73:8085/';
Vue.config.debug = true;
Vue.config.productionTip = false;
// http请求拦截器
Vue.prototype.$http.interceptors.request.use(config => {
  Vue.$vux.loading.show({
    text: '正在加载...'
  })
  return config;
}, error => {
// 隐藏
  Vue.$vux.loading.hide();
  Vue.$vux.toast.text(error.message);
  // return Promise.reject(error)ud
  return error;
})
// http响应拦截器
Vue.prototype.$http.interceptors.response.use(data => {
  Vue.$vux.loading.hide()
  return data;
}, error => {
  Vue.$vux.loading.hide();
  Vue.$vux.toast.text(error.message);
  return error;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  // 这里的render: h => h(App)是es6的写法   ;
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(h){
  //     return h(App);
  // });
});
