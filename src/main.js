import Vue from 'vue'
import axios from 'axios'
//axios使用时，每个页面都需要写axios且需要导入，很麻烦
//vue-axios把axios作用域对象挂载到Vue实例上，方便我们用this调用
import VueAxios from 'vue-axios' 
import App from './App.vue'
import router from './router'
import env from './env'

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

/**
 * 跨域：
 * 1、CORS
 * 2、JSONP
 * 3、接口代理
 */
//根据前端的跨域方式做出调整（适用于接口代理）
axios.defaults.baseURL = '/api';
//根据环境变量获取不同的请求地址(适用于CORS和JSONP)
axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;

//请求值统一处理
axios.interceptors.request.use(function (config) {
  console.log("目前什么也不做：",config);
  return config;
});

//接口错误拦截（返回值统一处理）
axios.interceptors.response.use(function (response) {
  let res = response.data;
  //成功
  if(res.status == 0) {
    return res.data;
  //未登录统一拦截
  }else if(res.status == 10){
    window.location.href = "/#/login";
  //统一报错
  } else {
    //后面会用element ui组件弹出报错信息
    alert(res.msg);
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
