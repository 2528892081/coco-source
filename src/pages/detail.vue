<template>
  <div class="detail">
    <cc-img
      :style="{
        height: '500px',
      }"
      :src="item && item.picUri"
    ></cc-img>
    <el-divider></el-divider>
    <div class="body">
      <div class="content">
        <div class="head">
          <h1>{{ item.goodsName }}</h1>
          <div class="info">
            <img
              :style="{
                width: '30px',
                height: '30px',
                borderRadius: '50px',
              }"
              src="@/assets/touxiang.webp"
              alt=""
            />
            <span>快乐逍遥</span>
            <i class="el-icon-time"></i><span>{{ item.createTime }}</span>
            <i class="el-icon-star-off"></i><span class=""></span>
          </div>
        </div>
        <el-divider></el-divider>
        <section class="section">
          <p class="subtitle">游戏介绍：</p>
          <p class="txt">
            {{ item.goodsRemark }}
          </p>
        </section>
        <el-divider></el-divider>
        <section class="txt">
          <p class="subtitle">配置要求：</p>
          <div class="peizhi">
            <div class="low block">
              <p>
                最低配置: 需要 64 位处理器和操作系统<br />
                操作系统: Windows 10<br />
                处理器: INTEL CORE I5-8400 or AMD RYZEN 3 3300X <br />内存: 12
                GB RAM <br />显卡: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX
                580 4 GB DirectX <br />版本: 12 <br />存储空间: 需要 60 GB
                可用空间 <br />声卡: Windows Compatible Audio Device
                <br />附注事项: 估计性能：1080p / 稳定 30fps+ / 中等质量设置。
                <br />实际性能可能因您的配置和设置而异。
                系统要求可能会发生变化。
              </p>
            </div>
            <div class="heigh block">
              <p>
                推荐配置： 需要 64 位处理器和操作系统 <br />操作系统: Windows
                10/11<br />
                处理器: INTEL CORE I7-8700K or AMD RYZEN 5 3600X <br />内存: 16
                GB RAM<br />
                显卡: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8
                GB<br />
                DirectX <br />版本: 12 <br />存储空间: 需要 60 GB 可用空间
                <br />声卡: Windows Compatible Audio Device <br />附注事项:
                估计性能：1080p / 60fps / 高等质量设置。
                <br />实际性能可能因您的配置和设置而异。
                系统要求可能会发生变化。
              </p>
            </div>
          </div>
        </section>
        <section>
          <img
            v-for="(item, idx) in game.imglist"
            :key="idx"
            :src="item"
            :alt="game.title"
          />
        </section>
      </div>
      <div>
        <div class="download">
          <div class="game_pay_title">游戏兑换</div>
          <div class="info" v-show="item.isFree === 'YES'">
            <p>
              <i class="el-icon-success" :style="{ color: 'green' }"></i
              >您已购买或已是会员，可直接下载
            </p>
            <div
              class="download_link"
              data-clipboard-target=".download_link"
              data-clipboard-action="copy"
              @click="getDownLink()"
              :title="item.detailDownloadUri || 'zzz'"
            >
              <div class="name">
                <i class="el-icon-share" :style="{ color: 'white' }"></i
                >网盘下载
              </div>
              <div class="link">提取码：8888 密码：ae856899</div>
            </div>
          </div>
          <div v-show="!(item.isFree === 'YES')">
            <p>
              <i class="el-icon-goods" :style="{ color: 'red' }"></i
              >您还不是会员或您还未购买，购买或成为会员后可下载该商品
            </p>
            <div class="download_link">
              <div class="name">
                <i class="el-icon-share" :style="{ color: 'white' }"></i
                >积分支付
              </div>
              <div class="link el-icon-s-ticket"><span>5</span><i>积分</i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
import { getGoodsDetail } from "@/service/goods.js";
import ccImg from "@/components/common/ccimg.vue";
import lth from "@/assets/lth.jpg";
export default {
  name: "detailVue",
  data: () => {
    return {
      lth,
      item: {},
      game: {
        title: "艾尔登法环",
      },
      payed: false,
    };
  },
  methods: {
    getDownLink() {
      let _this = this;
      //detailDownloadUri
      var clipboard = new ClipboardJS(".download_link", {
        text: (trigger) => {
          return trigger.getAttribute("title");
        },
      });

      clipboard.on("success", function (e) {
        _this.$message.success("链接已成功复制到剪切板！");
        e.clearSelection();
      });

      clipboard.on("error", function () {
        _this.$message.error("获取连接失败，请检查网络！");
      });
    },
  },
  components: {
    ccImg,
  },
  created() {
    let itemNumber = this.$route.query.goodsNumberNo;
    if (!itemNumber) {
      alert("商品信息为空！");
      this.$router.back();
      return;
    }
    getGoodsDetail({ goodsNumberNo: itemNumber })
      .then((res) => {
        console.log(res);
        this.item = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
* {
  color: #333;
  line-height: 2em;
}
.detail {
  padding: 16px;

  .body {
    display: flex;
    justify-content: space-between;

    .content {
      width: 800px;

      .head {
        margin: 8px 0;

        .info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 20px;

          * {
            margin-right: 5px;
          }
        }
      }

      .section {
        .txt {
          text-indent: 2em;
        }
      }

      .subtitle {
        font-weight: 700;
        font-size: 18px;
      }

      .peizhi {
        padding: 8px;
        border-radius: 8px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        box-shadow: 0 0 5px 2px #eee;

        .block {
          background-color: #555;
          color: whitesmoke;
          padding: 8px;
          width: 388px;
          border-radius: 4px;
          p {
            color: whitesmoke;
          }
        }

        .block:hover {
          color: #fff;
          background-color: #444;
        }
      }
    }

    .download {
      width: 350px;
      height: fit-content;
      padding: 8px;
      border-radius: 4px;

      box-shadow: 0 0 5px 2px #eee;

      .game_pay_title {
        padding: 8px;
        border-radius: 4px;
        color: whitesmoke;
        font-weight: 700;
        text-align: center;
        background-color: rgb(229, 173, 3);
      }

      .info {
        p {
          margin: 8px;
        }
      }

      .download_link {
        width: 100%;
        padding: 16px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background-color: #333;

        .name {
          width: 30%;
          color: whitesmoke;
          i {
            margin: 0 8px;
          }
        }

        cursor: pointer;
        &:hover {
          background-color: #000;
        }

        .link {
          width: max-content;
          display: flex;
          margin: 0 8px;
          align-items: center;
          justify-content: space-around;
          color: whitesmoke;

          span {
            margin: 0 8px;
            color: whitesmoke;
            font-size: 26px;
            font-weight: 700;
          }

          i {
            font-style: normal;
            color: whitesmoke;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
