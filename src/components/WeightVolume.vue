<template>
  <div>
    <x-header :left-options="{showBack: true, backText:'返回'}">异形货反馈</x-header>
    <div>
      <group>
        <x-input class="div-waybill" title="运单号： " placeholder="请输入运单号" style="padding-right: 0; margin-right: 0">
          <img class="img-camera" slot="right" src="../assets/icon_search_camera.png"
               style="padding-right:10px;display: block; width:50%; height: 100%"/>
        </x-input>
      </group>
    </div>
    <group style=" border: 1px;solid:#69ab96;">
      <x-input title="开单体积" ><p slot="right">m3</p></x-input>

    </group>
    <group>
      <x-textarea title="体积描述：" :max="20"></x-textarea>
    </group>
    <div>
      <select id="abnormal-type" name="异形类型：">
        <option disabled value="">请选择</option>
        <option v-for="item in abnormalTypes" :value="item.typeId">{{ item.type }}</option>
      </select>
    </div>


  </div>

</template>

<script>
  import {XHeader, XInput, XTextarea, Flexbox, FlexboxItem} from 'vux';
  import Selector from "vux/src/components/selector/index";

  export default {
    name: "test1",
    components: {
      Selector,
      XHeader,
      XInput,
      XTextarea,
      Flexbox,
      FlexboxItem,
    },
    data() {
      return {
        abnormalTypes: [
          {
            type: '过长',
            typeId: '1',
          },
          {
            type: '过重',
            typeId: '2',
          },
        ]
      };
    },
  }
</script>

<style scoped>

  .div-waybill {
    padding: -10px;
    margin: 10px;
    text-align: center;
    border: 1px green solid;
  }

  .img-camera {
    width: 20px;
    height: 20px;
  }

</style>
