<template>
  <div>
    <div class="flex py-2 justify-end bg-black px-4">
      <SocialMediaAccount icon="instagram" class="mr-1" />
      <SocialMediaAccount icon="twitter" />
      <SocialMediaAccount icon="facebook" />
    </div>
    <div
      class="
        flex
        py-5
        align-center
        bg-slate-300
        px-4
        shadow-lg shadow-grey-300/30
        bg-gradient-to-r
        from-green-500
        to-orange-400
      "
    >
      <div class="w-1/4 flex items-center">
        <h1 class="text-2xl">FitFoodie</h1>
      </div>
      <div class="w-3/4 justify-end flex items-center">
        <div class="p-3 flex cursor-pointer">
          <i data-feather="menu" class="mr-2"></i>
          <span>Menu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import SocialMediaAccount from "@/components/socialMedia/SocialMediaAccount.vue";
export default {
  name: "AppHeader",
  components: {
    SocialMediaAccount,
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
/* div {
  outline: solid 1px red;
} */
</style>
