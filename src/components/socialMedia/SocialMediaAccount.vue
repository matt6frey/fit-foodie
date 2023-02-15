<template>
  <div class="text-sm">
    <a :href="link">
      <i :data-feather="socialIcon" class="text-white"></i>
    </a>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "SocialMediaAccount",
  props: {
    icon: {
      type: String,
      default: "circle",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  data: () => ({
    availableSocialMedia: ["twitter", "facebook", "instagram", "linkedin"],
  }),
  mounted() {
    feather.replace();
  },
  computed: {
    socialIcon() {
      if (!this.availableSocialMedia.includes(this.icon)) {
        console.warn(
          `${this.icon} social media icon is unavailable. Using default icon: circle.`
        );
        return "circle";
      }
      return this.icon;
    },
  },
};
</script>
