<template>
  <v-app class="login-page">
    <v-container :style="{ height: '100%' }">
      <div class="fill-height align-center d-flex justify-space-around">
        <v-card class="login-card pa-4" outlined>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form class="login-form" @submit.prevent="submit">
              <v-text-field
                v-model="user.firstName"
                label="First Name"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="user.lastName"
                label="Last Name"
                outlined
                dense
                required
              ></v-text-field>
              <validation-provider
                v-slot="{ errors }"
                name="Username"
                rules="required|min:6"
              >
                <v-text-field
                  v-model="user.username"
                  :error-messages="errors"
                  label="Username*"
                  outlined
                  dense
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Password"
                rules="required|min:6"
              >
                <v-text-field
                  v-model="user.password"
                  :error-messages="errors"
                  :append-icon="passwordHidden ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="passwordHidden ? 'password' : 'text'"
                  label="Password*"
                  outlined
                  dense
                  @click:append="passwordHidden = !passwordHidden"
                ></v-text-field>
              </validation-provider>

              <v-btn type="submit" block color="primary" :disabled="invalid">
                Login
              </v-btn>
              <v-divider class="mt-2 mb-4"></v-divider>

              <div class="d-flex justify-center align-center">
                Don't have an account?
                <v-btn class="text-capitalize ml-2" color="teal" text
                  >Register</v-btn
                >
              </div>
            </form>
          </validation-observer>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { required, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import User from "../models/user";
import { mapActions } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    user: new User(),
    passwordHidden: false,
  }),

  computed: {
    heroImage() {
      return {
        background: `url(${require("../assets/bg.jpg")}) no-repeat center`,
      };
    },
  },

  methods: {
    ...mapActions(["login"]),
    submit() {
      this.$refs.observer.validate().then((isValid) => {
        if (!isValid) return;

        if (this.user.username && this.user.password) {
          this.login(this.user).then((r) => {
            console.log(12321321, r);
          });
        }
      });
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  background: #fff;
  .login-card {
    .login-form {
      min-width: 300px;
    }
  }
}
</style>
