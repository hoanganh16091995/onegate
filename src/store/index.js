import Vue from 'vue'
import Vuex from 'vuex'
import toastr from 'toastr'
// import router from '@/router'

Vue.use(toastr)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedVueProjects: [
    ],
    loadedVueProject: null,
    loading: false,
    error: null,
    user: null,
    trangThaiHoSoList: [
    ],
    index: 0,
    lePhi: {
      totalMoney: 0,
      ghiChuMoney: ''
    },
    thongTinChuHoSo: {
      userType: 'cong_dan'
    },
    thongTinNguoiNopHoSo: {
      sameUser: false
    },
    dichVuChuyenPhatKetQua: {
      homeRegister: false
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    },
    loadVueProjects ({commit}, keywords) {
      commit('setLoading', true)
    },
    loadVueProject ({commit}, key) {
      commit('setLoading', true)
    },
    loadtrangThaiHoSoList ({commit}) {
      commit('setLoading', true)

      let data = [
        {
          title: 'Thông báo cần xử lý',
          id: '1',
          action: 'folder',
          action_active: 'folder_open',
          active: true,
          link: '/'
        },
        {
          title: 'Hồ sơ chờ chuyển xử lý',
          id: '2',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        },
        {
          title: 'Hồ sơ bổ sung',
          id: '3',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        },
        {
          title: 'Hồ sơ đang xử lý',
          id: '4',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        },
        {
          title: 'Hồ sơ chờ trả kết quả',
          id: '5',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        },
        {
          title: 'Hồ sơ đã trả kết quả',
          id: '6',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        },
        {
          title: 'Yêu cầu của chủ hồ sơ',
          id: '7',
          action: 'folder',
          action_active: 'folder_open',
          link: '/'
        }
      ]
      commit('setLoading', false)
      commit('setTrangThaiHoSoList', data)
    },
    clearVueProject ({commit}) {
      commit('setLoadedVueProject', null)
    },
    setCurrentIndex ({commit}, data) {
      commit('setIndex', data)
    },
    setLePhi ({commit}, data) {
      commit('setLePhi', data)
    },
    setThongTinChuHoSo ({commit}, data) {
      commit('setThongTinChuHoSo', data)
    },
    setThongTinNguoiNopHoSo ({commit}, data) {
      commit('setThongTinNguoiNopHoSo', data)
    },
    setDichVuChuyenPhatKetQua ({commit}, data) {
      commit('setDichVuChuyenPhatKetQua', data)
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setLoadedVueProjects (state, payload) {
      state.loadedVueProjects = payload
    },
    setLoadedVueProject (state, payload) {
      state.loadedVueProject = payload
    },
    setTrangThaiHoSoList (state, payload) {
      state.trangThaiHoSoList = payload
    },
    setIndex (state, payload) {
      state.index = payload
    },
    setLePhi (state, payload) {
      state.lePhi = payload
    },
    setThongTinChuHoSo (state, payload) {
      state.thongTinChuHoSo = payload
    },
    setThongTinNguoiNopHoSo (state, payload) {
      state.thongTinNguoiNopHoSo = payload
    },
    setDichVuChuyenPhatKetQua (state, payload) {
      state.dichVuChuyenPhatKetQua = payload
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    index (state) {
      return state.index
    },
    loadVueProjects (state) {
      if (state.loadedVueProjects.length === 0) {
        store.dispatch('loadVueProjects', '')
      } else {
        return state.loadedVueProjects
      }
    },
    loadVueProject (state) {
      return (vueProjectId) => {
        if (state.loadedVueProject == null) {
          store.dispatch('loadVueProject', vueProjectId)
        } else {
          return state.loadedVueProject
        }
      }
    },
    loadtrangThaiHoSoList (state) {
      return state.trangThaiHoSoList
    },
    lePhi (state) {
      return state.lePhi
    },
    thongTinChuHoSo (state) {
      return state.thongTinChuHoSo
    },
    thongTinNguoiNopHoSo (state) {
      return state.thongTinNguoiNopHoSo
    },
    dichVuChuyenPhatKetQua (state) {
      return state.dichVuChuyenPhatKetQua
    }
  }
})
