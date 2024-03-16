<template>
  <div id="wrapper">
    <!-- Gradient-->
    <div class="single-listing-page-titlebar"></div>

    <!-- Content
    ================================================== -->
    <div class="container">
      <div class="row sticky-wrapper">
        <div class="col-lg-8 col-md-8 padding-right-30">
          <!-- Titlebar -->
          <div id="titlebar" class="listing-titlebar">
            <div class="listing-titlebar-title">
              <h2>
                {{ roomDetail.name }}
              </h2>
            </div>
          </div>

          <!-- Listing Nav -->
          <div id="listing-nav" class="listing-nav-container">
            <ul class="listing-nav">
              <li>
                <a href="#listing-overview" class="">{{
                  $t("roomDetailListingNavOverview")
                }}</a>
              </li>
              <li>
                <a href="#listing-gallery">{{
                  $t("roomDetailListingNavGallery")
                }}</a>
              </li>
              <li>
                <a href="#listing-reviews">{{
                  $t("roomDetailListingNavReview")
                }}</a>
              </li>
            </ul>
          </div>

          <!-- Overview -->
          <div id="listing-overview" class="listing-section">
            <!-- Apartment Description -->
            <ul class="apartment-details">
              <li>
                {{ roomDetail.guests }} {{ $t("roomDetailOverviewGuest") }}
              </li>
              <li>
                {{ roomDetail.bedRoom }} {{ $t("roomDetailOverviewBedroom") }}
              </li>
              <li>
                {{ roomDetail.bath }} {{ $t("roomDetailOverviewBathroom") }}
              </li>
            </ul>

            <!-- Description -->
            <p>
              {{ roomDetail.description }}
            </p>
          </div>

          <!-- Slider -->
          <div id="listing-gallery" class="listing-section">
            <h3 class="listing-desc-headline margin-top-70">
              {{ $t("roomDetailListingNavGallery") }}
            </h3>
            <img :src="roomDetail.image" :alt="roomDetail.image" />
          </div>

          <!-- Reviews -->
          <div id="listing-reviews" class="listing-section">
            <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
              {{ $t("roomDetailListingNavReview") }}
            </h3>

            <!-- Reviews -->
            <ReviewRoom
              v-for="reviewRoom in reviewRoomDetail"
              :key="reviewRoom.id"
              :reviewRoom="reviewRoom"
            />
          </div>
        </div>

        <!-- Sidebar
        ================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-75 sticky">
          <!-- Verified Badge -->
          <div
            class="verified-badge with-tip"
            data-tip-content="Listing has been verified and belongs the business owner or manager."
          >
            <i class="sl sl-icon-check"></i>{{ $t("roomDetailVerified") }}
          </div>

          <!-- Book Now -->
          <div
            id="booking-widget-anchor"
            class="boxed-widget booking-widget margin-top-35"
          >
            <h3>
              <i class="fa fa-calendar-check-o"></i
              >{{ $t("roomDetailBooking") }}
            </h3>

            <!-- Book Now -->
            <a href="#" class="button book-now fullwidth margin-top-5">{{
              $t("roomDetailRequestToBook")
            }}</a>

            <!-- Estimated Cost -->
            <!-- 				<div class="booking-estimated-cost">
                      <strong>Total Cost</strong>
                      <span>$49</span>
                    </div> -->
          </div>
          <!-- Book Now / End -->
        </div>
        <!-- Sidebar / End -->
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import ReviewRoom from "@/components/DetailRoom/ReviewRoom.vue";

export default {
  name: "RoomDetailLocation",
  components: { ReviewRoom },
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("rooms/getRoomDetail", route.params.roomId);
    store.dispatch("rooms/getReviewRoom", route.params.roomId);
    const roomDetail = computed(() => store.state.rooms.roomDetail);

    const reviewRoomDetail = computed(() => store.state.rooms.reviewRoomDetail);
    return {
      roomDetail,
      reviewRoomDetail,
    };
  },
};
</script>

<style></style>
