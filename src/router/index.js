import Vue from 'vue'
import { store } from '../store'
import Router from 'vue-router'

const routerOptions = [
  { path: '/danh-sach-ho-so/:index', component: 'Landing', props: true },
  { path: '/danh-sach-ho-so/:index/tiep-nhan-ho-so',
    component: 'TiepNhanHoSo',
    props: true,
    beforeEnter: function (to, from, next) {
      console.log('run active component')
      store.dispatch('resetThongTinChungHoSo')
      store.dispatch('resetThongTinChuHoSo')
      store.dispatch('resetThongTinNguoiNopHoSo')
      store.dispatch('resetThanhPhanHoSo')
      store.commit('setSameUser', true)
      next()
    }
  },
  { path: '/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id', component: 'TiepNhanHoSo', props: false },
  { path: '/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/phieu-hen', component: 'PhieuHen', props: true },
  { path: '*', redirect: '/danh-sach-ho-so/0' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

export default router
