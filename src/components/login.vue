<template>
  <div class="login el-icon-s-custom">
    <div v-if="token">
      <span> </span>
    </div>
    <div v-else>
      <span>游客你好</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginVue",
  data: () => {
    return {
      token: null,
    };
  },
  mounted() {
    this.token = this.$ls.get("token");
    console.log(this.token);
  },
  methods: {},
  components: {},
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;

  div {
    font-size: 12px;
  }
}
</style>
