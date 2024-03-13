import { registerAPI } from "@/api/auth";

const state = () => {
  return {
    register: {},
  };
};

const mutations = {
  setRegisterMutation(state, payload) {
    state.register = payload;
  },
};

/*
 * Để định nghĩa các thao tác bất đồng bộ và gửi các mutation
 * */
const actions = {
  async registerAction({ commit }, { data, router }) {
    const userRegister = await registerAPI(data);
    router.push("/login");
    commit("setUserRegisterMutation", userRegister);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
