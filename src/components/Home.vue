<template>
  <div>
  <x-header :left-options="{showBack: false}" title='主页'></x-header>
    <view-box>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </view-box>
    <tabbar>
      <tabbar-item :link = "{path :'/main'}" >
        <img slot="icon" src="../assets/icon_nav_article.png" >
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/mine'}" :selected="$route.path === '/mine'" >
        <img slot="icon" src="../assets/icon_nav_button.png" >
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem, Group, Cell} from 'vux';

  export default {
    name: "home",
    components: {
      XHeader,
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>

<style scoped>

</style>
