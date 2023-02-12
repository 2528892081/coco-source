<template>
  <div class="detail">
    <cc-img
      :style="{
        height: '500px',
      }"
      :src="lth"
    ></cc-img>
    <el-divider></el-divider>
    <div class="body">
      <div class="content">
        <div class="head">
          <h1>{{ game.title }}</h1>
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
            <i class="el-icon-time"></i><span>2022-12-22</span>
            <i class="el-icon-star-off"></i><span class=""></span>
          </div>
        </div>
        <el-divider></el-divider>
        <section class="section">
          <p class="subtitle">游戏介绍：</p>
          <p class="txt">
            艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。
            走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，享受克服困境时的成就感吧。
            不仅如此，登场角色之间的利害关系谱成的群像剧，更是不容错过。
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
          <div class="game_pay_title">游戏购买</div>
          <div class="info" v-show="payed">
            <p>
              <i class="el-icon-success" :style="{ color: 'green' }"></i
              >您已购买或已是会员，可直接下载
            </p>
            <div class="download_link">
              <div class="name">
                <i class="el-icon-share" :style="{ color: 'white' }"></i
                >网盘下载
              </div>
              <div class="link">提取码：8888 密码：ae856899</div>
            </div>
          </div>
          <div v-show="!payed"></div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
import ccImg from "@/components/common/ccimg.vue";
import lth from "@/assets/lth.jpg";
export default {
  name: "detailVue",
  data: () => {
    return {
      lth,
      game: {
        title: "艾尔登法环",
      },
      payed: true,
    };
  },
  methods: {},
  components: {
    ccImg,
  },
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
        background-color: #333;

        .name {
          width: 30%;
          color: whitesmoke;
        }

        .link {
          width: 70%;
          color: whitesmoke;
        }
      }
    }
  }
}
</style>
