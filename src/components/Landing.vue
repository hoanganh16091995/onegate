<template>
  <div>
    <content-placeholders class="mt-3" v-if="loadingTable">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> <span v-if="trangThaiHoSoList">{{trangThaiHoSoList[index].title}}</span> </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex solo text-ellipsis">
          <v-text-field
            v-model="keywords"
            placeholder="Nhập từ khoá ..."
            prepend-icon="search"
            solo
          ></v-text-field>
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left">
            <v-icon size="16">send</v-icon>
            Chuyển hồ sơ vào xử lý
          </v-btn>
          <v-btn flat class="my-0 mx-0">
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
    <v-data-table
      v-else
      :headers="headers"
      :items="danhSachHoSoTables"
      :total-items="total"
      v-model="selected"
      item-key="name"
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
        <td class="text-xs-left">{{ props.item.serviceName }}</td>
        <td class="text-xs-left">{{ props.item.briefNote }}</td>
        <td class="text-xs-center">{{ props.item.dueDate }}</td>
        <td class="text-xs-left">{{ props.item.dueDate }}</td>
        <td class="text-xs-right px-0">
          <v-tooltip v-model="show1" top v-if="checkAction(trangThaiHoSoList[index].id).includes('print')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0">print</v-icon>
            </v-btn>
            <span>In phiếu hẹn</span>
          </v-tooltip>
          <v-tooltip v-model="show2" top v-if="checkAction(trangThaiHoSoList[index].id).includes('send')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0">send</v-icon>
            </v-btn>
            <span>Chuyển hồ sơ vào xử lý</span>
          </v-tooltip>
          <v-tooltip v-model="show3" top v-if="checkAction(trangThaiHoSoList[index].id).includes('ticket')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0">description</v-icon>
            </v-btn>
            <span>Phiếu kiểm soát</span>
          </v-tooltip>
          <v-tooltip v-model="show4" top v-if="checkAction(trangThaiHoSoList[index].id).includes('result')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0">exit_to_app</v-icon>
            </v-btn>
            <span>Trả kết quả</span>
          </v-tooltip>
          <v-tooltip v-model="show5" top v-if="checkAction(trangThaiHoSoList[index].id).includes('view')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0">remove_red_eye</v-icon>
            </v-btn>
            <span>Xem danh sách giấy tờ cần trả</span>
          </v-tooltip>
          <v-tooltip v-model="show6" top v-if="checkAction(trangThaiHoSoList[index].id).includes('delete')">
            <v-btn slot="activator" icon class="mx-0 my-0">
              <v-icon size="16" class="mx-0" color="red darken-3">delete</v-icon>
            </v-btn>
            <span>Xoá</span>
          </v-tooltip>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data: () => ({
    show: false,
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
    total: 0,
    page: 1
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
      vm.page = 1
      let filter = {
        keywords: vm.keywords,
        status: vm.trangThaiHoSoList[val],
        start: vm.page * 15 - 15,
        end: vm.page * 15
      }
      vm.$store.getters.danhSachHoSo(filter).then(function (result) {
        vm.danhSachHoSoTables = result.data
        vm.total = result.total
      })
    }
  },
  created () {
    var vm = this
    vm.page = 1
    vm.$nextTick(function () {
      vm.$store.dispatch('setCurrentIndex', vm.index)
      let filter = {
        keywords: vm.keywords,
        status: vm.trangThaiHoSoList[vm.index],
        start: vm.page * 15 - 15,
        end: vm.page * 15
      }
      vm.$store.getters.danhSachHoSo(filter).then(function (result) {
        vm.danhSachHoSoTables = result.data
        vm.total = result.total
      })
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
      }
    }
  }
}
</script>
