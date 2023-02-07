<template>
  <div class="login other el-icon-s-custom" 
    @mouseover="() => showPopover = true" 
    @mouseout="() => showPopover = false"
  >
    <div v-if="token">
      <span> </span>
    </div>
    <div v-else>
      <span :style="{margin: '4px 0'}">游客你好</span>
    </div>
    <div
      v-show="showPopover"
      class="popover"
    >
      1111  
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginVue",
  data: () => {
    return {
      token: null,
      showPopover: false
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
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;

  div {
    font-size: 12px;
  }

  &:hover {
    background-color: #2795d5;
    color: #fff;
  }

  .popover {
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    width: 75px;
    text-align: center;
    padding: 8px;
    background-color: #fff;
    color: #000;
    border-radius: 3px;
    border: 1px solid #ccc;
    transform: translateX(-50%);
    transition: .2s all ease;
    box-shadow: 0 0 5px 0 #ccc;
  }

  .popover::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    // box-shadow: 0 -5px 5px 0 #ccc;
  }

  .login:hover .popover {
    // transform: translateX(-50%)translateY(2px);
  }


}
</style>
