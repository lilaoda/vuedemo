<template>
  <div>
    <p>register</p>
    <button v-on:click = "register()">register</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    register() {
      window.alert(123);
    },
  },
};
</script>

<style scoped>

</style>
