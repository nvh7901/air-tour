<template>
  <div class="mfp-bg my-mfp-zoom-in mfp-ready"></div>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpeg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Login</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <ul class="tabs-nav">
              <li class="active"><a href="#tab1">Log In</a></li>
            </ul>

            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form method="post" class="login" @submit.prevent="handleLogin">
                  <p class="form-row form-row-wide">
                    <label for="email"
                      >Email:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email"
                        v-model="userLogin.email"
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
                        v-model="userLogin.password"
                      />
                    </label>
                    <span class="lost_password">
                      <router-link to="/register">Register Account</router-link>
                    </span>
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="login"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      email: "",
      password: "",
    });

    const handleLogin = () => {
      const data = {
        email: userLogin.email,
        password: userLogin.password,
      };
      store.dispatch("auth/loginAction", { data, router });
    };
    return {
      userLogin,
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-bg {
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
}
</style>
