<template>
  <!-- Info Section -->
  <section
    class="fullwidth padding-top-30 padding-bottom-70"
    data-background-color="#f9f9f9"
  >
    <div class="container">
      <div class="row icons-container">
        <!-- Stage -->
        <div class="col-md-4">
          <div class="icon-box-2 with-line">
            <i class="im im-icon-Map2"></i>
            <h3>{{ $t("planFindTitle") }}</h3>
            <p>
              {{ $t("planFindContent") }}
            </p>
          </div>
        </div>

        <!-- Stage -->
        <div class="col-md-4">
          <div class="icon-box-2 with-line">
            <i class="im im-icon-Mail-withAtSign"></i>
            <h3>{{ $t("planContactTitle") }}</h3>
            <p>
              {{ $t("planContactContent") }}
            </p>
          </div>
        </div>

        <!-- Stage -->
        <div class="col-md-4">
          <div class="icon-box-2">
            <i class="im im-icon-Checked-User"></i>
            <h3>{{ $t("planeMakeTitle") }}</h3>
            <p>
              {{ $t("planMakeContent") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Info Section / End -->
</template>

<script>
export default {
  name: "ThePlan",
};
</script>

<style lang="scss" scoped></style>
