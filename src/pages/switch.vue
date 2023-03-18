<template>
  <div class="pc_page">
    <cc-head-pic title="单机游戏"> </cc-head-pic>
    <div class="page">
      <cc-display class=""></cc-display>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => {
    return {};
  },
  methods: {},
  components: {
    ccHeadPic: () => import("@/components/common/ccHeadPic.vue"),
    ccDisplay: () => import("@/components/common/ccDisplay.vue"),
  },
};
</script>
<style lang="less" scoped>
.page {
  padding: 16px;
}
</style>
