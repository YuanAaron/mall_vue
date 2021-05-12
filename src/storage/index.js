/**
 * SessionStorage封装：ES6规范
 * key: mall
 * value: {"user":{"name":"zhangsan","age":23,"sex":1}}
 */
const STORAGE_KEY = 'mall';
export default {
  //存储值
  setItem(key,value,module_name) {
    //添加与name同级的{"b":1}
    if(module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      //递归
      this.setItem(module_name,val);
    } else {
      //添加与user同级的{"a":1}
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
  },
  getItem(key,module_name) {
    //获取某个模块user下面的属性name对应的值
    if(module_name) {
      //递归
      let val = this.getItem(module_name);
      if(val) {
         return val[key];
      }
    }
    //获取user对应的数据
    return this.getStorage()[key];
  },
  //获取mall对应的数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  //清空某个值
  clear(key,module_name) {
    let val = this.getStorage();
    if(module_name) {
      if(!val[module_name]) return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
   window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
  }
}