<template>
  <div>
    <!-- Header Container
    ================================================== -->
    <header id="header-container">
      <!-- Header -->
      <div id="header">
        <div class="container">
          <!-- Left Side Content -->
          <div class="left-side">
            <!-- Logo -->
            <div id="logo">
              <a href="index.html"
                ><img
                  src="images/logo2.png"
                  data-sticky-logo="images/logo.png"
                  alt=""
              /></a>
            </div>

            <!-- Mobile Navigation -->
            <div class="mmenu-trigger">
              <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>

            <!-- Main Navigation -->
            <nav id="navigation" class="style-1">
              <ul id="responsive">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/rooms">Room</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </nav>
            <div class="clearfix"></div>
            <!-- Main Navigation / End -->
          </div>
          <!-- Left Side Content / End -->

          <!-- Right Side Content / End -->
          <div class="right-side">
            <div class="header-widget">
              <!-- User Menu -->
              <div class="user-menu" v-if="userLogin.user">
                <div class="user-name">
                  <span><img src="images/dashboard-avatar.jpg" alt="" /></span
                  >Hi, {{ userLogin.user.name }}
                </div>
                <ul>
                  <li>
                    <a href="dashboard.html"
                      ><i class="sl sl-icon-settings"></i> Dashboard</a
                    >
                  </li>
                  <li>
                    <a href="dashboard-messages.html"
                      ><i class="sl sl-icon-envelope-open"></i> Messages</a
                    >
                  </li>
                  <li>
                    <a href="dashboard-bookings.html"
                      ><i class="fa fa-calendar-check-o"></i> Bookings</a
                    >
                  </li>
                  <li>
                    <a href="index.html"
                      ><i class="sl sl-icon-power"></i> Logout</a
                    >
                  </li>
                </ul>
              </div>

              <div class="sign-in popup-with-zoom-anim" v-else>
                <router-link to="/login"
                  ><i class="sl sl-icon-login"></i>
                  Login
                </router-link>
              </div>

              <div
                id="menu-item-839-en"
                class="sign-in popup-with-zoom-anim lang-item lang-item-7 lang-item-en current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-839-en"
              >
                <a href="https://toprate.io/" hreflang="en-GB" lang="en-GB"
                  ><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                    alt="English"
                    width="16"
                    height="11"
                    style="width: 16px; height: 11px"
                /></a>
              </div>

              <div
                id="menu-item-839-vi"
                class="sign-in popup-with-zoom-anim lang-item lang-item-16 lang-item-vi menu-item menu-item-type-custom menu-item-object-custom menu-item-839-vi"
              >
                <a href="https://toprate.io/vi/" hreflang="vi" lang="vi"
                  ><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg=="
                    alt="Tiếng Việt"
                    width="16"
                    height="11"
                    style="width: 16px; height: 11px"
                /></a>
              </div>

              <a
                style="cursor: pointer"
                class="sign-in popup-with-zoom-anim"
                @click="handleLogout"
                v-if="userLogin.user"
                ><i class="sl sl-icon-login"></i>
                Logout
              </a>
            </div>
          </div>
          <!-- Right Side Content / End -->
        </div>
      </div>
      <!-- Header / End -->
    </header>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = computed(() => store.state.auth.login);

    const handleLogout = () => {
      localStorage.clear();
      router.push("/login");
    };
    return {
      userLogin,
      handleLogout,
    };
  },
};
</script>

<style lang="scss" scoped></style>
