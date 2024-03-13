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
            <h3>Register</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <ul class="tabs-nav">
              <li class="active"><a href="#tab1">Register Account</a></li>
            </ul>

            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form
                  method="post"
                  class="login"
                  @submit.prevent="handleSubmitRegister"
                >
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userRegister.name"
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
                        v-model="userRegister.email"
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
                        v-model="userRegister.password"
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
                        v-model="userRegister.repeatPassword"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Phone:
                      <i class="im im-icon-Phone-3G"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                        v-model="userRegister.phone"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="birthday"
                      >Birthday:
                      <div style="display: flex">
                        <select v-model="userRegister.year">
                          <option label="year">year</option>
                          <option v-for="year in arrayYear" :key="year.id">
                            {{ year }}
                          </option>
                        </select>
                        <select v-model="userRegister.month">
                          <option label="month">month</option>
                          <option v-for="month in arrayMonth" :key="month.id">
                            {{ month }}
                          </option>
                        </select>
                        <select v-model="userRegister.day">
                          <option label="day">day</option>
                          <option v-for="day in arrayDay" :key="day.id">
                            {{ day }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select v-model="userRegister.gender">
                        <option value="true">Boy</option>
                        <option value="false">Girl</option>
                      </select>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="address"
                      >Address:
                      <i class="im im-icon-Location-2"></i>
                      <input
                        class="input-text"
                        type="text"
                        name="address"
                        id="address"
                        v-model="userRegister.address"
                      />
                    </label>
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="register"
                      value="Register"
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
import { createArrayNumber } from "@/utils/create-array-number";
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  setup() {
    const store = useStore();
    const router = useRouter();
    const userRegister = reactive({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      gender: false,
      address: "",
    });

    const handleSubmitRegister = () => {
      if (userRegister.password === userRegister.repeatPassword) {
        const data = {
          name: userRegister.name,
          email: userRegister.email,
          password: userRegister.password,
          phone: userRegister.phone,
          birthday: `${userRegister.year}/${userRegister.month}/${userRegister.day}`,
          gender: userRegister.gender === "true", // name => true , nu => false
          address: userRegister.address,
        };
        store.dispatch("auth/registerAction", { data, router });
      } else {
        alert("Tài khoản hoặc mật khẩu không khớp");
      }
    };

    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1970, 2024);
    const arrayDay = createArrayNumber(1, 31);

    return {
      arrayDay,
      arrayMonth,
      arrayYear,
      userRegister,
      handleSubmitRegister,
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
  overflow: scroll;
}
</style>
