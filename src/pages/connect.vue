<template>
  <div class="connect">
    <CcUser title="遇到问题请联系客服" />
    <el-divider></el-divider>
    <p class="txt">
      下载、安装、或购买遇到的任何问题，可联系客服加微信：yx82686
      或扫下面二维码加客服微信
    </p>
    <img
      :style="{
        width: '200px',
        textAlign: 'center',
      }"
      src="@/assets/89.jpg"
      alt="error"
    />
    <el-divider></el-divider>
    <div class="txt">
      或者加<i style="color: red; font-weight: 700">QQ：3260624872</i> 联系
    </div>
    <el-divider></el-divider>
    <div class="txt">
      或者在你的个人资料内提交工单，提交工单解决有点慢，最好加微信或QQ解决问题。
    </div>
    <el-divider></el-divider>
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
    CcUser: () => import("@/components/common/ccUserInfoNav.vue"),
  },
};
</script>
<style lang="less" scoped>
.connect {
  padding: 16px;
  text-align: center;
  .txt {
    text-align: center;
  }
}
</style>
