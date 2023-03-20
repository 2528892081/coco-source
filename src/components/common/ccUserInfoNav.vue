<template>
  <div class="head">
    <h1>{{ title }}</h1>
    <div class="info">
      <img
        :style="{
          width: '30px',
          height: '30px',
          borderRadius: '50px',
        }"
        src="@/assets/touxiang.webp"
        alt=""
      />
      <span>快乐逍遥</span>
      <i class="el-icon-time"></i><span>2022-12-22</span>
      <i class="el-icon-star-off"></i><span class=""></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CcUser",
  props: ["title"],
  data: () => {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style lang="less" scoped>
.head {
  margin: 8px 0;

  h1 {
    text-align-last: left;
  }

  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;

    * {
      margin-right: 5px;
    }
  }
}
</style>
