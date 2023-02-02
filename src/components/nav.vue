<template>
  <div class="nav">
    <div class="nav-box middle">
      <div v-for="(item, idx) in navlist" :key="idx" @click="jump(item.path)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { navlist } from "@/router/navList";
export default {
  name: "NavVue",
  props: {},
  components: {},
  data() {
    return {
      navlist: navlist,
    };
  },
  methods: {
    jump(path) {
      this.$router.push(path, () => {});
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 100%;

  .nav-box {
    display: flex;
    justify-content: flex-start;

    div {
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
