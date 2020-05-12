import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'
import { RouterName } from '@/constant/enum'
import Universe from '../views/universe/Universe.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: RouterName.Login,
    component: Login
  },
  {
    path: '/universe',
    name: 'universe',
    component: Universe
  },
  {
    path: '/about',
    name: RouterName.About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: RouterName.Home,
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'bookcase',
        name: RouterName.Bookcase,
        component: () =>
          import(
            /* webpackChunkName: "bookcase" */ '../views/home/Bookcase.vue'
          )
      },
      {
        path: 'find',
        name: RouterName.Find,
        component: () =>
          import(/* webpackChunkName: "find" */ '../views/home/Find.vue')
      },
      {
        path: 'writer',
        name: RouterName.Writer,
        component: () =>
          import(/* webpackChunkName: "writer" */ '../views/home/writer.vue')
      },
      {
        path: 'mine',
        name: RouterName.Mine,
        component: () =>
          import(/* webpackChunkName: "mine" */ '../views/home/Mine.vue')
      }
    ]
  },
  {
    path: '/register',
    name: RouterName.Register,
    component: () =>
      import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/protocol',
    name: RouterName.Protocol,
    component: () =>
    import(/* webpackChunkName: "Register" */ '../views/Protocol.vue')
  },
  {
    path: '/book/:bookid',
    name: RouterName.Book,
    component: () =>
      import(/* webpackChunkName: "Register" */ '../views/book/Index.vue')
  },
  {
    path: '/book/:bookid/catalog',
    name: RouterName.Catalog,
    component: () =>
      import(/* webpackChunkName: "Register" */ '../views/Catalog.vue')
  },
  {
    path: '/book/:bookid/:chapterid',
    name: RouterName.Chapter,
    component: () =>
      import(/* webpackChunkName: "Register" */ '../views/Chapter.vue')
  },
  {
    path: '/universe/:universeid',
    name: RouterName.Universe,
    component: () =>
      import(/* webpackChunkName: "Universe" */ '../views/universe/Universe.vue')
  },
  {
    path: '/settings',
    name: RouterName.Settings,
    component: () =>
      import(
        /* webpackChunkName: "bookcase" */ '../views/home/Settings.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
