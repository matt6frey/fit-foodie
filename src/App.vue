<template>
  <Header />
  <div
    class="bg-gray-300 bg-[url('/images/tomatoes.jpg')] bg-cover h-screen py-10"
    id="appBG"
  >
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import feather from "feather-icons";

export default {
  name: "App",
  components: { Header },
  created() {
    feather.replace();
  },
};
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#appBG {
  /* background-blend-mode: luminosity; */
  background-position: center 35%;
}
</style>
