<template>
  <!-- Banner
    ================================================== -->
  <div
    class="main-search-container centered"
    style="background-image: url('images/main-search-background-01.jpg')"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              {{ $t("bannerFindNearBy") }}
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4>{{ $t("bannerExpolore") }}</h4>

            <SearchInputHome />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInputHome from "@/components/Common/SearchInputHome.vue";

export default {
  name: "TheBanner",
  components: { SearchInputHome },
};
</script>

<style lang="scss" scoped></style>
