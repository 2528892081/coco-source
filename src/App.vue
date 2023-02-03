<template>
  <div id="app">
    <Nav />
    <Index />
    <Rooter />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Index:  () => import("@/components/index.vue"),
    Nav:  () => import("@/components/nav.vue"),
    Rooter: () => import("@/components/rooter.vue"),
  },
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#id {
  width: 100%;
  background-color: #fefefe;
}
.middle {
  width: 1200px;
  margin: 0 auto;
}
</style>
