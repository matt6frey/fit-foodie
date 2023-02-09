<template>
  <div class="flex py-5 align-center bg-slate-300">
    <div><p>ChatApp-4</p></div>
    <div class="flex justify-content-right">
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  outline: solid 1px red;
}
</style>
