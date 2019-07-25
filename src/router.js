import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import ShopcarContainer from './component/tabbar/ShopcarContainer.vue'
import NewsList from './component/news/NewsList.vue'
import NewsInfo from './component/news/NewsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/',component:NewsInfo}
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做router-link-active
})  

// 把路由对象暴露出去
export default router