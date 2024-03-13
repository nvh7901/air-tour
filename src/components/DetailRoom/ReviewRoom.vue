<template>
  <div class="clearfix"></div>
  <section class="comments listing-reviews">
    <ul>
      <li v-if="reviewRoom.userId">
        <div class="avatar">
          <img :src="reviewRoom.userId.avatar" alt="reviewRoom.userId.avatar" />
        </div>
        <div class="comment-content">
          <div class="arrow-comment"></div>
          <div class="comment-by">
            {{ reviewRoom.userId.name }}
            <i
              class="tip"
              data-tip-content="Person who left this review actually was a customer"
              ><div class="tip-content">
                Person who left this review actually was a customer
              </div></i
            >
            <span class="date">{{ formattedDateTime }}</span>
          </div>
          <p>
            {{ reviewRoom.content }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ReviewRoom",
  props: {
    reviewRoom: {
      type: Object,
    },
  },

  setup(props) {
    const formattedDateTime = computed(() => {
      const originalDate = new Date(props.reviewRoom.created_at);
      const year = originalDate.getFullYear();
      const month = String(originalDate.getMonth() + 1).padStart(2, "0");
      const day = String(originalDate.getDate()).padStart(2, "0");
      const hours = String(originalDate.getHours()).padStart(2, "0");
      const minutes = String(originalDate.getMinutes()).padStart(2, "0");
      const seconds = String(originalDate.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    });

    return {
      formattedDateTime,
    };
  },
};
</script>

<style lang="scss" scoped></style>
