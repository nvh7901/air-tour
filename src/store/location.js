import { getLocationListAPI } from "@/api/location";

/*
 * Dùng để định nghĩa các state
 * */
const state = () => {
  return {
    locationList: [],
  };
};

/*
 * Định nghĩa các hàm để thay đổi dữ liệu trạng thái trong VueX
 * */
const mutations = {
  // Nhận vào một payload và gán state bằng locationList ở trên
  setLocationMutation(state, payload) {
    state.locationList = payload;
  },
};

/*
 * Để định nghĩa các thao tác bất đồng bộ và gửi các mutation
 * */
const actions = {
  async getLocationListAction(context, payload) {
    const { data } = await getLocationListAPI(payload);
    context.commit("setLocationMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
