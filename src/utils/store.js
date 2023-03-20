import { createStore } from "vuex";

export const store = createStore({
  state: {
    token: "",
  },
  getter: {
    setToken(token) {
      this.state.token = token;
    },
    getToken() {
      console.log("vuex getters token:", this.state.token);
      return this.state.token;
    },
  },
});
