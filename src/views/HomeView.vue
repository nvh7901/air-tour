<template>
  <div id="wrapper">
    <TheBanner />

    <TheCategories />

    <ThePlaces />

    <TheReviews />

    <ThePlan />

    <TheBlog />


  </div>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import TheReviews from "@/components/TheReviews.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheBlog from "@/components/TheBlog.vue";

export default {
  name: "HomeView",
  components: { TheBlog, ThePlan, TheReviews, ThePlaces, TheCategories, TheBanner },
};
</script>
