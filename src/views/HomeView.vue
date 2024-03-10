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
import TheBanner from "@/components/Home/TheBanner.vue";
import TheCategories from "@/components/Home/TheCategories.vue";
import ThePlaces from "@/components/Home/ThePlaces.vue";
import TheReviews from "@/components/Home/TheReviews.vue";
import ThePlan from "@/components/Home/ThePlan.vue";
import TheBlog from "@/components/Home/TheBlog.vue";

export default {
  name: "HomeView",
  components: {
    TheBlog,
    ThePlan,
    TheReviews,
    ThePlaces,
    TheCategories,
    TheBanner,
  },
};
</script>
