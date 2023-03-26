<template>
  <div :style="Style" class="img-box">
    <img :src="src" :alt="alt" :title="title" />
    <div class="light"></div>
  </div>
</template>

<script>
export default {
  name: "ccImg",
  props: {
    Style: Object,
    src: {
      default: "",
    },
    alt: String,
    title: String,
  },
  data: () => {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style lang="less" scoped>
.img-box {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 4px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.light {
  display: block;
  position: absolute;
  top: -100px;
  left: -400px;
  width: 300px;
  height: 700px;
  transform: rotate(20deg);
  // background-color: rgba(255, 255, 255, 0.5);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0)
  );
  z-index: 5;
  filter: brightness(1.2);
  /* 过度实现部分 */
  // transition: 0.8s all ease-in-out;
}
.img-box:hover .light {
  /* 过度实现部分 */
  // transform: translateX(1500px);
  animation: cross 0.8s;
}
@keyframes cross {
  from {
  }
  to {
    transform: translateX(1500px) rotate(20deg);
  }
}
</style>
