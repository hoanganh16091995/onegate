<template>
  <div>
    <content-placeholders class="mt-3" v-if="loadingTable">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> <span v-if="trangThaiHoSoList">{{trangThaiHoSoList[index].title}}</span> </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex text-ellipsis">
          <v-text-field
            v-model="keywords"
            @change.native="keywordSearch"
            placeholder="Nhập từ khoá ..."
            prepend-icon="search"
            solo
          ></v-text-field>
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="moveProcess" v-if="trangThaiHoSoList[index].id === 'new'">
            <v-icon size="16">send</v-icon>
            Chuyển hồ sơ vào xử lý
          </v-btn>
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="moveRelease" v-if="trangThaiHoSoList[index].id === 'release'">
            <v-icon size="16">send</v-icon>
            Trả kết quả
          </v-btn>
          <v-btn flat class="my-0 mx-0" @click="deleteDosier" v-if="showMultiDelete(trangThaiHoSoList[index].id)">
            <v-icon size="16">delete</v-icon>
            Xóa
          </v-btn>
        </div>
      </div>
    </div>
    <content-placeholders v-if="loadingTable">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
    <div v-else>
      <v-data-table
        :headers="headers"
        :items="danhSachHoSoTables"
        :total-items="total"
        v-model="selected"
        item-key="dossierId"
        select-all
        class="table-bordered"
        hide-actions
        :no-data-text="'Không tìm thấy ' + trangThaiHoSoList[index].title"
        :no-results-text="'Không tìm thấy ' + trangThaiHoSoList[index].title"
      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
            <span slot="activator">
              {{ props.header.text }}
            </span>
            <span>
              {{ props.header.text }}
            </span>
          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td class="text-xs-center stt_column">{{ props.index + 1 }}</td>
          <td class="text-xs-left">{{ props.item.dossierIdCTN }}</td>
          <td class="text-xs-left">{{ props.item.applicantName }}</td>
          <td class="text-xs-left">
            <a title="Chi tiết hồ sơ" :href="'/group/cong-xu-ly/mot-cua-dien-tu#/danh-sach-ho-so/'+index+'/tiep-nhan-ho-so/'+props.item.dossierId">
              <span>{{ props.item.serviceName }}</span>
            </a>
          </td>
          <td class="text-xs-left">{{ props.item.address}}</td>
          <td class="text-xs-center">{{ props.item.dueDate }}</td>
          <td class="text-xs-left">{{ props.item.durationText }}</td>
          <td class="text-xs-right px-0">
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('print')">
              <v-btn slot="activator" icon class="mx-0 my-0">
                <v-icon size="16" class="mx-0">print</v-icon>
              </v-btn>
              <span>In phiếu hẹn</span>
            </v-tooltip>
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('send')">
              <v-btn slot="activator" icon class="mx-0 my-0" @click="chuyenXuLy(props.item)">
                <v-icon size="16" class="mx-0">send</v-icon>
              </v-btn>
              <span>Chuyển hồ sơ vào xử lý</span>
            </v-tooltip>
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('ticket')">
              <v-btn slot="activator" icon class="mx-0 my-0">
                <v-icon size="16" class="mx-0">description</v-icon>
              </v-btn>
              <span>Phiếu kiểm soát</span>
            </v-tooltip>
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('result')">
              <v-btn slot="activator" icon class="mx-0 my-0" @click="traKetQua(props.item)">
                <v-icon size="16" class="mx-0">send</v-icon>
              </v-btn>
              <span>Trả kết quả</span>
            </v-tooltip>
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('view')">
              <v-btn slot="activator" icon class="mx-0 my-0">
                <v-icon size="16" class="mx-0">remove_red_eye</v-icon>
              </v-btn>
              <span>Xem danh sách giấy tờ cần trả</span>
            </v-tooltip>
            <v-tooltip top v-if="checkAction(trangThaiHoSoList[index].id).includes('delete')">
              <v-btn slot="activator" icon class="mx-0 my-0" @click="deleteDosier(props.item.dossierId, props.index)">
                <v-icon size="16" class="mx-0" color="red darken-3">delete</v-icon>
              </v-btn>
              <span>Xoá</span>
            </v-tooltip>
          </td>
        </template>
      </v-data-table>
      <div class="mt-3 text-xs-right table-footer">
        <div class="left">
          <v-btn outline color="indigo" class="my-0 mx-0 mr-2" @click="moveProcess" v-if="trangThaiHoSoList[index].id === 'new'">
            <v-icon size="16">send</v-icon>
            Chuyển hồ sơ vào xử lý
          </v-btn>
          <v-btn outline color="indigo" class="my-0 mx-0 mr-2" @click="moveRelease" v-if="trangThaiHoSoList[index].id === 'release'">
            <v-icon size="16">send</v-icon>
            Trả kết quả
          </v-btn>
          <v-btn outline color="indigo" class="my-0 mx-0 mr-2" @click="deleteDosier" v-if="showMultiDelete(trangThaiHoSoList[index].id)">
            <v-icon size="16">delete</v-icon>
            Xóa
          </v-btn>
        </div>
        <span class="mr-2"><i>Tổng số <span class="red--text">{{total}}</span> kết quả được tìm thấy</i></span>
        <v-pagination v-model="page" :length="pages"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data: () => ({
    keywords: '',
    selected: [],
    headers: [
      {
        text: 'STT',
        align: 'center',
        sortable: false,
        class: 'stt_column'
      },
      {
        text: 'Mã hồ sơ',
        align: 'left',
        sortable: false
      },
      {
        text: 'Người đăng ký',
        align: 'left',
        sortable: false
      },
      {
        text: 'Tên thủ tục',
        align: 'left',
        sortable: false
      },
      {
        text: 'Địa chỉ',
        align: 'left',
        sortable: false
      },
      {
        text: 'Ngày giờ hẹn trả',
        align: 'center',
        sortable: false
      },
      {
        text: 'Thời hạn',
        align: 'left',
        sortable: false
      },
      {
        text: '',
        align: 'right',
        sortable: false,
        class: 'action_column'
      }
    ],
    danhSachHoSoTables: [],
    itemperpage: 15,
    pages: 0,
    page: 1,
    total: 0
  }),
  computed: {
    loadingTable () {
      return this.$store.getters.loadingTable
    },
    trangThaiHoSoList () {
      return this.$store.getters.loadtrangThaiHoSoList
    }
  },
  watch: {
    index (val) {
      var vm = this
      vm.$store.dispatch('setCurrentIndex', vm.index)
      vm.selected = []
      vm.keywords = ''
      vm.page = 1
      let filter = {
        keywords: vm.keywords,
        status: vm.trangThaiHoSoList[val],
        start: vm.page * vm.itemperpage - vm.itemperpage,
        end: vm.page * vm.itemperpage
      }
      vm.$store.getters.danhSachHoSo(filter).then(function (result) {
        vm.danhSachHoSoTables = result.data
        vm.total = result.total
        vm.pages = Math.ceil(vm.total / vm.itemperpage)
      })
    },
    page (val) {
      var vm = this
      vm.page = val
      vm.loadDataTable()
    }
  },
  created () {
    var vm = this
    vm.page = 1
    vm.$nextTick(function () {
      vm.$store.dispatch('setCurrentIndex', vm.index)
      vm.loadDataTable()
    })
  },
  methods: {
    checkAction (status) {
      if (status === 'new') {
        return 'print,send,delete'
      } else if (status === 'release') {
        return 'result,ticket'
      } else if (status === 'done') {
        return 'view,ticket'
      } else if (status === 'waiting') {
        return 'view,ticket'
      } else if (status === 'receiving') {
        return 'view,ticket'
      } else if (status === 'correcting') {
        return 'view,ticket'
      } else if (status === 'processing') {
        return 'view,ticket'
      }
    },
    showMultiDelete (status) {
      if (status === 'new') {
        return true
      }
      return false
    },
    keywordSearch () {
      var vm = this
      vm.page = 1
      vm.loadDataTable()
    },
    loadDataTable () {
      var vm = this
      let filter = {
        keywords: vm.keywords,
        status: vm.trangThaiHoSoList[vm.index],
        start: vm.page * vm.itemperpage - vm.itemperpage,
        end: vm.page * vm.itemperpage
      }
      vm.$store.getters.danhSachHoSo(filter).then(function (result) {
        vm.danhSachHoSoTables = result.data
        vm.total = result.total
        vm.pages = Math.ceil(vm.total / vm.itemperpage)
      })
    },
    chuyenXuLy (data) {
      var vm = this
      let dataPost = {
        dossierId: data.dossierId,
        actionCode: 10000
      }
      vm.$store.dispatch('postAction', dataPost).then(function (result) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Chuyển thành công'])
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Xử lý không thành công'])
      })
    },
    traKetQua (data) {
      var vm = this
      let dataPost = {
        dossierId: data.dossierId,
        actionCode: 30000
      }
      vm.$store.dispatch('postAction', dataPost).then(function (result) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Chuyển thành công'])
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Xử lý không thành công'])
      })
    },
    moveProcess () {
      var vm = this
      var listPost = []
      vm.selected.forEach(val => {
        let data = {
          dossierId: val.dossierId,
          actionCode: 10000
        }
        listPost.push(vm.$store.dispatch('postAction', data))
      })
      Promise.all(listPost).then(function (ressult) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Chuyển thành công'])
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Xử lý không thành công'])
      })
      console.log(vm.selected)
    },
    moveRelease () {
      var vm = this
      var listPost = []
      vm.selected.forEach(val => {
        let data = {
          dossierId: val.dossierId,
          actionCode: 30000
        }
        listPost.push(vm.$store.dispatch('postAction', data))
      })
      Promise.all(listPost).then(function (ressult) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Chuyển thành công'])
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Xử lý không thành công'])
      })
      console.log(vm.selected)
    },
    deleteDosier (dossierId, index) {
      var vm = this
      if (dossierId) {
        let promise = vm.$store.dispatch('deleteDossier', dossierId)
        promise.then(function (ressult) {
          vm.danhSachHoSoTables.splice(index, 1)
        })
      }
      console.log(vm.selected)
    }
  }
}
</script>
