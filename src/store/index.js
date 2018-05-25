import Vue from 'vue'
import Vuex from 'vuex'
import toastr from 'toastr'
import axios from 'axios'
import support from './support.json'
// import router from '@/router'

Vue.use(toastr)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    api: {
      serviceInfoApi: '/o/rest/v2/serviceinfos',
      serviceConfigApi: '/o/rest/v2/serviceconfigs',
      regionApi: '/o/rest/v2/dictcollections/101/dictItems',
      serviceOptionApi: '/o/rest/v2/serviceconfigs/301/processes',
      applicantApi: '/o/rest/v2/applicant',
      dossierApi: '/o/rest/v2/dossiers',
      dossierTemplatesApi: '/o/rest/v2/dossiertemplates',
      govAgency: 'abc',
      user: {},
      groupId: 0
    },
    loadedVueProjects: [
    ],
    loadedVueProject: null,
    loading: false,
    loadingTable: false,
    error: null,
    user: null,
    trangThaiHoSoList: [
    ],
    index: 0,
    lePhi: {
      fee: 0,
      feeNote: ''
    },
    dossier: {
      applicantIdNo: 'ccc'
    },
    thongTinChungHoSo: {
      serviceInfo: '',
      serviceOption: '',
      dossierNo: '',
      startDateTime: '',
      timeEndText: '',
      timeEnd: new Date(),
      dateEnd: '',
      dateEndMd: '',
      dueDate: 1,
      valid: false,
      dossierId: ''
    },
    serviceInfoItems: [],
    serviceOptionItems: [],
    citys: [],
    districts: [],
    wards: [],
    delegateCitys: [],
    delegateDistricts: [],
    delegateWards: [],
    resultCitys: [],
    resultDistricts: [],
    resultWards: [],
    resultServices: [],
    dossierFiles: [],
    thanhPhanHoso: {
      dossierTemplates: [
        {
          'partNo': '2',
          'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
          'partTip': '',
          'partType': 0,
          'multiple': false,
          'required': false,
          'esign': false,
          'fileTemplateNo': '',
          'hasForm': true,
          'fileTypes': []
        },
        {
          'partNo': '2',
          'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
          'partTip': '',
          'partType': 0,
          'multiple': false,
          'required': false,
          'esign': false,
          'fileTemplateNo': '',
          'hasForm': true,
          'fileTypes': []
        },
        {
          'partNo': '2',
          'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
          'partTip': '',
          'partType': 0,
          'multiple': false,
          'required': false,
          'esign': false,
          'fileTemplateNo': '',
          'hasForm': true,
          'fileTypes': []
        },
        {
          'partNo': '2',
          'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
          'partTip': '',
          'partType': 0,
          'multiple': false,
          'required': false,
          'esign': false,
          'fileTemplateNo': '',
          'hasForm': true,
          'fileTypes': []
        },
        {
          'partNo': '2',
          'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
          'partTip': '',
          'partType': 0,
          'multiple': false,
          'required': false,
          'esign': false,
          'fileTemplateNo': '',
          'hasForm': true,
          'fileTypes': []
        }
      ]
    },
    dossierTemplates: [{
      'partNo': '1',
      'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản',
      'partTip': '',
      'partType': 0,
      'multiple': false,
      'required': false,
      'esign': false,
      'fileTemplateNo': '',
      'hasForm': true,
      'fileType': 0
    },
    {
      'partNo': '2',
      'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
      'partTip': '',
      'partType': 0,
      'multiple': false,
      'required': false,
      'esign': false,
      'fileTemplateNo': '',
      'hasForm': true,
      'fileType': 0
    },
    {
      'partNo': '3',
      'partName': 'Giấy đăng ký nuôi thủy sản thương phẩm',
      'partTip': '',
      'partType': 0,
      'multiple': false,
      'required': false,
      'esign': false,
      'fileTemplateNo': '',
      'hasForm': false,
      'fileType': 0
    },
    {
      'partNo': '4',
      'partName': 'Giấy đăng ký nuôi thủy sản thương phẩm',
      'partTip': '',
      'partType': 0,
      'multiple': false,
      'required': false,
      'esign': false,
      'fileTemplateNo': '',
      'hasForm': false,
      'fileType': 0
    },
    {
      'partNo': '5',
      'partName': 'Hợp đồng mua thủy sản nguyên liệu với tổ chức, cá nhân có cơ sở nuôi thủy sản thương phẩm',
      'partTip': '',
      'partType': 0,
      'multiple': false,
      'required': false,
      'esign': false,
      'fileTemplateNo': '',
      'hasForm': false,
      'fileType': 0
    }],
    thongTinChuHoSo: {
      userType: true,
      city: '',
      district: '',
      ward: '',
      applicantNote: '',
      applicantIdNo: '',
      contactEmail: '',
      contactName: '',
      address: '',
      applicantName: ''
    },
    thongTinNguoiNopHoSo: {
      sameUser: true,
      applicantName: '',
      city: '',
      address: '',
      district: '',
      ward: '',
      contactEmail: '',
      contactTelNo: '',
      applicantIdNo: ''
    },
    dichVuChuyenPhatKetQua: {
      homeRegister: false,
      resultService: '',
      resultAddress: '',
      resultCity: '',
      resultDistrict: '',
      resultWard: '',
      resultTelNo: ''
    },
    danhSachHoSo: null
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
    loadInitResource ({commit, state}) {
      axios.get(support.renderURLInit, {}).then(function (response) {
        state.api = response.data
      }).catch(function (xhr) {
      })
    },
    loadDanhSachHoSo ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        commit('setLoadingTable', true)
        let param = {
          headers: {
            groupId: state.api.groupId
          },
          params: {
            status: filter.status.id,
            keyword: filter.keywords,
            start: filter.start,
            end: filter.end
          }
        }
        axios.get(state.api.dossierApi, param).then(function (response) {
          let serializable = response.data
          commit('setDanhSachHoSo', serializable)
          resolve(response.data)
          commit('setLoadingTable', false)
        }, error => {
          reject(error)
          commit('setLoadingTable', false)
        })
      })
    },
    loadtrangThaiHoSoList ({commit}) {
      commit('setLoading', true)

      let data = [
        {
          title: 'Thông báo cần xử lý',
          id: '1',
          action: 'folder',
          action_active: 'play_arrow',
          active: true,
          link: '/'
        },
        {
          title: 'Hồ sơ chờ chuyển xử lý',
          id: 'new',
          action: 'folder',
          action_active: 'play_arrow',
          link: '/'
        },
        {
          title: 'Hồ sơ bổ sung',
          id: '3',
          action: 'folder',
          action_active: 'play_arrow',
          link: '/'
        },
        {
          title: 'Hồ sơ đang xử lý',
          id: 'processing',
          action: 'folder',
          action_active: 'play_arrow',
          link: '/'
        },
        {
          title: 'Hồ sơ chờ trả kết quả',
          id: 'release',
          action: 'folder',
          action_active: 'play_arrow',
          link: '/'
        },
        {
          title: 'Hồ sơ đã trả kết quả',
          id: 'done',
          action: 'folder',
          action_active: 'play_arrow',
          link: '/'
        },
        {
          title: 'Yêu cầu của chủ hồ sơ',
          id: '7',
          action: 'folder',
          action_active: 'play_arrow',
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
      let param = {
        groupId: state.api.groupId
      }
      axios.get(state.api.serviceInfoApi, param).then(function (response) {
        commit('setServiceInfoItems', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadServiceOptions ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          govAgency: state.api.govAgency,
          serviceInfo: data
        }
      }
      axios.get(state.api.serviceOptionApi, param).then(function (response) {
        let serviceConfig = response.data
        axios.get(state.api.serviceConfigApi + '/' + serviceConfig.serverConfigId + '/processes', param).then(function (response) {
          commit('setServiceOptionItems', response.data.data)
        }).catch(function (xhr) {
        })
      }).catch(function (xhr) {
      })
    },
    loadCitys ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: 0
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setCitys', response.data.data)
      }).catch(function (xhr) {
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
        commit('setDistricts', response.data.data)
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
        commit('setWards', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadDelegateCitys ({commit, state}, data) {
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
        commit('setDelegateCitys', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadDelegateDistricts ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setLoading', false)
        commit('setDelegateDistricts', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadDelegateWards ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setLoading', false)
        commit('setDelegateWards', response.data.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    loadResultCitys ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: 0
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setResultCitys', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadResultDistricts ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setResultDistricts', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadResultWards ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setResultWards', response.data.data)
      }).catch(function (xhr) {
      })
    },
    loadResultServices ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          parent: data
        }
      }
      axios.get(state.api.regionApi, param).then(function (response) {
        commit('setResultServices', response.data.data)
      }).catch(function (xhr) {
      })
    },
    resetThongTinNguoiNopHoSo ({commit}) {
      console.log('reset')
      let data = {
        sameUser: '',
        delegateApplicantName: '',
        delegateCity: '',
        delegateAddress: '',
        delegateDistrict: '',
        delegateWard: '',
        delegateContactEmail: '',
        delegateContactTelNo: '',
        delegateApplicantIdNo: ''
      }
      commit('setThongTinNguoiNopHoSo', data)
    },
    loadDossierTemplates ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      let paramDossierMark = {
        headers: {
          groupId: state.api.groupId
        },
        params: {
          type: 1
        }
      }
      axios.all([axios.get(state.api.dossierTemplatesApi + '/' + data.dossierTemplateNo, param), axios.get(state.api.dossierApi + '/' + data.dossierId + '/marks', paramDossierMark)])
      .then(axios.spread(function (resDossierTemplates, resDossierMarks) {
        let dossierTemplateItems = resDossierTemplates.data.dossierParts.filter((item, index) => {
          return item.partType === 1
        })
        let dossierMarkItems = resDossierMarks.data.data
        dossierTemplateItems = dossierTemplateItems.map(itemTemplate => {
          let itemMarkFinded = dossierMarkItems.find(itemMark => {
            return itemMark && itemMark.partNo === itemTemplate.partNo
          })
          if (itemMarkFinded) {
            itemTemplate.fileTypes.push(itemMarkFinded.fileType)
          } else {
            itemTemplate.fileTypes.push('')
          }
          /* return Object.assign(itemTemplate, dossierMarkItems.find(itemMark => {
            return itemMark && itemTemplate.partNo === itemMark.partNo
          })) */
        })
        commit('setDossierTemplates', dossierTemplateItems)
        state.thanhPhanHoso.dossierTemplates = dossierTemplateItems
      })).catch(function (xhr) {
        console.log(xhr)
      })
    },
    deleteAttackFiles ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      if (data.hasForm) {
        // TODO
        axios.put(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files/' + data.referenceUid + '/resetformdata', {}, param).then(function (response) {
          console.log('success')
        }).catch(function (xhr) {
          console.log(xhr)
        })
      } else {
        axios.delete(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files/' + data.fileTemplateNo + '/all', param).then(function (response) {
          console.log('success!')
        }).catch(function (xhr) {
          console.log(xhr)
        })
      }
    },
    deleteSingleFile ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      axios.delete(state.api.dossierApi + '/' + state.thonTinChungHoSo.dossierId + '/files/' + data.referenceUid, param).then(function (response) {
        console.log('success')
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    uploadSingleFile ({commit, state}, e) {
      let files = e.target.files || e.dataTransfer.files
      let file = files[0]
      let data = e.dataItem
      let formData = new FormData()
      formData.append('fileName', file.name)
      formData.append('fileType', file.type)
      formData.append('fileSize', file.size)
      formData.append('isSign', 'true')
      formData.append('file', file)
      formData.append('dossierPartNo', data.partNo)
      axios.post(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (reponse) {
        console.log('upload file success!')
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    getDetailDossier ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      axios.get(state.api.dossierApi + '/' + data, param).then(function (response) {
        commit('setDossier', response.data)
        commit('setThongTinChuHoSo', response.data)
        commit('setThongTinChungHoSo', response.data)
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    loadDossierFiles ({commit, state}) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      axios.get(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files', param).then(function (response) {
        commit('setDossierFiles', response.data.data)
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    postDossier ({commit, state}, data) {
      commit('setLoading', true)
      let options = {
        headers: {
          groupId: state.api.groupId
        }
      }
      let param = {
        serviceCode: data.serviceCode,
        govAgencyCode: data.govAgencyCode,
        dossierTemplateNo: data.dossierTemplateNo
        // TODO
      }
      axios.post(state.api.dossierApi, param, options).then(function (response) {
        commit('setLoading', false)
        commit('setDossier', response.data)
        commit('setThongTinChuHoSo', response.data)
        commit('setThongTinChungHoSo', response.data)
      }).catch(function (xhr) {
        commit('setLoading', false)
      })
    },
    getUserInfoFromApplicantIdNo ({commit, state}, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      axios.get(state.api.applicantApi + '/' + data, param).then(function (response) {
        state.thongTinChuHoSo.applicantIdNo = response.data.applicantIdNo
        state.thongTinChuHoSo.applicantName = response.data.applicantName
        state.thongTinChuHoSo.address = response.data.address
        state.thongTinChuHoSo.contactEmail = response.data.contactEmail
        state.thongTinChuHoSo.contactTelNo = response.data.contactTelNo
        state.thongTinChuHoSo.city = response.data.city
        state.thongTinChuHoSo.district = response.data.district
        state.thongTinChuHoSo.ward = response.data.ward
      }).catch(function (xhr) {
        console.log(xhr)
      })
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setLoadingTable (state, payload) {
      state.loadingTable = payload
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
    setThanhPhanHoso (state, payload) {
      state.thanhPhanHoso = payload
    },
    setThongTinChuHoSo (state, payload) {
      let thongTinChuHoSoPayLoad = {
        applicantIdNo: payload.applicantIdNo,
        applicantName: payload.applicantName,
        address: payload.address,
        city: payload.city,
        district: payload.district,
        ward: payload.ward,
        contactEmail: payload.contactEmail,
        contactTelNo: payload.contactTelNo,
        userType: payload.userType
      }
      state.thongTinChuHoSo = thongTinChuHoSoPayLoad
    },
    setThongTinNguoiNopHoSo (state, payload) {
      state.thongTinNguoiNopHoSo = payload
    },
    setDichVuChuyenPhatKetQua (state, payload) {
      state.dichVuChuyenPhatKetQua = payload
    },
    setThongTinChungHoSo (state, payload) {
      let thongTinChungHoSoPayLoad = {
        serviceInfo: payload.applicantIdNo,
        serviceOption: payload.serviceOption,
        receiveDate: payload.receiveDate,
        dueDate: payload.dueDate,
        dossierId: payload.dossierId
      }
      state.thongTinChungHoSo = thongTinChungHoSoPayLoad
    },
    setServiceInfoItems (state, payload) {
      state.serviceInfoItems = payload
    },
    setServiceOptionItems (state, payload) {
      state.serviceOptionItems = payload
    },
    setCitys (state, payload) {
      state.citys = payload
    },
    setDistricts (state, payload) {
      state.districts = payload
    },
    setWards (state, payload) {
      state.wards = payload
    },
    setDelegateCitys (state, payload) {
      state.delegateCitys = payload
    },
    setDelegateDistricts (state, payload) {
      state.delegateDistricts = payload
    },
    setDelegateWards (state, payload) {
      state.delegateWards = payload
    },
    setResultCitys (state, payload) {
      state.resultCitys = payload
    },
    setResultDistricts (state, payload) {
      state.resultDistricts = payload
    },
    setResultWards (state, payload) {
      state.resultWards = payload
    },
    setResultServices (state, payload) {
      state.resultServices = payload
    },
    setDossierTemplates (state, payload) {
      state.dossierTemplates = payload
    },
    setDossier (state, payload) {
      state.dossier = payload
    },
    setDanhSachHoSo (state, payload) {
      state.danhSachHoSo = payload
    },
    setDossierFiles (state, payload) {
      state.dossierFiles = payload
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    loadingTable (state) {
      return state.loadingTable
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
    thanhPhanHoSo (state) {
      return state.thanhPhanHoso
    },
    thongTinNguoiNopHoSo (state) {
      return state.thongTinNguoiNopHoSo
    },
    dichVuChuyenPhatKetQua (state) {
      return state.dichVuChuyenPhatKetQua
    },
    serviceInfoItems (state) {
      if (state.serviceInfoItems.length === 0) {
        store.dispatch('loadServiceInfos')
      } else {
        return state.serviceInfoItems
      }
    },
    serviceOptionItems (state) {
      return state.serviceOptionItems
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
    },
    delegateCitys (state) {
      if (state.delegateCitys.length === 0) {
        store.dispatch('loadDelegateCitys')
      } else {
        return state.delegateCitys
      }
    },
    delegateDistricts (state) {
      return state.delegateDistricts
    },
    delegateWards (state) {
      return state.delegateWards
    },
    resultCitys (state) {
      if (state.resultCitys.length === 0) {
        store.dispatch('loadResultCitys')
      } else {
        return state.resultCitys
      }
    },
    resultDistricts (state) {
      return state.resultDistricts
    },
    resultWards (state) {
      return state.resultWards
    },
    resultServices (state) {
      if (state.resultServices.length === 0) {
        store.dispatch('loadResultServices')
      } else {
        return state.resultServices
      }
    },
    dossierTemplates (state) {
      return state.dossierTemplates
    },
    dossier (state) {
      return state.dossier
    },
    danhSachHoSo (state) {
      return (filter) => {
        let dataPromise = store.dispatch('loadDanhSachHoSo', filter)
        return dataPromise
      }
    },
    dossierFiles (state) {
      return state.dossierFiles
    }
  }
})
