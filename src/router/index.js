import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "@/views/Blog.vue";
import Rooms from "@/views/Rooms.vue";
import RoomDetail from "@/views/RoomDetail.vue";
import Contact from "@/views/Contact.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/rooms/:locationId",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/room-detail/:roomId",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
