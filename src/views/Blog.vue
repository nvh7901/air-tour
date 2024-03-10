<template>
  <div id="wrapper">
    <TheTitleBar />

    <TheContent />
  </div>
</template>

<script>
import TheTitleBar from "@/components/Blog/TheTitleBar.vue";
import TheContent from "@/components/Blog/TheContent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Blog",
  components: { TheContent, TheTitleBar },
};
</script>

<style lang="scss" scoped></style>
