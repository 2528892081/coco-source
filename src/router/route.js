import VueRouter from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../components/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes, 
})

export default router;