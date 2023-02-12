<template>
  <div id="H1" :width="width + 'px'">
    <span id="title">
      <span id="no">
        <b id="pre" :style="{ color: preColor }">
          <i>{{ pre }}</i>
        </b>
        <span id="l" :style="{ color: lColor }">|</span>
        <b id="end" :style="{ color: endColor }">
          <i>{{ end }}</i>
        </b>
      </span>
      <span id="txt" :style="{ color: txtColor }">{{ title }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "",
  props: [
    "width",
    "pre",
    "end",
    "title",
    "date",
    "preColor",
    "endColor",
    "lColor",
    "txtColor",
  ],
  data: () => {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
b,
i {
  font-weight: 400;
  font-style: normal;
}
#H1 {
  overflow: hidden;
  margin: 5px 0;
  user-select: none;
}

#title {
  display: inline-block;
  width: 100%;
  height: 50px;
  /* background-color: #555; */
  font-size: 20px;
  line-height: 50px;
}

#l {
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
}

#pre,
#end {
  text-align: center;
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

#no {
  display: inline-flex;
  align-items: center;
  height: 50px;
  transition: 0.5s all ease;
  transform: rotate(30deg);
}

#pre i,
#end i {
  display: inline-block;
  width: 50px;
  height: 50px;
  transition: 0.5s all ease;
}
#pre i {
  font-weight: 700;
  transform: rotate(-30deg) translate(15px, 16px);
}

#end i {
  transform: rotate(-30deg) translate(-15px, -16px);
}

#title:hover #no {
  transform: rotate(0deg);
}

#title:hover #pre i {
  transform: rotate(0deg) translate(0px, 0px);
}

#title:hover #end i {
  transform: rotate(0deg) translate(0px, 0px);
}

#txt {
  transition: 0.3s all ease-out;
  margin-left: -10px;
  color: #999;
}

#title:hover #txt {
  margin-left: 5px;
  color: #333;
}
</style>
