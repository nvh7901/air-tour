import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "@/views/Contact.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import RoomDetailLocation from "@/views/RoomDetailLocation.vue";
import RoomsLocation from "@/views/RoomsLocation.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Trang Chủ",
    },
  },
  {
    path: "/rooms-location/:locationId",
    name: "RoomsLocation",
    component: RoomsLocation,
    meta: {
      title: "Danh Sách Phòng Theo Vị Trí",
    },
  },
  {
    path: "/room-detail-location/:roomId",
    name: "RoomDetailLocation",
    component: RoomDetailLocation,
    meta: {
      title: "Chi Tiết Phòng Theo Vị Trí",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Liên Hệ",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Đăng Nhập",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Đăng Ký",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Trang không tồn tại";
  next();
});
export default router;
