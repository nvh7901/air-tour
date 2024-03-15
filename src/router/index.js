import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "@/views/Blog.vue";
import Rooms from "@/views/Rooms.vue";
import RoomDetail from "@/views/RoomDetail.vue";
import Contact from "@/views/Contact.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Booking from "@/views/Booking.vue";

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
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/rooms/:locationId",
    name: "Rooms",
    component: Rooms,
    meta: {
      title: "Danh Sách Phòng",
    },
  },
  {
    path: "/room-detail/:roomId",
    name: "RoomDetail",
    component: RoomDetail,
    meta: {
      title: "Chi Tiết Phòng",
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
  {
    path: "/booking/:roomId",
    name: "Booking",
    component: Booking,
    meta: {
      title: "Đặt Phòng",
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
