<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          :placeholder="$t(`bannerSearchInputPlaceholder`)"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>

      <ul class="list-location" v-if="locationList.length > 0 && keyword">
        <li
          v-for="location in locationList"
          :key="location.id"
          @click="handleClickLocation(location)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title" style="padding-left: 15px">{{
            location.name
          }}</span>
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      {{ $t("bannerSearchInputButton") }}
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SearchInputHome",
  setup() {
    const keyword = ref("");
    const store = useStore();
    const router = useRouter();
    let searchTimeout = null;

    watch(keyword, (newKeyword) => {
      if (searchTimeout !== null) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        store.dispatch("location/getLocationListAction", newKeyword);
      }, 2000);
    });
    const locationList = computed(() => store.state.location.locationList);

    const handleClickLocation = (location) => {
      router.push(`/rooms-location/${location._id}`);
    };
    return {
      locationList,
      keyword,
      handleClickLocation,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-search-input-item.location {
  position: relative;
  .list-location {
    position: absolute;
    top: 150%;
    list-style: none;
    background: #ffffff;
    color: #222;
    width: 100%;
    border-radius: 20px;
    padding: 7px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background: #f7f7f7;
      }
      .location-item-tile {
        margin-left: 20px;
      }
    }
  }
}
</style>
