<template>
  <div>
  <group-title>3 columns</group-title>
  <grid :show-lr-borders="true" :show-vertical-dividers="true" >
    <grid-item :link= "{path :'/weightVolume'}" >
      <img slot="icon" src="../assets/icon_profiled_goods.png">
      <span slot="label">异形货反馈</span>
    </grid-item>
    <grid-item :link= "{path :'/weightVolume'}"  >
      <img slot="icon" src="../assets/icon_quick_pick.png">
      <span slot="label">拍照制单</span>
    </grid-item>
    <grid-item :link= "{path :'/weightVolume'}"  >
      <img slot="icon" src="../assets/icon_quick_pick.png">
      <span slot="label">价格查询</span>
    </grid-item>
    <grid-item :link= "{path :'/CreateWaybill'}"  >
      <img slot="icon" src="../assets/icon_quick_pick.png">
      <span slot="label">移动开单</span>
    </grid-item>
  </grid>
  </div>
</template>

<script>
  import {Grid, GridItem, GroupTitle} from 'vux';

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
    },
    name: "main"
  }
</script>

<style scoped>

</style>
