<template>
  <div>
    <div class="body">
      <div class="middle page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
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

<style lang="less" scoped>
.body {
  width: 100%;
  background-color: #eee;

  .page {
    background-color: #fff;
  }
}
</style>
