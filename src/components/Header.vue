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
                  <router-link to="/blog">Blog</router-link>
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
              <div class="user-menu">
                <div class="user-name">
                  <span><img src="images/dashboard-avatar.jpg" alt="" /></span
                  >Hi, Tom!
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
              <router-link to="/auth" class="sign-in popup-with-zoom-anim"
                ><i class="sl sl-icon-login"></i>
                Sign In
              </router-link>

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
            </div>
          </div>
          <!-- Right Side Content / End -->

          <!-- Sign In Popup -->
          <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Sign In</h3>
            </div>

            <!--Tabs -->
            <div class="sign-in-form style-1">
              <ul class="tabs-nav">
                <li class=""><a href="#tab1">Log In</a></li>
                <li><a href="#tab2">Register</a></li>
              </ul>

              <div class="tabs-container alt">
                <!-- Login -->
                <div class="tab-content" id="tab1" style="display: none">
                  <form method="post" class="login">
                    <p class="form-row form-row-wide">
                      <label for="username"
                        >Username:
                        <i class="im im-icon-Male"></i>
                        <input
                          type="text"
                          class="input-text"
                          name="username"
                          id="username"
                          value=""
                        />
                      </label>
                    </p>

                    <p class="form-row form-row-wide">
                      <label for="password"
                        >Password:
                        <i class="im im-icon-Lock-2"></i>
                        <input
                          class="input-text"
                          type="password"
                          name="password"
                          id="password"
                        />
                      </label>
                      <span class="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </span>
                    </p>

                    <div class="form-row">
                      <input
                        type="submit"
                        class="button border margin-top-5"
                        name="login"
                        value="Login"
                      />
                      <div class="checkboxes margin-top-10">
                        <input id="remember-me" type="checkbox" name="check" />
                        <label for="remember-me">Remember Me</label>
                      </div>
                    </div>
                  </form>
                </div>

                <!-- Register -->
                <div class="tab-content" id="tab2" style="display: none">
                  <form method="post" class="register">
                    <p class="form-row form-row-wide">
                      <label for="username2"
                        >Username:
                        <i class="im im-icon-Male"></i>
                        <input
                          type="text"
                          class="input-text"
                          name="username"
                          id="username2"
                          value=""
                        />
                      </label>
                    </p>

                    <p class="form-row form-row-wide">
                      <label for="email2"
                        >Email Address:
                        <i class="im im-icon-Mail"></i>
                        <input
                          type="text"
                          class="input-text"
                          name="email"
                          id="email2"
                          value=""
                        />
                      </label>
                    </p>

                    <p class="form-row form-row-wide">
                      <label for="password1"
                        >Password:
                        <i class="im im-icon-Lock-2"></i>
                        <input
                          class="input-text"
                          type="password"
                          name="password1"
                          id="password1"
                        />
                      </label>
                    </p>

                    <p class="form-row form-row-wide">
                      <label for="password2"
                        >Repeat Password:
                        <i class="im im-icon-Lock-2"></i>
                        <input
                          class="input-text"
                          type="password"
                          name="password2"
                          id="password2"
                        />
                      </label>
                    </p>

                    <input
                      type="submit"
                      class="button border fw margin-top-10"
                      name="register"
                      value="Register"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Sign In Popup / End -->
        </div>
      </div>
      <!-- Header / End -->
    </header>
    <div class="clearfix"></div>
    <!-- Header Container / End -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>

<style lang="scss" scoped></style>
