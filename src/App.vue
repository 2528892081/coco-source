<template>
  <div id="app">
    <Nav />
    <Index />
    <Rooter />
  </div>
</template>

<script>
import nav from "./components/nav.vue";
import Index from "./components/index.vue";
export default {
  name: "App",
  components: {
    Index,
    Nav: nav,
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
