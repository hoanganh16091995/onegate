import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import toastr from 'toastr'
import axios from 'axios'
import support from './support.json'

Vue.use(toastr)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    api: {
      serviceInfoApi: 'http://hanoi.fds.vn:2281/api/serviceinfos',
      serviceConfigApi: 'http://127.0.0.1:8081/api/onegate/serviceconfigs/processes',
      regionApi: 'http://127.0.0.1:8081/api/dictcollections',
      serviceOptionApi: 'http://hanoi.fds.vn:2281/api/serviceconfigs/301/processes',
      postDossierApi: 'http://127.0.0.1:8081/api/onegate',
      dossierApi: 'http://127.0.0.1:8081/api/dossiers',
      dossierTemplatesApi: 'http://hanoi.fds.vn:2281/api/dossiertemplates',
      applicantApi: '/o/rest/v2/applicant',
      govAgency: 'abc',
      user: {},
      groupId: 0
    },
    dataDetailDossier: {},
    isDetail: false,
    loading: false,
    loadingTable: false,
    error: null,
    user: null,
    trangThaiHoSoList: [],
    index: 0,
    lePhi: {
      fee: 0,
      feeNote: ''
    },
    dossier: {
      applicantIdNo: 'ccc'
    },
    serviceConfigObj: {},
    dossierTemplateName: '',
    thongTinChungHoSo: {
      serviceName: '',
      dossierTemplateName: '',
      serviceConfig: '',
      serviceOption: '',
      dossierNo: '',
      receiveDate: new Date(),
      dueDate: (new Date()).toString(),
      durationDate: '',
      dossierId: ''
    },
    serviceConfigItems: null,
    serviceOptionItems: [],
    citys: null,
    cityVal: null,
    districtVal: null,
    wardVal: null,
    resultServices: null,
    dossierFiles: [],
    thanhPhanHoSo: {
      dossierTemplates: [{
        'partNo': '2',
        'partName': 'Giấy đăng ký hợp đồng xuất khẩu sản phẩm thủy sản (tải bản scan)',
        'partTip': '',
        'partType': 0,
        'multiple': false,
        'required': false,
        'esign': false,
        'fileTemplateNo': '',
        'hasForm': true,
        'fileType': ''
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
        'fileType': ''
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
        'fileType': ''
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
        'fileType': ''
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
        'fileType': ''
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
    }
    ],
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
      delegateApplicantName: '',
      delegateCity: '',
      delegateAddress: '',
      delegateDistrict: '',
      delegateWard: '',
      delegateContactEmail: '',
      delegateContactTelNo: '',
      delegateApplicantIdNo: ''
    },
    dichVuChuyenPhatKetQua: {
      viaPostal: false,
      postalServiceCode: '',
      postalServiceName: '',
      postalAddress: '',
      postalCityCode: '',
      postalCityName: '',
      postalDistrictCode: '',
      postalDistrictName: '',
      postalWardCode: '',
      postalWardName: '',
      postalTelNo: ''
    },
    danhSachHoSo: null
  },
  actions: {
    clearError ({ commit }) {
      commit('clearError')
    },
    loadInitResource ({ commit, state }) {
      axios.get(support.renderURLInit, {}).then(function (response) {
        state.api = response.data
      }).catch(function (xhr) {})
    },
    loadDanhSachHoSo ({ commit, state }, filter) {
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
    deleteDossier ({ commit, state }, arg) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
            groupId: state.api.groupId
          }
        }
        axios.delete(state.api.dossierApi + '/' + arg, param).then(function (response) {
          resolve(response)
        }, error => {
          reject(error)
        })
      })
    },
    loadtrangThaiHoSoList ({ commit }) {
      commit('setLoading', true)

      let data = [{
        title: 'Thông báo cần xử lý',
        id: 'receiving',
        action: 'folder',
        action_active: 'play_arrow',
        active: false,
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
        id: 'waiting',
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
        id: 'correcting',
        action: 'folder',
        action_active: 'play_arrow',
        link: '/'
      }
      ]
      commit('setLoading', false)
      commit('setTrangThaiHoSoList', data)
    },
    setCurrentIndex ({ commit }, data) {
      commit('setIndex', data)
    },
    setLePhi ({ commit }, data) {
      commit('setLePhi', data)
    },
    setDataDetailDossier ({commit}, data) {
      commit('dataDetailDossier', data)
    },
    setThongTinChuHoSo ({commit}, data) {
      commit('setThongTinChuHoSo', data)
    },
    setThongTinNguoiNopHoSo ({ commit }, data) {
      commit('setThongTinNguoiNopHoSo', data)
    },
    loadServiceConfigs ({ commit, state }, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      axios.get(state.api.serviceConfigApi, param).then(function (response) {
        commit('setserviceConfigItems', response.data.data)
      }).catch(function (xhr) {})
    },
    loadDictItems ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
            groupId: state.api.groupId
          },
          params: {
            parent: data.parent
          }
        }
        axios.get(state.api.regionApi + '/' + data.collectionCode + '/dictitems', param).then(function (response) {
          let serializable = response.data
          if (data.collectionCode === 'ADMINISTRATIVE_REGION') {
            if (data.level === 0) {
              commit('setCitys', serializable.data)
            }
          }
          resolve(response.data)
        }, error => {
          reject(error)
        })
      })
    },
    loadResultServices ({ commit, state }, data) {
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
      }).catch(function (xhr) {})
    },
    resetThongTinChungHoSo ({ commit }) {
      let data = {
        serviceConfig: {},
        serviceOption: '',
        receiveDate: new Date(),
        dueDate: (new Date()).toString(),
        durationDate: 1,
        dossierId: '',
        dossierNo: ''
      }
      commit('setThongTinChungHoSo', data)
    },
    resetThongTinChuHoSo ({ commit }) {
      let data = {
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
      }
      commit('setThongTinChuHoSo', data)
    },
    resetThongTinNguoiNopHoSo ({ commit }) {
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
    resetThanhPhanHoSo ({ commit }) {
      commit('setDossierTemplates', [])
    },
    loadDossierTemplates ({ commit, state }, data) {
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
      axios.all([axios.get(state.api.dossierTemplatesApi + '/' + data.dossierTemplateNo, param), axios.get(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/marks', paramDossierMark)])
      .then(axios.spread(function (resDossierTemplates, resDossierMarks) {
        let dossierTemplateItems = resDossierTemplates.data.dossierParts.filter((item, index) => {
          return item.partType === 1
        })
        let dossierMarkItems = resDossierMarks.data.data
        if (dossierMarkItems) {
          dossierTemplateItems = dossierTemplateItems.map(itemTemplate => {
            let itemMarkFinded = dossierMarkItems.find(itemMark => {
              return itemMark && itemMark.partNo === itemTemplate.partNo
            })
            if (itemMarkFinded) {
              itemTemplate.fileType = itemMarkFinded.fileType
              itemTemplate.fileCheck = itemMarkFinded.fileCheck
            } else {
              itemTemplate.fileType = ''
              itemTemplate.fileCheck = false
            }
            return itemTemplate
          })
        } else {
          dossierTemplateItems = dossierTemplateItems.map(itemTemplate => {
            itemTemplate.fileType = ''
            itemTemplate.fileCheck = false
            return itemTemplate
          })
        }
        console.log(dossierTemplateItems)
        commit('setDossierTemplates', dossierTemplateItems)
        state.thanhPhanHoSo.dossierTemplates = dossierTemplateItems
        state.thanhPhanHoSo.dossierTemplateId = resDossierTemplates.dossierTemplateId
      })).catch(function (xhr) {
        console.log(xhr)
      })
    },
    deleteAttackFiles ({ commit, state }, data) {
      let param = {
        headers: {
          groupId: state.api.groupId
        }
      }
      if (data.hasForm) {
        state.dossierFiles.map(item => {
          if (item.partNo === data.partNo) {
            axios.put(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files/' + data.referenceUid + '/resetformdata', {}, param).then(function (response) {
              console.log('success')
            }).catch(function (xhr) {
              console.log(xhr)
            })
          }
        })
      } else {
        axios.delete(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files/' + data.fileTemplateNo + '/all', param).then(function (response) {
          console.log('success!')
        }).catch(function (xhr) {
          console.log(xhr)
        })
      }
    },
    deleteSingleFile ({ commit, state }, data) {
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
    uploadSingleFile ({ commit, state }, e) {
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
    getDetailDossier ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
            groupId: state.api.groupId
          }
        }
        if (data > 0) {
          axios.get(state.api.postDossierApi + '/' + data, param).then(function (response) {
            commit('setDossier', response.data)
            commit('setThongTinChuHoSo', response.data)
            commit('setThongTinChungHoSo', response.data)
            commit('setDichVuChuyenPhatKetQua', response.data)
            resolve(response.data)
          }, error => {
            reject(error)
          }).catch(function (xhr) {
            console.log(xhr)
          })
        } else {
          resolve()
        }
      })
    },
    loadDossierFiles ({ commit, state }) {
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
    postDossier ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true)
        let options = {
          headers: {
            'groupId': state.api.groupId,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        var dataPostdossier = new URLSearchParams()
        dataPostdossier.append('serviceCode', data.serviceCode)
        dataPostdossier.append('govAgencyCode', data.govAgencyCode)
        dataPostdossier.append('dossierTemplateNo', data.templateNo)
        axios.post(state.api.postDossierApi, dataPostdossier, options).then(function (response) {
          response.data.serviceConfig = state.serviceConfigObj
          commit('setLoading', false)
          commit('setDossier', response.data)
          commit('setThongTinChuHoSo', response.data)
          commit('setThongTinChungHoSo', response.data)
          resolve(response.data)
        }).catch(function (xhr) {
          reject(xhr)
          commit('setLoading', false)
        })
      })
    },
    putDossier ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', false)
        let options = {
          headers: {
            groupId: state.api.groupId,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        var applicantType = ''
        if (data.userType) {
          applicantType = 'business'
        } else {
          applicantType = 'citizen'
        }
        var dataPutdossier = new URLSearchParams()
        dataPutdossier.append('applicantName', data.applicantName)
        dataPutdossier.append('applicantIdType', applicantType)
        dataPutdossier.append('applicantIdNo', data.applicantIdNo)
        dataPutdossier.append('address', data.address)
        dataPutdossier.append('cityCode', data.city)
        dataPutdossier.append('districtCode', data.district)
        dataPutdossier.append('wardCode', data.ward)
        dataPutdossier.append('contactTelNo', data.contactTelNo)
        dataPutdossier.append('contactEmail', data.contactEmail)
        dataPutdossier.append('delegateName', data.delegateApplicantName)
        dataPutdossier.append('delegateIdNo', data.delegateApplicantIdNo)
        dataPutdossier.append('delegateTelNo', data.delegateContactTelNo)
        dataPutdossier.append('delegateEmail', data.delegateContactEmail)
        dataPutdossier.append('delegateAddress', data.delegateAddress)
        dataPutdossier.append('delegateCityCode', data.delegateCity)
        dataPutdossier.append('delegateDistrictCode', data.delegateDistrict)
        dataPutdossier.append('delegateWardCode', data.delegateWard)
        dataPutdossier.append('applicantNote', data.applicantNote)
        if (data.viaPostal) {
          dataPutdossier.append('viaPostal', data.viaPostal)
          dataPutdossier.append('postalServiceCode', data.postalServiceCode)
          dataPutdossier.append('postalServiceName', data.postalServiceName)
          dataPutdossier.append('postalAddress', data.postalAddress)
          dataPutdossier.append('postalCityCode', data.postalCityCode)
          dataPutdossier.append('postalDistrictCode', data.postalDistrictCode)
          dataPutdossier.append('postalWardCode', data.postalWardCode)
          dataPutdossier.append('postalTelNo', data.postalTelNo)
        }
        axios.put(state.api.postDossierApi + '/' + state.thongTinChungHoSo.dossierId, dataPutdossier, options).then(function (response) {
          resolve(response.data)
          commit('setLoading', false)
          commit('setDossier', response.data)
          commit('setThongTinChuHoSo', response.data)
          commit('setThongTinChungHoSo', response.data)
          commit('setLePhi', response.data)
          commit('setDichVuChuyenPhatKetQua', response.data)
        }).catch(function (xhr) {
          reject(xhr)
        })
      })
    },
    putDuedateDossier ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', false)
        let options = {
          headers: {
            groupId: state.api.groupId,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        var dataPutdossier = new URLSearchParams()
        dataPutdossier.append('dueDate', data)
        axios.put(state.api.postDossierApi + '/' + state.thongTinChungHoSo.dossierId, dataPutdossier, options).then(function (response) {
          resolve(response.data)
          // commit('setLoading', false)
          // commit('setDossier', response.data)
          // commit('setThongTinChuHoSo', response.data)
          // commit('setThongTinChungHoSo', response.data)
          // commit('setLePhi', response.data)
          // commit('setDichVuChuyenPhatKetQua', response.data)
        }).catch(function (xhr) {
          reject(xhr)
        })
      })
    },
    submitDossier ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
            groupId: state.api.groupId
          }
        }
        axios.get(state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/submitting', param).then(function (response) {
          resolve(response.data)
        }).catch(function (xhr) {
          reject(xhr)
          console.log(xhr)
        })
      })
    },
    postDossierMark ({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('setLoading', true)
        let options = {
          headers: {
            'groupId': state.api.groupId,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        var dataPostdossierMark = new URLSearchParams()
        dataPostdossierMark.append('fileCheck', 'true')
        dataPostdossierMark.append('fileType', data.fileType)
        let url = state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/marks/' + data.partNo
        axios.post(url, dataPostdossierMark, options).then(function (response) {
          resolve(response.data)
          commit('setLoading', false)
        }).catch(function (xhr) {
          reject(xhr)
          commit('setLoading', false)
        })
      })
    },
    getUserInfoFromApplicantIdNo ({ commit, state }, data) {
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
    },
    loadAlpcaForm ({ commit, state }, data) {
      // let param = {
      //   headers: {
      //     groupId: state.api.groupId
      //   },
      //   responseType: 'text'
      // }
      console.log('alpaca')
      state.dossierFiles.map(item => {
        if (item.dossierPartNo === data.partNo) {
          // let urlFormScript = '/o/rest/v2/dossiers/' + state.thongTinChungHoSo.dossierId + '/files/' + item.referenceUid + '/formscript'
          // let urlFormDate = '/o/rest/v2/dossiers/' + state.thongTinChungHoSo.dossierId + '/files/' + item.referenceUid + '/formdata'
          // axios.all([axios.get(urlFormScript, param), axios.get(urlFormDate, param)])
          // .then(axios.spread(function (resFormScript, resFormData) {
          // })).catch(function (xhr) {
          //   console.log(xhr)
          // })
          /* eslint-disable */
          let formScript = eval('(' + item.formScript + ')')
          let formData = eval('(' + item.formData + ')')
          /* eslint-disable */
          console.log(typeof (formScript))
          console.log(typeof (formData))
          formScript.data = formData
          $('#formAlpaca' + data.partNo).alpaca(formScript)
        }
      })
    },
    putAlpacaForm ({ commit, state }, data) {
      commit('setLoading', true)
      return new Promise((resolve, reject) => {
        let options = {
          headers: {
            groupId: state.api.groupId
          }
        }
        var control = $('#formAlpaca' + data.partNo).alpaca('get')
        var formData = control.getValue()
        console.log('Data Form ------', data)
        console.log('formData-------', formData)
        var dataPutAlpacaForm = new URLSearchParams()
        dataPutAlpacaForm.append('formdata', JSON.stringify(formData))
        state.dossierFiles.map(item => {
          if (item.dossierPartNo === data.partNo) {
            let url = state.api.dossierApi + '/' + state.thongTinChungHoSo.dossierId + '/files/' + item.referenceUid + '/formdata'
            axios.put(url, dataPutAlpacaForm, options).then(function (response) {
              resolve(response.data)
              commit('setLoading', false)
            }).catch(function (xhr) {
              reject(xhr)
              commit('setLoading', false)
            })
          }
        })
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
    setTrangThaiHoSoList (state, payload) {
      state.trangThaiHoSoList = payload
    },
    setIndex (state, payload) {
      state.index = payload
    },
    setDossierTemplateName (state, payload) {
      state.dossierTemplateName = payload
    },
    setIsDetail (state, payload) {
      state.isDetail = payload
    },
    setLePhi (state, payload) {
      state.lePhi.fee = payload.fee
      state.lePhi.feeNote = payload.feeNote
    },
    setThanhPhanHoso (state, payload) {
      state.thanhPhanHoSo = payload
    },
    setThanhPhanHosoTemplates (state, payload) {
      state.thanhPhanHoSo.dossierTemplates = payload
    },
    setThongTinChuHoSo (state, payload) {
      let userTypeCondition = true
      if (payload.applicantIdType === 'business') {
        userTypeCondition = false
      }
      let thongTinChuHoSoPayLoad = {
        applicantIdNo: payload.applicantIdNo,
        applicantName: payload.applicantName,
        address: payload.address,
        city: payload.city,
        district: payload.district,
        ward: payload.ward,
        contactEmail: payload.contactEmail,
        contactTelNo: payload.contactTelNo,
        userType: userTypeCondition
      }
      state.thongTinChuHoSo = thongTinChuHoSoPayLoad
    },
    setThongTinNguoiNopHoSo (state, payload) {
      console.log(payload)
      state.thongTinNguoiNopHoSo = Object.assign(state.thongTinNguoiNopHoSo, payload)
    },
    setDichVuChuyenPhatKetQua (state, payload) {
      let tempData = {
        viaPostal: payload.viaPostal,
        postalServiceCode: payload.postalServiceCode,
        postalServiceName: payload.postalServiceName,
        postalAddress: payload.postalAddress,
        postalCityCode: payload.postalCityCode,
        postalCityName: payload.postalCityName,
        postalDistrictCode: payload.postalDistrictCode,
        postalDistrictName: payload.postalDistrictName,
        postalWardCode: payload.postalWardCode,
        postalWardName: payload.postalWardName,
        postalTelNo: payload.postalTelNo
      }
      state.dichVuChuyenPhatKetQua = tempData
    },
    setServiceConfigObj (state, payload) {
      state.serviceConfigObj = payload
    },
    setThongTinChungHoSo (state, payload) {
      let thongTinChungHoSoPayLoad = {
        dossierTemplateName: payload.dossierTemplateName,
        serviceName: payload.serviceName,
        serviceConfig: payload.serviceConfig,
        serviceOption: payload.dossierTemplateNo,
        receiveDate: new Date(payload.receiveDate),
        dueDate: (new Date(payload.dueDate)).toString(),
        durationDate: '',
        dossierId: payload.dossierId,
        dossierNo: payload.dossierNo
      }
      state.thongTinChungHoSo = thongTinChungHoSoPayLoad
    },
    setThongTinChungHoSoDueDate (state, payload) {
      state.thongTinChungHoSo.dueDate = payload
    },
    setThongTinChungHoSoDurationDate (state, payload) {
      state.thongTinChungHoSo.durationDate = payload
    },
    setThongTinChungHoSoReceiveDate (state, payload) {
      state.thongTinChungHoSo.receiveDate = payload
    },
    setserviceConfigItems (state, payload) {
      state.serviceConfigItems = payload
    },
    setServiceOptionItems (state, payload) {
      state.serviceOptionItems = payload
    },
    setServiceOptionThongTinChungHoSo (state, payload) {
      state.thongTinChungHoSo.serviceOption = payload
    },
    setCitys (state, payload) {
      state.citys = payload
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
    setCityVal (state, payload) {
      state.cityVal = payload
    },
    setDistrictVal (state, payload) {
      state.districtVal = payload
    },
    setWardVal (state, payload) {
      state.wardVal = payload
    },
    setDossierFiles (state, payload) {
      state.dossierFiles = payload
    },
    setSameUser (state, payload) {
      state.thongTinNguoiNopHoSo.sameUser = payload
    },
    setSameUser2 (state, payload) {
      state.sameUser2 = payload
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
    loadtrangThaiHoSoList (state) {
      return state.trangThaiHoSoList
    },
    lePhi (state) {
      return state.lePhi
    },
    isDetail (state) {
      return state.isDetail
    },
    dossierTemplateName (state) {
      return state.dossierTemplateName
    },
    thongTinChungHoSo (state, config) {
      return state.thongTinChungHoSo
    },
    thongTinChuHoSo (state) {
      return state.thongTinChuHoSo
    },
    thanhPhanHoSo (state) {
      return state.thanhPhanHoSo
    },
    thongTinNguoiNopHoSo (state) {
      return state.thongTinNguoiNopHoSo
    },
    dichVuChuyenPhatKetQua (state) {
      return state.dichVuChuyenPhatKetQua
    },
    serviceConfigItems (state) {
      if (state.serviceConfigItems == null) {
        store.dispatch('loadServiceConfigs')
      } else {
        return state.serviceConfigItems
      }
    },
    serviceOptionItems (state) {
      return state.serviceOptionItems
    },
    getDictItems (state) {
      return (filter) => {
        if (filter.collectionCode === 'ADMINISTRATIVE_REGION' && filter.level === 0) {
          if (state.citys == null) {
            return store.dispatch('loadDictItems', filter)
          } else {
            return new Promise((resolve, reject) => {
              resolve({
                total: state.citys.length,
                data: state.citys
              })
            })
          }
        } else {
          return store.dispatch('loadDictItems', filter)
        }
      }
    },
    resultServices (state) {
      return state.resultServices
    },
    dossierTemplates (state) {
      return state.dossierTemplates
    },
    dataDetailDossier (state) {
      return state.dossier
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
    getCityVal (state) {
      return state.cityVal
    },
    getDistrictVal (state) {
      return state.districtVal
    },
    getWardVal (state) {
      return state.wardVal
    },
    dossierFiles (state) {
      return state.dossierFiles
    },
    sameUser2 (state) {
      return state.sameUser2
    }
  }
})
