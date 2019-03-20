<template>
  <div class="hello">
    <img src="../assets/dog.jpg" style="width: 5em; height: 5em; border-radius: 0.5em">
    <p>{{ account }}</p>
    <group>
      <x-input title="手机号码" name="mobile" v-model="account" placeholder="请输入手机号码" keyboard="number"
               is-type="china-mobile"/>
      <x-input title="密码" name="password" v-model="password" placeholder="请输入密码" is-type="number"/>
    </group>
    <XButton id="login" type="primary"  @click.native="login()">登陆</XButton>
    <XButton id="register" type="primary" @click.native="register()">注册</XButton>
  </div>
</template>

<script>
  import {XButton, XInput, Group,Toast } from 'vux';

  let resdata = {
    code: '',
    msg: '',
    data: {
      account: '',
      age: 0,
      id: '',
      name: "黎老大",
      password: "123456",
      sex: "男",
      token: "cfc78aee2a8e432ecd9447e997146234",
    },
  }
  export default {
    name: 'Login',
    data() {
      return {
        msg: 'Welcome Login',
        account: '',
        password: '',
      };
    },
    // params: { id: '1' }
    methods: {
      login() {
        this.$http.post('/user/login', {
          account: this.account,
          password: this.password,
        })
          .then((res) => {
            console.log(res.data)
            resdata = res.data;
            if (resdata.code == 1) {
              this.saveUserInfo(resdata.data);
              console.log(this.getUserInfo())
              this.$router.push({name: 'home'});
            } else {
              this.$vux.toast.show({
                text: resdata.msg,
                type: 'cancel',
                // time:4000
              })
              // alert(resdata.msg);
            }
          })
          .catch(function (error) {
            console.log(error);

            // alert(error.message);
          });
      },
      register() {
        this.$router.push({name: 'register'});
      },
      saveUserInfo(userinfo) {
        // this.localStorage.setItem('account', this.account);
        // this.localStorage.setItem('password', this.password);
      return window.localStorage.setItem("userinfo",JSON.stringify(userinfo));
      },
      getUserInfo() {
        // this.localStorage.setItem('account', this.account);
        // this.localStorage.setItem('password', this.password);
        return window.localStorage.getItem("userinfo");
      }
    },
    components: {
      XButton,
      XInput,
      Group,
      Toast,
    },
  };

</script>

