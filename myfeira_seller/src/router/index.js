import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
  },
  {
    path: '/typeproduction',
    name: 'typeproduction',
    props:true,
    component: () => import(/* webpackChunkName: "typeproduction" */ '../components/TypeProduction.vue')
  },
  {
    path: '/cultivationqty',
    name: 'cultivationqty',
    props:true,
    component: () => import(/* webpackChunkName: "cultivationqty" */ '../components/CultivationQty.vue')
  },
  {
    path: '/distance',
    name: 'distance',
    props:true,
    component: () => import(/* webpackChunkName: "distance" */ '../components/Distance.vue')
  },
  {
    path: '/takeapicture',
    name: 'takeapicture',
    props:true,
    component: () => import(/* webpackChunkName: "takeapicture" */ '../components/TakeAPicture.vue')
  },
  {
    path: '/picture',
    name: 'picture',
    props:true,
    component: () => import(/* webpackChunkName: "picture" */ '../components/Picture.vue')
  },
  {
    path: '/addpictures',
    name: 'addpictures',
    props:true,
    component: () => import(/* webpackChunkName: "addpictures" */ '../components/AddPictures.vue')
  },
  {
    path: '/reviewposter',
    name: 'reviewposter',
    props:true,
    component: () => import(/* webpackChunkName: "reviewposter" */ '../components/ReviewPoster.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
