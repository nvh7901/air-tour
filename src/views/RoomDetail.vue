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
              <span>
                <a href="#listing-location" class="listing-address">
                  <i class="fa fa-map-marker"></i>
                </a>
              </span>
              <div class="star-rating" data-rating="5">
                <div class="rating-counter">
                  <a href="#listing-reviews">(31 reviews)</a>
                </div>
                <span class="star"></span><span class="star"></span
                ><span class="star"></span><span class="star"></span
                ><span class="star"></span>
              </div>
            </div>
          </div>

          <!-- Listing Nav -->
          <div id="listing-nav" class="listing-nav-container">
            <ul class="listing-nav">
              <li><a href="#listing-overview" class="">Overview</a></li>
              <li><a href="#listing-gallery">Gallery</a></li>
              <li><a href="#listing-reviews">Reviews</a></li>
            </ul>
          </div>

          <!-- Overview -->
          <div id="listing-overview" class="listing-section">
            <!-- Apartment Description -->
            <ul class="apartment-details">
              <li>{{ roomDetail.guests }} guests</li>
              <li>{{ roomDetail.bedRoom }} bedroom</li>
              <li>{{ roomDetail.bath }} bathroom</li>
            </ul>

            <!-- Description -->
            <p>
              {{ roomDetail.description }}
            </p>
          </div>

          <!-- Slider -->
          <div id="listing-gallery" class="listing-section">
            <h3 class="listing-desc-headline margin-top-70">Gallery</h3>
            <img :src="roomDetail.image" :alt="roomDetail.image" />
          </div>

          <!-- Reviews -->
          <div id="listing-reviews" class="listing-section">
            <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
              Reviews
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
            <i class="sl sl-icon-check"></i> Verified Listing
            <div
              class="tip-content"
              style="width: 373.328px; max-width: 373.328px"
            >
              Listing has been verified and belongs the business owner or
              manager.
            </div>
          </div>

          <!-- Book Now -->
          <div
            id="booking-widget-anchor"
            class="boxed-widget booking-widget margin-top-35"
          >
            <h3><i class="fa fa-calendar-check-o"></i> Booking</h3>

            <!-- Book Now -->
            <router-link
              :to="`/booking/${roomDetail._id}`"
              class="button book-now fullwidth margin-top-5"
              >Request To Book</router-link
            >

            <!-- Estimated Cost -->
            <!-- 				<div class="booking-estimated-cost">
                      <strong>Total Cost</strong>
                      <span>$49</span>
                    </div> -->
          </div>
          <!-- Book Now / End -->

          <!-- Contact -->
          <div class="boxed-widget margin-top-35">
            <div class="hosted-by-title">
              <h4>
                <span>Hosted by</span>
                <a href="pages-user-profile.html">Tom Perrin</a>
              </h4>
              <a href="pages-user-profile.html" class="hosted-by-avatar"
                ><img src="images/dashboard-avatar.jpg" alt=""
              /></a>
            </div>
            <ul class="listing-details-sidebar">
              <li><i class="sl sl-icon-phone"></i> (123) 123-456</li>
              <!-- <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> -->
              <li>
                <i class="fa fa-envelope-o"></i> <a href="#">tom@example.com</a>
              </li>
            </ul>

            <ul class="listing-details-sidebar social-profiles">
              <li>
                <a href="#" class="facebook-profile"
                  ><i class="fa fa-facebook-square"></i> Facebook</a
                >
              </li>
              <li>
                <a href="#" class="twitter-profile"
                  ><i class="fa fa-twitter"></i> Twitter</a
                >
              </li>
              <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
            </ul>

            <!-- Reply to review popup -->
            <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
              <div class="small-dialog-header">
                <h3>Send Message</h3>
              </div>
              <div class="message-reply margin-top-0">
                <textarea
                  cols="40"
                  rows="3"
                  placeholder="Your message to Tom"
                ></textarea>
                <button class="button">Send Message</button>
              </div>
            </div>

            <a
              href="#small-dialog"
              class="send-message-to-owner button popup-with-zoom-anim"
              ><i class="sl sl-icon-envelope-open"></i> Send Message</a
            >
          </div>
          <!-- Contact / End-->

          <!-- Share / Like -->
          <div class="listing-share margin-top-40 margin-bottom-40 no-border">
            <button class="like-button">
              <span class="like-icon"></span> Bookmark this listing
            </button>
            <span>159 people bookmarked this place</span>

            <!-- Share Buttons -->
            <ul class="share-buttons margin-top-40 margin-bottom-0">
              <li>
                <a class="fb-share" href="#"
                  ><i class="fa fa-facebook"></i> Share</a
                >
              </li>
              <li>
                <a class="twitter-share" href="#"
                  ><i class="fa fa-twitter"></i> Tweet</a
                >
              </li>
              <li>
                <a class="gplus-share" href="#"
                  ><i class="fa fa-google-plus"></i> Share</a
                >
              </li>
              <!-- <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> -->
            </ul>
            <div class="clearfix"></div>
          </div>
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
  name: "RoomDetail",
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
