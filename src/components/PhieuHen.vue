<template>
  <div>
    <div class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> PHIẾU HẸN </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex solo text-ellipsis">
          
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" :to="'/danh-sach-ho-so/' + index + '/tiep-nhan-ho-so'" active-class="temp_active">
            Quay lại &nbsp;
            <v-icon size="16">undo</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <content-placeholders class="mt-3" v-show="loading">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
    <div v-show="!loading" id="pdfViewer">

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
      <v-btn outline color="primary" :to="'/danh-sach-ho-so/' + index + '/tiep-nhan-ho-so'" active-class="temp_active">
        Quay lại &nbsp;
        <v-icon>undo</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// import router from '@/router'
import ThongTinChung from './TiepNhanHoSo_ThongTinChung.vue'
import ThongTinChuHoSo from './TiepNhanHoSo_ThongTinChuHoSo.vue'
import ThongTinNguoiNopHoSo from './TiepNhanHoSo_ThongTinNguoiNopHoSo.vue'
import ThanhPhanHoSo from './TiepNhanHoSo_ThanhPhanHoSo.vue'
import LePhi from './TiepNhanHoSo_LePhi.vue'
import DichVuChuyenPhatKetQua from './TiepNhanHoSo_DichVuChuyenPhatKetQua.vue'

export default {
  props: ['index'],
  components: {
    'thong-tin-chung': ThongTinChung,
    'thong-tin-chu-ho-so': ThongTinChuHoSo,
    'thong-tin-nguoi-nop-ho-so': ThongTinNguoiNopHoSo,
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
    }
  },
  methods: {
    guiHoSo () {
    },
    hoanThanhVaThemMoi () {
    },
    hoanThanh () {
    }
  }
}
</script>
