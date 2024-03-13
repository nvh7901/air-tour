import { createStore } from "vuex";
import location from "@/store/location";
import rooms from "@/store/rooms";
import auth from "@/store/user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    rooms,
    auth,
  },
});
