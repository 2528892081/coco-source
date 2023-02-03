<template>
  <div>
    <swiper></swiper>
    <router-view />
  </div>
</template>

<script>
// import NavVue from "./nav.vue";
export default {
  name: "IndexVue",
  props: {},
  components: {
    // NavVue,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
