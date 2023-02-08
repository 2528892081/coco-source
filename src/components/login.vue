<template>
  <div class="login other el-icon-s-custom">
    <div v-if="token">
      <span :style="{ margin: '4px 0' }"> admin, 你好 </span>
    </div>
    <div v-else>
      <span :style="{ margin: '4px 0' }">游客你好</span>
    </div>
    <div v-show="showPopover" class="popover">
      <div
        v-show="!token"
        v-for="(item, idx) in loginList"
        class="item"
        :class="item.icon"
        :key="idx"
        @click="jumpTo(item.path)"
      >
        {{ item.label }}
      </div>
      <div
        v-show="token"
        v-for="(item, idx) in userList"
        class="item"
        :class="item.icon"
        :key="idx"
        @click="jumpTo(item.path)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { capture } from "@/utils/capture";
import { loginList } from "@/router/navList";
import { userList } from "@/router/navList";
// import { lcstore } from "@/utils/storage";
export default {
  name: "LoginVue",
  data: () => {
    return {
      token: 1,
      showPopover: false,
      loginList,
      userList,
    };
  },
  mounted() {
    capture("click", "login", (result) => {
      this.showPopover = result;
    });
    // lcstore.setItem("token", 1);
    // this.token = lcstore.getItem("token");
    console.log(this.token);
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path, () => {});
    },
  },
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
    z-index: 20;
    top: calc(100% + 4px);
    left: 50%;
    width: 100px;
    text-align: center;
    padding: 8px;
    background-color: #fff;
    color: #000;
    border-radius: 3px;
    border: 1px solid #ccc;
    transform: translateX(-50%);
    transition: 0.2s all ease;
    box-shadow: 0 0 5px 0 #ccc;

    .item {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 4px 0;
      font-size: 14px;
      border-radius: 4px;
      transition: .3s all ease;
    }

    .item:hover {
      background-color: #efefef;
      color: #2795d5;
      justify-content: space-around;
    }
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
