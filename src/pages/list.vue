<template>
  <div class="listPage">
    <div class="headBox">
      <div class="bg">
        <img :src="search_bg" alt="" />
      </div>
      <div class="search-box">
        <el-input
          placeholder="搜索游戏"
          v-model="search_value"
          class="input-with-select"
        >
          <el-select
            :style="{
              width: '120px',
              textAlign: 'center',
            }"
            v-model="select_type"
            slot="prepend"
            placeholder="请选择"
          >
            <el-option label="全部" value="0"></el-option>
            <el-option label="单机游戏" value="1"></el-option>
            <el-option label="switch游戏" value="2"></el-option>
            <el-option label="其他" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="search_content">
      <div v-show="dataList.length > 0">
        <card v-for="(item, idx) in dataList" :key="idx" :item="item"></card>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import search_bg from "@/assets/search_bg.webp";
export default {
  name: "",
  data: () => {
    return {
      search_bg: search_bg,
      search_value: "",
      select_type: "全部",
      dataList: [
        {
          title: "艾尔登法环中文版，版本：V1.07.0，直接玩",
          category: "单机游戏",
          txt: "艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，享受克服困境时的成就感吧。不仅如此，登场角色之间的利害关系谱成的群像剧，更是不容错过。",
          date: "2022-12-28",
          downnums: "201",
        },
      ],
    };
  },
  methods: {},
  components: {
    card: () => import("@/components/card.vue"),
  },
};
</script>
<style lang="less" scoped>
.listPage {
  .headBox {
    position: relative;
    width: 100%;
    .bg {
      width: 100%;
      height: 300px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .search-box {
      position: absolute;
      width: 1000px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    /deep/.el-input-group__prepend .el-input__inner {
      text-align: center;
    }
  }
}
</style>
