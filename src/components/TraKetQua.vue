<template>
  <v-form v-model="validTNHS" ref="formTiepNhanHoSo" lazy-validation>
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
    <div>
      
      <h1>11111111111111111111111111</h1>
    </div>
    <div class="text-center mt-2">
      <v-btn color="primary" v-on:click.native="tiepNhanHoSo" v-if="thongTinChungHoSo.dossierStatus === 'new'">
        Tiếp nhận &nbsp;
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn color="primary" v-on:click.native="boSungHoSo" v-if="thongTinChungHoSo.dossierStatus === 'waiting'">
        Bổ sung &nbsp;
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn color="primary" v-on:click.native="tiepNhanHoSo" v-if="thongTinChungHoSo.dossierStatus === 'releasing'" :to="'/danh-sach-ho-so/' + index">
        Trả kết quả &nbsp;
        <v-icon>send</v-icon>
      </v-btn>
      <v-btn color="primary" :to="'/danh-sach-ho-so/' + index + '/tra-ket-qua/' + thongTinChungHoSo.dossierId">
        Quay lại &nbsp;
        <v-icon>undo</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import router from '@/router'
export default {
  props: ['index', 'id'],
  data: () => ({
    validTNHS: false
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thongTinChungHoSo () {
      return this.$store.getters.thongTinChungHoSo
    }
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
      console.log(router)
    })
  },
  methods: {
  }
}
</script>
