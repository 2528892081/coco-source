<template>
  <div class="nav">
    <div class="nav-box">
      <div 
        v-for="(item, idx) in navlist" 
        :key="idx"
        @click="jump(item.path)"
        >
        {{ item.label }}
      </div>
    </div>
  </div>  
</template>
  
<script>
import { navlist } from '@/router/navList';
export default {
  name: 'NavVue',
  props: {},
  components: {

  },
  data() {
    return {
      navlist: navlist,
    }
  },
  methods: {
    jump(path) {
      console.log("jumpTo:", path);
      console.log(this.$route)
      // router.push(path);
    }
  }
  
}
</script>

<style lang='less' scoped>
  
</style>