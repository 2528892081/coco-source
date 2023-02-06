<template>
  <div class="nav">
    <div class="nav-box middle">
      <div v-for="(item, idx) in navlist" :key="idx" @click="jump(item.path)">
        <div
          :style="{
            display: 'inline-block',
            padding: '0 4px',
          }"
          :class="item.icon"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="login-box">
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
import { navlist } from "@/router/navList";
export default {
  name: "NavVue",
  props: {},
  components: {
    Login: () => import("./login.vue"),
  },
  data() {
    return {
      navlist: navlist,
    };
  },
  methods: {
    jump(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: relative;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 0px 15px 0px #ccc;

  .nav-box {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    div {
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
      transition: 0.5s all ease;
    }

    div:hover {
      transform: translateY(-2px);
      text-shadow: 0px 0px 5px #ccc;
    }

    .login-box {
      position: absolute;
      right: 0;
    }
  }
}
</style>
