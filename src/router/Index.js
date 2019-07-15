import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/components/Index'
import App from '@/components/App'
import Index from '@/components/Index'

Vue.use(VueRouter)


//  导入第3级别组件过来
import Show from '@/components/movie/Show.vue'
import  Ensure from '@/components/movie/Ensure.vue'
import College from '@/components/movie/College.vue'
import Combat from '@/components/movie/Combat.vue'
import Market from '@/components/movie/Market.vue'
import Elite from '@/components/movie/Elite.vue'
import Love from '@/components/movie/Love.vue'
import About from '@/components/movie/About.vue'
import My from '@/components/movie/My.vue'
import Combat1 from '@/components/movie/Combat1/Combat1.vue'
import Combat2 from '@/components/movie/Combat1/Combat2.vue'
import Combat3 from '@/components/movie/Combat1/Combat3.vue'
import Combat4 from '@/components/movie/Combat1/Combat4.vue'
import Combat5 from '@/components/movie/Combat1/Combat5.vue'
import Combat6 from '@/components/movie/Combat1/Combat6.vue'
import Combat7 from '@/components/movie/Combat1/Combat7.vue'
import Combat8 from '@/components/movie/Combat1/Combat8.vue'
import Combat9 from '@/components/movie/Combat1/Combat9.vue'
import Combat10 from '@/components/movie/Combat1/Combat10.vue'
import Combat11 from '@/components/movie/Combat1/Combat11.vue'
import Combat12 from '@/components/movie/Combat1/Combat12.vue'
import Combat13 from '@/components/movie/Combat1/Combat13.vue'
import Combat14 from '@/components/movie/Combat1/Combat14.vue'
import Combat15 from '@/components/movie/Combat1/Combat15.vue'
import Combat16 from '@/components/movie/Combat1/Combat16.vue'


var router= new VueRouter({
  routes: [
    {path:'/', redirect:'index/ins'},
    {path:'/index', component: Index,children:[

      {path:'/index/ins', component:Show},
      // {path:'/index/my', component: My},
      {path:'/index/combat', component: Combat,redirect:'/index/combat/combat1',children:[
        {path:'/index/combat/combat1', component:Combat1},
        {path:'/index/combat/combat2', component:Combat2},
        {path:'/index/combat/combat3', component:Combat3},
        {path:'/index/combat/combat4', component:Combat4},
        {path:'/index/combat/combat5', component:Combat5},
        {path:'/index/combat/combat6', component:Combat6},
        {path:'/index/combat/combat7', component:Combat7},
        {path:'/index/combat/combat8', component:Combat8},
        {path:'/index/combat/combat9', component:Combat9},
        {path:'/index/combat/combat10', component:Combat10},
        {path:'/index/combat/combat11', component:Combat11},
        {path:'/index/combat/combat12', component:Combat12},
        {path:'/index/combat/combat13', component:Combat13},
        {path:'/index/combat/combat14', component:Combat14},
        {path:'/index/combat/combat15', component:Combat15},
        {path:'/index/combat/combat16', component:Combat16},
      ]},
      {path:'/index/ensure', component: Ensure},
      {path:'/index/market', component: Market},
      {path:'/index/college', component: College},
      {path:'/index/elite', component: Elite},
      {path:'/index/love', component: Love},
      {path:'/index/about', component: About},
    ]},
  ]
})

export default router
