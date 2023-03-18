<template>
  <div class="bgBox">
    <img class="img" :src="sed_bg" alt="" />
    <div class="title_box">
      <div class="txt el-icon-monitor">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import sed_bg from "@/assets/sed_bg.jpg";
export default {
  name: "",
  props: {
    title: String,
  },
  data: () => {
    return {
      sed_bg,
    };
  },
  methods: {},
  components: {},
};
</script>
<style lang="less" scoped>
.bgBox {
  position: relative;
  height: 400px;
  overflow: hidden;
  width: 100%;

  .img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .title_box {
    background-color: #3338;
    width: 100%;
    height: 100px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 1;
    .txt {
      position: relative;
      left: 50%;
      line-height: 100px;
      transform: translateX(-50%);
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
