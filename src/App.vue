<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./components/index.vue"
export default {
  name: 'App',
  components: {
    Index
  }
}
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
