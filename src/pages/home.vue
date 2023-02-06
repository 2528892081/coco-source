<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  data: () => {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  box-sizing: border-box;
}
.content {
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
}
</style>
