import { loginAPI, registerAPI } from "@/api/auth";

const state = () => {
  return {
    register: {},
    login: {},
  };
};

const mutations = {
  setRegisterMutation(state, payload) {
    state.register = payload;
  },
  setLoginMutation(state, payload) {
    state.login = payload;
    localStorage.setItem("login", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorageMutation(state, payload) {
    state.login = payload;
  },
};

/*
 * Để định nghĩa các thao tác bất đồng bộ và gửi các mutation
 * */
const actions = {
  async registerAction({ commit }, { data, router }) {
    const userRegister = await registerAPI(data);
    router.push("/login");
    commit("setRegisterMutation", userRegister);
  },

  async loginAction({ commit }, { data, router }) {
    const userLogin = await loginAPI(data);
    router.push("/");
    commit("setLoginMutation", userLogin);
  },

  loadUserLoginFromLocalStorage({ commit }) {
    let userLogin = null;
    if (localStorage.getItem("login")) {
      userLogin = JSON.parse(localStorage.getItem("login"));
    }
    commit("setUserLoginFromLocalStorageMutation", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
