<template>
  <div class="pc_page">
    <cc-head-pic title="单机游戏"> </cc-head-pic>
    <div class="page">
      <cc-display :list="dataList"></cc-display>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from "@/service/goods";
export default {
  name: "",
  data: () => {
    return {
      dataList: [],
    };
  },
  created() {
    getGoodsList({
      pageIndex: 1,
      limit: 20,
      condition: {
        goodsTag: "单机游戏",
      },
    }).then((res) => {
      console.log(res);
      this.dataList = res.resultList;
    });
  },
  methods: {},
  components: {
    ccHeadPic: () => import("@/components/common/ccHeadPic.vue"),
    ccDisplay: () => import("@/components/common/ccDisplay.vue"),
  },
};
</script>
<style lang="less" scoped>
.page {
  padding: 16px;
}
</style>
