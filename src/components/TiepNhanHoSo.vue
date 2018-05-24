<template>
  <div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> TIẾP NHẬN HỒ SƠ </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex solo text-ellipsis">
          
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" :to="'/danh-sach-ho-so/' + index" active-class="temp_active">
            Quay lại &nbsp;
            <v-icon size="16">undo</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <thong-tin-chung ref="thongtinchung"></thong-tin-chung>
    <thong-tin-chu-ho-so ref="thongtinchuhoso"></thong-tin-chu-ho-so>
    <!-- <thong-tin-nguoi-nop-ho-so ref="thongtinnguoinophoso"></thong-tin-nguoi-nop-ho-so> -->
    <thanh-phan-ho-so ref="thanhphanhoso"></thanh-phan-ho-so>
    <le-phi ref="lephi"></le-phi>
    <dich-vu-chuyen-phat-ket-qua ref="dichvuchuyenphatketqua"></dich-vu-chuyen-phat-ket-qua>
    <div class="text-center mt-2">
      <v-btn color="primary" v-on:click.native="tiepNhanHoSo">
        Tiếp nhận &nbsp;
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn color="primary" :to="'/danh-sach-ho-so/' + index">
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
/* import ThongTinNguoiNopHoSo from './TiepNhanHoSo_ThongTinNguoiNopHoSo.vue' */
import ThanhPhanHoSo from './TiepNhanHoSo_ThanhPhanHoSo.vue'
import LePhi from './TiepNhanHoSo_LePhi.vue'
import DichVuChuyenPhatKetQua from './TiepNhanHoSo_DichVuChuyenPhatKetQua.vue'

export default {
  props: ['index'],
  components: {
    'thong-tin-chung': ThongTinChung,
    'thong-tin-chu-ho-so': ThongTinChuHoSo,
    /* 'thong-tin-nguoi-nop-ho-so': ThongTinNguoiNopHoSo, */
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
    tiepNhanHoSo () {
      let thongtinchung = this.$refs.thongtinchung
      let thongtinchuhoso = this.$refs.thongtinchuhoso
      let thongtinnguoinophoso = this.$refs.thongtinnguoinophoso
      let thanhphanhoso = this.$refs.thanhphanhoso
      let lephi = this.$refs.lephi
      let dichvuchuyenphatketqua = this.$refs.dichvuchuyenphatketqua
      console.log(thongtinchung)
      console.log(thongtinchuhoso)
      console.log(thongtinnguoinophoso)
      console.log(thanhphanhoso)
      console.log(lephi)
      console.log(dichvuchuyenphatketqua)
      router.push('/danh-sach-ho-so/' + this.index + '/tiep-nhan-ho-so/phieu-hen')
    }
  }
}
</script>
