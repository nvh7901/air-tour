<template>
  <section class="listings-container margin-top-30">
    <!-- Sorting / Layout Switcher -->
    <div class="row fs-switcher"></div>

    <!-- Listings -->
    <div class="row fs-listings" v-if="roomList.length > 0">
      <RoomListItem v-for="room in roomList" :key="room.id" :room="room" />
    </div>
    <!-- Listings Container / End -->

    <!-- Pagination Container -->
    <div class="row fs-listings">
      <div class="col-md-12">
        <!-- Pagination -->
        <div class="clearfix"></div>
        <div class="row">
          <div class="col-md-12">
            <!-- Pagination -->
            <div class="pagination-container margin-top-15 margin-bottom-40">
              <nav class="pagination">
                <ul>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- Pagination / End -->
      </div>
    </div>
    <!-- Pagination Container / End -->
  </section>
</template>

<script>
import RoomListItem from "@/components/Rooms/RoomListItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "RoomList",
  components: { RoomListItem },
  setup() {
    const store = useStore();
    const roomList = computed(() => store.state.rooms.roomList);

    return {
      roomList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
