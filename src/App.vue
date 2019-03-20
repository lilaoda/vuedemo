<template>
  <div id="app" >
    <!--<img src="./assets/logo.png">-->
    <!--<x-header :left-options="{showBack: false}" title='登陆'></x-header>-->
    <!--<ul>-->
    <!--<li><router-link to="/Login">Login</router-link></li>-->
    <!--<li><router-link to="/Register">Register</router-link></li>-->
    <!--</ul>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import {Tabbar, XHeader} from 'vux';

  export default {
    name: 'App',
    components: {
      Tabbar,
      XHeader,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*width: 100%;*/
    /*background-size: 500px auto;*/
    /*background:url('./assets/dog.jpg');*/
    /*background-image: ;*/
    /*background: rgba(251, 188, 147, 0.91);*/
    margin-top: 0px;
  }
</style>
