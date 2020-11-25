import Vue from 'vue'
import Router from 'vue-router'
import PcHome from './pages/pc/home.vue';
import h5Home from './pages/h5/home.vue';

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component: PcHome,
        // meta: {
        //   title: '泛嘉医疗国际版',
        //   description: 'PC首页'
        // },
      },
      {
        path:'/HomeApp',
        component: h5Home
      }
    ],
  });
  return router;
}


// export  const createRouter = () => {
//   return new Router({
//     mode: 'history',
//     base: '/',
//     linkActiveClass: 'nuxt-link-active',
//     linkExactActiveClass: 'nuxt-link-exact-active',
//     routes: [
//       {
//         path: '/',
//         name:"Index",
//         component: Index
//       },
//       // {
//       //   path: '/aboutus',
//       //   name:"Aboutus",
//       //   component: Aboutus
//       // },
//       // {
//       //   path: '/contactus',
//       //   name:"Contactus",
//       //   component: Contactus
//       // },
//       // {
//       //   path: '/introduce',
//       //   name:"Introduce",
//       //   component: Introduce
//       // },
//     ]
//   })
// }
