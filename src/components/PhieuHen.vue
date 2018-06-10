<template>
  <div>
    <div class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> PHIẾU HẸN </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex solo text-ellipsis">
          
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" :to="'/danh-sach-ho-so/' + index + '/tiep-nhan-ho-so/' + id" active-class="temp_active">
            Quay lại &nbsp;
            <v-icon size="16">undo</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div style="background-color: white;">
        <div class="receipt-wrapper"><div class="row head">
        <div class="left">
          <p class="text-uppercase text-bold">Cục bản quyền tác gỉa</p>
          <span class="text-bold">Bộ phận một cửa và trả kết quả</span>
          <p>==================</p>
        </div>
        <div class="right">
          <p class="text-uppercase text-bold">Cộng hòa Xã hội Chủ nghĩa Việt Nam</p>
          <p class="text-bold">Độc lập - Tự do - Hạnh phúc</p>
          <p>==================</p>
          <p>..., Ngày ... tháng ... năm ...</p>
        </div>
      </div>
      <div class="row title">
        <h4 class="text-uppercase">Phiếu tiếp nhận hồ sơ và hẹn trả kết quả</h4>
        <p>Mã số hồ sơ: CBQTG2018051589HK</p>
        <p><i>(Liên 1: Lưu)</i></p>
      </div>
      <div class="row">
        <p>Bộ phận tiếp nhận và trả kết quả: Cục bản quyền tác giả</p>
        <p>Tiếp nhận hồ sơ của: {{ thongTinChuHoSo.applicantName }}</p>
        <p>Địa chỉ: {{ thongTinChuHoSo.address }}</p>
        <p>Số điện thoại: {{ thongTinChuHoSo.contactTelNo}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: {{ thongTinChuHoSo.contactEmail }}</p>
        <p>Lệ phí tạm thu: {{ lePhi.fee }} đồng</p>
        <p><!-- Nội dung yêu cầu giải quyết: Cấp giấy phép sản xuất phim ảnh, xuất bản sách, tài liệu văn hóa -->{{thongTinChungHoSo.serviceInfo}}</p>
        <ol>
          <li>Thành phần hồ sơ gồm có:
            <br>
            (1) Công văn đề nghị phê duyệt kế hoạch ứng phó sự cố bức xạ và hạt nhân cấp cơ sở (bản chính);
            <br>
            (2) Kế hoạch ứng phó sự cố bức xạ và hạt nhân cấp cơ sở
            <br>
            (3) Số bộ hồ sơ: 01 (bộ)
          </li>
          <li>Thời gian giải quyết hồ sơ theo quy định là: {{ thongTinChungHoSo.durationDate }} ngày làm việc</li>
          <li>Thời gian nhận hồ sơ: {{ thongTinChungHoSo.startDateTime }}</li>
          <li>Thời gian trả kết quả giải quyết hồ sơ: {{ thongTinChungHoSo.dateEnd }}</li>
          <li>Đăng ký nhận kết quả tại: [Dịch vụ chuyển phát kết quả]</li>
        </ol>
        <p class="note">Chú ý: Công dân đến nhận kết quả mang theo phiếu hẹn, CMTND, lệ phí và giấy ủy quyền (Trong trường hợp không phải chính chủ tới nhận)</p>
        <p>Số điện thoại tiếp nhận ý kiến phản hồi của tổ chức, cá nhân: 19003111</p>
      </div>
      <div class="row">
        <div class="submit left">
          <p class="text-bold">Người nộp hồ sơ</p>
          <p><i>(Ký và ghi rõ họ tên)</i></p>
        </div>
        <div class="reciever right">
          <p class="text-bold">Cán bộ tiếp nhận</p>
          <p><i>(Ký và ghi rõ họ tên)</i></p>
        </div>
      </div></div>
    </div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="text-center mt-2">
      <v-btn outline color="primary" v-on:click.native="guiHoSo">
        Gửi hồ sơ
      </v-btn>
      <v-btn outline color="primary" v-on:click.native="hoanThanhVaThemMoi">
        Hoàn thành và thêm mới
      </v-btn>
      <v-btn outline color="primary" v-on:click.native="hoanThanh">
        Hoàn thành
      </v-btn>
      <v-btn outline color="primary" :to="'/danh-sach-ho-so/' + index + '/tiep-nhan-ho-so/' + id" active-class="temp_active">
        Quay lại &nbsp;
        <v-icon>undo</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import ThongTinChung from './TiepNhanHoSo_ThongTinChung.vue'
import ThongTinChuHoSo from './TiepNhanHoSo_ThongTinChuHoSo.vue'
import ThanhPhanHoSo from './TiepNhanHoSo_ThanhPhanHoSo.vue'
import LePhi from './TiepNhanHoSo_LePhi.vue'
import DichVuChuyenPhatKetQua from './TiepNhanHoSo_DichVuChuyenPhatKetQua.vue'

export default {
  props: ['index', 'id'],
  components: {
    'thong-tin-chung': ThongTinChung,
    'thong-tin-chu-ho-so': ThongTinChuHoSo,
    'thanh-phan-ho-so': ThanhPhanHoSo,
    'le-phi': LePhi,
    'dich-vu-chuyen-phat-ket-qua': DichVuChuyenPhatKetQua
  },
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    trangThaiHoSoList () {
      return this.$store.getters.loadtrangThaiHoSoList
    },
    lePhi () {
      return this.$store.getters.lePhi
    },
    thongTinChungHoSo () {
      return this.$store.getters.thongTinChungHoSo
    },
    thongTinChuHoSo () {
      console.log('thongTinChuHoSo=============', ThongTinChuHoSo)
      return this.$store.getters.thongTinChuHoSo
    }
  },
  methods: {
    guiHoSo () {
      var vm = this
      vm.$root.$confirm.open('Thông báo', 'Bạn chắc chắn muốn thực hiện thao tác này?', { color: 'blue darken-4' }).then((confirm) => {
        // let promise = vm.$store.dispatch('submitDossier')
        // promise.then(function (result) {
        //   vm.$store.dispatch('showMessageToastr', ['success', 'Gửi hồ sơ thành công'])
        // })
        let dataPostAction = {
          dossierId: vm.thongTinChungHoSo.dossierId,
          actionCode: 10000
        }
        vm.$store.dispatch('postAction', dataPostAction).then(function (result) {
          vm.$store.dispatch('showMessageToastr', ['success', 'Lưu thành công'])
        })
      }).catch(function (xhr) {
        console.log('kkk')
      })
    },
    hoanThanhVaThemMoi () {
      var vm = this
      let index = vm.$store.getters.index
      router.push('/danh-sach-ho-so/' + index + '/tiep-nhan-ho-so')
    },
    hoanThanh () {
      router.push('/danh-sach-ho-so/0')
    }
  }
}
</script>
