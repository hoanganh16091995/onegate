import Vue from 'vue'
import Vuex from 'vuex'
import toastr from 'toastr'
import axios from 'axios'
// import router from '@/router'

Vue.use(toastr)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    api: {
      serviceInfoApi: 'http://hanoi.fds.vn:2281/api/serviceinfos',
      serviceConfigApi: 'http://hanoi.fds.vn:2281/api/serviceconfigs',
      regionApi: 'http://hanoi.fds.vn:2281/api/dictcollections/101/dictItems',
      groupId: 0
    },
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
    thongTinChungHoSo: {
      serviceInfo: '',
      serviceConfig: ''
    },
    serviceInfos: [],
    serviceConfigs: [],
    citys: [],
    districts: [],
    wards: [],
    thongTinChuHoSo: {
      userType: 'cong_dan',
      city: '',
      district: '',
      ward: ''
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
    },
    setThongTinChungHoSo ({commit}, data) {
    },
    loadServiceInfos ({commit, state}, data) {
      commit('setLoading', true)
      let param = {
        groupId: state.api.groupId
      }
      axios.get(state.api.serviceInfoApi, param).then(function (response) {
        commit('setLoading', false)
        commit('setServiceInfos', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadServiceConfigs ({commit, state}, data) {
      commit('setLoading', true)
      let param = {
        groupId: state.api.groupId
      }
      axios.get(state.api.serviceConfigApi, param).then(function (response) {
        commit('setLoading', false)
        commit('setServiceConfigs', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadCitys ({commit, state}, data) {
      commit('setLoading', true)
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: 0
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setLoading', false)
        commit('setCitys', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadDistricts ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setDistrict', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadWards ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setWard', response.data.data)
      }).catch(function (xhr) {
      })
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
    },
    setThongTinChungHoSo (state, payload) {
      state.thongTinChungHoSo = payload
    },
    setServiceInfos (state, payload) {
      state.serviceInfos = payload
    },
    setServiceConfigs (state, payload) {
      state.serviceConfigs = payload
    },
    setCitys (state, payload) {
      state.citys = payload
    },
    setDistrict (state, payload) {
      state.districts = payload
    },
    setWard (state, payload) {
      state.wards = payload
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
    thongTinChungHoSo (state, config) {
      return state.thongTinChungHoSo
    },
    thongTinChuHoSo (state) {
      return state.thongTinChuHoSo
    },
    thongTinNguoiNopHoSo (state) {
      return state.thongTinNguoiNopHoSo
    },
    dichVuChuyenPhatKetQua (state) {
      return state.dichVuChuyenPhatKetQua
    },
    serviceInfos (state) {
      if (state.serviceInfos.length === 0) {
        store.dispatch('loadServiceInfos')
      } else {
        return state.serviceInfos
      }
    },
    serviceConfigs (state) {
      if (state.serviceConfigs.length === 0) {
        store.dispatch('loadServiceConfigs')
      } else {
        return state.serviceConfigs
      }
    },
    citys (state) {
      if (state.citys.length === 0) {
        store.dispatch('loadCitys')
      } else {
        return state.citys
      }
    },
    districts (state) {
      return state.districts
    },
    wards (state) {
      return state.wards
    }
  }
})
