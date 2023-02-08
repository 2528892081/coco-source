<template>
  <div class="card">
    <div class="img-box">
      <img class="img" src="@/assets/lth.jpg" alt="" />
    </div>
    <div class="content">
      <div class="title"></div>
      <div class="txt"></div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardVue",
  props: {
    item: {},
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.card {
}
</style>
