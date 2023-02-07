<template>
  <div class="nav">
    <div class="nav-box middle">
      <div v-for="(item, idx) in navlist" :key="idx">
        <div
          v-show="idx === 0"
          :style="{
            display: 'flex',
            padding: '0 4px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }"
          @click="jump(item.path)"
          :class="['nav0']"
        >
          <img
            :style="{
              width: '50px',
              height: '50px',
              verticalAlign: 'middle',
            }"
            :src="item.pic"
            alt=""
          />
          <span
            :style="{
              fontSize: '24px',
              fontFamily: 'JingJingTi',
            }"
            >{{ item.label }}</span
          >
        </div>
        <div
          v-show="idx !== 0"
          :style="{
            display: 'inline-block',
            padding: '0 4px',
          }"
          @click="jump(item.path)"
          :class="[item.icon, 'nav' + idx]"
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
      this.$router.pushTo(path);
    },
  },
};
</script>
<style src="@/assets/styles/style.css"></style>
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

    div {
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
      transition: 0.3s all ease;

      div {
        cursor: pointer;
      }
    }

    // .other:hover {
    //   transform: translateY(-2px);
    //   // text-shadow: 0px 0px 5px #2795d5;
    //   color: #d95252;
    // }

    .nav0:hover {
      transform: translateY(-2px);
      // text-shadow: 0px 0px 2px #d95252;
      color: #d95252;
    }
    .nav1:hover {
      transform: translateY(-2px);
      // text-shadow: 0px 0px 2px #eab04d;
      color: #2795d5;
    }
    .nav2:hover {
      transform: translateY(-2px);
      // text-shadow: 0px 0px 2px #0fc48e;
      color: #2795d5;
    }
    .nav3:hover {
      transform: translateY(-2px);
      // text-shadow: 0px 0px 2px #b971cb;
      color: #2795d5;
    }
    .nav4:hover {
      transform: translateY(-2px);
      text-shadow: 0px 0px 2px #ccc;
      color: #2795d5;
    }

    .login-box {
      position: absolute;
      right: 0;
    }
  }
}
</style>
