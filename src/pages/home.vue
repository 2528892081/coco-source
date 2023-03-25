<template>
  <div class="home">
    <el-carousel :interval="5000" height="200px">
      <el-carousel-item>
        <div
          :style="{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
          }"
        >
          <img
            :style="{
              width: '100%',
            }"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuk?ver=a753"
            alt=""
          />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div
          :style="{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
          }"
        >
          <img
            :style="{
              width: '100%',
            }"
            src="https://p3.ssl.qhimg.com/t01df405699821017d3.gif"
            alt=""
          />
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="search-box">
      <el-input
        placeholder="搜索游戏"
        v-model="search_value"
        class="input-with-select"
      >
        <el-select
          :style="{ width: '150px', textAlign: 'center' }"
          v-model="select_value"
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
    </div> -->
    <div class="content">
      <div class="block">
        <Title
          pre="new"
          end="!"
          preColor="#d95252"
          endColor="#d95252"
          lColor="#2795d5"
          title="最近上新"
        ></Title>
        <card
          v-for="(item, idx) in dataList"
          :key="idx"
          :free="item.isFree === 'YES'"
          :item="item"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import { saxios } from "@/utils/request";
export default {
  name: "HomeVue",
  title: "首页",
  data: () => {
    return {
      search_value: null,
      select_value: "全部",
      dataList: [],
    };
  },
  methods: {},
  components: {
    Card: () => import("@/components/card.vue"),
    Title: () => import("@/components/title.vue"),
  },
  created() {
    saxios
      .post("/api/coco/goodsManage/query/goodsList", {
        pageIndex: 1,
        limit: 20,
        condition: {},
      })
      .then((res) => {
        this.dataList = res.resultList;
        console.log(res);
      });
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  box-sizing: border-box;
}
.content {
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
  overflow: auto;
}

.search-box {
  margin: 16px 8px;
}

/deep/.el-carousel__container {
  z-index: 0 !important;
}

// .el-carousel__item.is-active {
//   z-index: 2;
// }

// .el-carousel__item--card.is-in-stage {
//   z-index: 1;
// }
</style>
