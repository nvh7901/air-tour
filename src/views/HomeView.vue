<template>
  <div id="wrapper">
    <TheBanner />

    <ThePlaces />

    <TheReviews />

    <ThePlan />
  </div>
</template>

<script>
import TheBanner from "@/components/Home/TheBanner.vue";
import ThePlaces from "@/components/Home/ThePlaces.vue";
import TheReviews from "@/components/Home/TheReviews.vue";
import ThePlan from "@/components/Home/ThePlan.vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    ThePlan,
    TheReviews,
    ThePlaces,
    TheBanner,
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorage");
  },
};
</script>
