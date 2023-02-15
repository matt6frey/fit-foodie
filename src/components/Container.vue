<template>
  <div class="w-full">
    <div
      class="
        mx-auto
        sm:w-10/12
        lg:w-11/12
        rounded-lg
        shadow-md shadow-grey-300
        p-4
        bg-white
        h-2/3
      "
    >
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
};
</script>

