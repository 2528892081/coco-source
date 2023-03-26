<template>
  <div class="ccCard" @click="jumpTo('detail')">
    <div class="tag el-icon-collection-tag">
      {{ item.isFree === "YES" ? "免费" : "会员免费" }}
    </div>
    <div class="img-box">
      <img class="img" :src="item.picUri" alt="" />
    </div>
    <div class="content">
      <div class="title">{{ item.title }}</div>
      <div class="category">
        <span class="category_item">{{ item.goodsTag }}</span>
      </div>
      <div :title="item.goodsRemark" class="txt">
        {{ item.goodsRemark }}
      </div>
      <div class="icon">
        <!-- <span class="downnums el-icon-download">{{ item.downnums }}</span> -->
        <span class="time el-icon-time">{{ item.createTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["item", "free"],
  data: () => {
    return {};
  },
  methods: {
    jumpTo(path) {
      this.$router.pushTo({
        name: path,
        params: this.item,
        query: {
          goodsNumberNo: this.item.goodsNumberNo,
        },
      });
    },
  },
  components: {},
};
</script>
<style lang="less" scoped>
.ccCard {
  position: relative;
  width: 500px;
  height: 150px;
  box-shadow: 0 0 5px 0 #efefef;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s all ease;
  display: flex;
  justify-content: flex-start;

  .tag {
    position: absolute;
    left: 4px;
    top: 4px;
    font-size: 12px;
    border-radius: 15px;
    // transform: scale(0.9);

    width: fit-content;
    padding: 4px 8px;
    text-align: center;
    background-color: #33aa35;
    color: whitesmoke;
    z-index: 5;
  }

  .img-box {
    width: 200px;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;

    img {
      transition: 0.5s all ease;
      height: 100%;
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    padding: 8px;

    .category {
      display: flex;
      justify-content: flex-start;

      .category_item {
      }

      .category_item:before {
        content: "";
        margin: 0 5px;
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background-color: #64c839;
      }
    }

    .title {
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      color: #333;
    }

    .txt {
      height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #aaa;
      font-size: 14px;
      padding: 4px 0;
    }

    .icon {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      bottom: 0;

      color: #aaa;
      font-size: 12px;

      span {
        display: flex;
        align-items: center;
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
}
.ccCard:hover {
  transform: translateY(-5px);
  box-shadow: 2px 2px 10px 2px #eee;
}

.ccCard:hover .img-box > img {
  border-radius: 4px;
  transform: scale(1.2);
}
</style>
