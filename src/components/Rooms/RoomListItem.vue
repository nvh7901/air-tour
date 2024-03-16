<template>
  <!-- Listing Item -->
  <div class="col-lg-12 col-md-12">
    <div
      class="listing-item-container list-layout"
      data-marker-id="1"
      @click="handleClickRoom"
    >
      <a class="listing-item">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image" alt="" />
          <span class="tag">{{ $t("roomLocationTag") }}</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-badge now-open">
            {{ $t("roomLocationNowOpen") }}
          </div>

          <div class="listing-item-inner">
            <h3>{{ room.name }} <i class="verified-icon"></i></h3>
          </div>

          <span class="like-icon"></span>
        </div>
      </a>
    </div>
  </div>
  <!-- Listing Item / End -->
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "RoomListItem",
  props: {
    room: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleClickRoom = () => {
      router.push(`/room-detail-location/${props.room._id}`);
    };

    return {
      handleClickRoom,
    };
  },
};
</script>

<style lang="scss" scoped></style>
