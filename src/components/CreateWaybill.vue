<template>
  <div>
    <x-header :left-options="{showBack: true, backText:'返回'}">移动开单</x-header>
    <div>
      <flexbox style="padding: 2px;border: 1px gray solid;margin-left:5px;margin-right: 5px;height: 40px">
        <flexbox-item :span="1/7">
          <div style="width: 20px">
            <p style="font-size: 14px">寄</p>
          </div>
        </flexbox-item>

        <flexbox-item :span="3/7" style=" height: 40px;">
          <label style="float: left;height: 100%;text-align:center;line-height: 300%;font-size: 14px">姓名:</label>
          <x-input aria-label="24324" class="inputline" placeholder="请输入姓名"/>
        </flexbox-item>

        <flexbox-item :span="3/7">
          <label style="float: left;height: 100%;text-align:center;line-height: 300%;font-size: 14px">电话:</label>
          <x-input class="inputline" placeholder="请输入电话" keyboard="number"/>
        </flexbox-item>

      </flexbox>

    </div>
  </div>
</template>

<script>
  import {XHeader, XInput, Flexbox, FlexboxItem, Group,XAddress } from 'vux';

  export default {
    name: 'create-waybill',
    components: {
      XHeader,
      XInput,
      Flexbox,
      FlexboxItem,
      Group,XAddress
    },
    data() {
      return {
        msg: 'Welcome Login',
        account: '',
        password: '',
      };
    },
  }
</script>

<style scoped>
  .inputline {
    border-color: #959595;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    font-size: small;
    /*padding-left: 10px;*/
  }
</style>
