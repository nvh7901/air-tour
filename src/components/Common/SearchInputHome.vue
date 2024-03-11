<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input id="autocomplete-input" type="text" placeholder="Location" />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>

      <ul class="list-location">
        <li>
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title" style="padding-left: 15px"
            >Hà Nội</span
          >
        </li>
        <li>
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title" style="padding-left: 15px"
            >Hồ Chí Minh</span
          >
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchInputHome",
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
