//此处配置只适用于CORS跨域和JSONP跨域，接口代理不适用（修改vue.config.js）
let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.coderap.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.coderap.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.coderap.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.coderap.cn/api';
    break;
}

export default {
  baseURL
}