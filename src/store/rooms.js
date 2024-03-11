import { getReviewRoomDetailAPI, getRoomDetailAPI, getRoomListByLocationAPI } from "@/api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
    reviewRoomDetail: {}
  };
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
  setReviewRoomDetailMutation(state, payload) {
    state.reviewRoomDetail = payload;
  }
};

const actions = {
  // Lấy ra Detail Room theo vị trí
  async getRoomListByLocation(context, payload) {
    const data = await getRoomListByLocationAPI(payload);
    context.commit("setRoomListMutation", data);
  },
  // Lấy ra chi tiết phòng
  async getRoomDetail(context, payload) {
    const data = await getRoomDetailAPI(payload);
    context.commit("setRoomDetailMutation", data);
  },
  // Lấy ra review theo phòng
  async getReviewRoom(context, payload) {
    const data = await getReviewRoomDetailAPI(payload);
    context.commit("setReviewRoomDetailMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
