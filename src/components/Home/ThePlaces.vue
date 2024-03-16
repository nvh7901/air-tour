<template>
  <!-- Fullwidth Section -->
  <section
    class="fullwidth margin-top-65 padding-top-75 padding-bottom-70"
    data-background-color="#f8f8f8"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-45">
            <strong class="headline-with-separator">{{
              $t("placesMostTitle")
            }}</strong>
            <span>{{ $t("placesMostContent") }}</span>
          </h3>
        </div>

        <div class="con-md-12">
          <div class="col-md-8 col-md-offset-2">
            <h3 class="headline centered headline-extra-spacing">
              <strong class="headline-with-separator">{{
                $t("placesWhatTitle")
              }}</strong>
              <span class="margin-top-25">{{ $t("placesWhatContent") }}</span>
            </h3>
          </div>
        </div>

        <div class="con-md-12">
          <div class="col-md-8 col-md-offset-2">
            <h3 class="headline centered headline-extra-spacing">
              <strong class="headline-with-separator">{{
                $t("placesPlanTitle")
              }}</strong>
              <span class="margin-top-25">{{ $t("placesPlanContent") }}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fullwidth Section / End -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ThePlaces",
};
</script>

<style lang="scss" scoped></style>
