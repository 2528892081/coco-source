import VueRouter from "vue-router";
// import { Routes } from "./config";


const autoLoadRoutes = []

const reqRoutes = require.context('@/pages', true, /\.vue$/);
console.log("reqRoutes", reqRoutes,reqRoutes.keys)
reqRoutes.keys().forEach(key => {
  // console.log(key);
  let reqRouterDefault = reqRoutes(key).default
  if (!reqRouterDefault.commonComponent) {      //公共组件不参与路由配置,公共组件配置true
    let fileUrl = key.replace(/\.\//g, '')//匹配路径
    let routePath = fileUrl.split('.')[0];
    // let chunk = fileUrl.split('/')[0] + '_' + fileUrl.split('/')[1]
    autoLoadRoutes.push({
      path: `/${routePath}`,
      name: routePath,
      meta: {
        title: reqRouterDefault.title,
        keepAlive: reqRouterDefault.keepAlive
      },
      // component: r => require([`@/views/${fileUrl}`], r)
      // component: reqRouter(key).default
      component: () => import(`@/pages/${fileUrl}`)
    })
  }
});

console.log('###',autoLoadRoutes)

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: () => import("@/components/index.vue"),
  },
  {
    path: "/index",
    component: () => import("@/components/index.vue"),
    children: autoLoadRoutes,
  },
  // ...autoLoadRoutes
];

const router = new VueRouter({
  routes,
  mode: "history",
});

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
