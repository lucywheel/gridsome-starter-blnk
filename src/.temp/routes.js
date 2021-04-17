const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/angievella/Documents/Code/Projects/gridsome-starter-blnk/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--posts-vue" */ "/Users/angievella/Documents/Code/Projects/gridsome-starter-blnk/src/pages/Posts.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/angievella/Documents/Code/Projects/gridsome-starter-blnk/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/angievella/Documents/Code/Projects/gridsome-starter-blnk/src/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/angievella/Documents/Code/Projects/gridsome-starter-blnk/src/pages/Index.vue")

export default [
  {
    path: "/posts/:title/",
    component: c1
  },
  {
    path: "/posts/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
