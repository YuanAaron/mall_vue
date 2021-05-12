<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index' //index可以省略
export default { 
  name: 'App',
  components: {
  },
  data(){
    return {
      
    }
  },
  mounted(){
  // storage.setItem("a",1);
  // storage.setItem("user",{"a":1});
  // storage.setItem("b",1,"user");
  console.log(storage.getItem("user"));
  // console.log(storage.getItem("b","user"));
  //  storage.clear("a");
  // storage.clear("a","user");
  },
}
</script>

<style>

</style>
