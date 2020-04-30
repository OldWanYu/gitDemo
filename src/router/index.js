import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Recommend from '../views/Recommend'
import Singer from '../views/Singer'
import Rank from '../views/Rank'
import Search from '../views/Search'
import SongDetail from '@/components/main/recommend/SongDetail'
import SingerSong from '@/components/main/singer/SingerSong'
import ZhuanjiDetail from '@/components/main/singer/ZhuanjiDetail'
import PlaySong from '@/components/main/play/PlaySong';
import PlayMV from '@/components/main/play/PlayMV';
import RankDetail from '@/components/main/rank/RankDetail';
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend,
      },
      {
        path: '/singer',
        name: 'Singer',
        component: Singer,
        children:[
          
        ]
      },
      {
        path: '/rank',
        name: 'Rank',
        component: Rank
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      },
    ],
  },
  {
    path: '/songdetail/:id',
    name: 'SongDetail',
    component: SongDetail
  },
  {
    path: '/singersong/:id',
    name: 'SingerSong',
    component: SingerSong
  },
  {
    path: '/zhuanjiDetail/:id',
    name: 'ZhuanjiDetail',
    component: ZhuanjiDetail
  },
  {
    path: '/playsong/:id',
    name: 'PlaySong',
    component: PlaySong
  },
  {
    path: '/playmv/:mv',
    name: 'PlayMV',
    component: PlayMV
  },
  {
    path: '/rankdetail/:idx',
    name: 'RankDetail',
    component: RankDetail
  },
  {
    path: '/login',
    name: 'Login',  //路由名称
    component: Login  //组件对象
  }
]

const router = new VueRouter({
  routes
})

export default router
