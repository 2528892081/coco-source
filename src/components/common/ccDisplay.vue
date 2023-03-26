<template>
  <div class="cc-display">
    <div class="content">
      <div v-for="(item, idx) in list" :key="idx">
        <Card v-if="type === 'common'" :item="item"></Card>
        <cc-card v-else :item="item"></cc-card>
      </div>
    </div>
    <el-empty
      v-if="list === null || list.length === 0"
      description="描述文字"
    ></el-empty>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    type: String,
    list: {
      require: true,
    },
  },
  data: () => {
    return {
      // dataList: this.list,
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
  width: 100%;
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }
}
</style>
