<template>
  <div class="cc-display">
    <div v-for="(item, idx) in dataList" :key="idx">
      <Card v-if="type === 'common'" :item="item"></Card>
      <cc-card v-else :item="item"></cc-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      require: true,
    },
  },
  data: () => {
    return {
      dataList: [
        {
          title: "艾尔登法环中文版，版本：V1.07.0，直接玩",
          category: "单机游戏",
          txt: "艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，享受克服困境时的成就感吧。不仅如此，登场角色之间的利害关系谱成的群像剧，更是不容错过。",
          date: "2022-12-28",
          downnums: "201",
        },
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
    Card: () => import("@/components/card.vue"),
    CcCard: () => import("@/components/common/ccCard.vue"),
  },
};
</script>
<style lang="less" scoped>
.cc-display {
  display: flex;
  justify-content: space-around;
}
</style>
