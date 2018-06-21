<template>
  <div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> TRẢ KẾT QUẢ THỤ LÝ HỒ SƠ </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="moveRelease">
            <v-icon size="16">send</v-icon>
            Trả kết quả
          </v-btn>
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="redirectBack">
            <v-icon size="16">undo</v-icon>
            Quay lại
          </v-btn>
        </div>
      </div>
    </div>
    <div>
      <v-expansion-panel expand class="my-0 expansion-pl-transparent" style="border: none">
        <v-expansion-panel-content v-bind:value="true">
          <div slot="header" class="text-bold">
            <div class="background-triangle-small"> I.</div>
            Giấy tờ nộp vào là bản gốc
          </div>
          <div v-for="(item, index) in mainItems" v-bind:key="item.partNo">
            <v-card>
              <v-layout wrap class="px-3 py-1 align-center row-list-style" style="border-bottom: 1px solid #ddd"> 
                <v-flex xs12>
                  <span class="text-bold" style="position: absolute;">{{index + 1}}.</span> 
                  <div style="margin-left: 30px;">{{item.partName}}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </div>
    <div>
      <v-expansion-panel expand class="my-0 expansion-pl-transparent" style="border: none">
        <v-expansion-panel-content v-bind:value="true">
          <div slot="header" class="text-bold">
            <div class="background-triangle-small"> II.</div>
            Giấy tờ trả kết quả
          </div>
          <div v-for="(item, index) in mainItems2" v-bind:key="item.partNo">
            <v-card>
              <v-layout wrap class="px-3 py-1 align-center row-list-style" style="border-bottom: 1px solid #ddd"> 
                <v-flex xs12>
                  <span class="text-bold" style="position: absolute;">{{index + 1}}.</span> 
                  <div style="margin-left: 30px;">{{item.partName}}</div>
                </v-flex>
              </v-layout>
            </v-card>
            
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  props: ['index', 'id'],
  data: () => ({
    validTNHS: false,
    mainItems: [],
    mainItems2: []
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thongTinChungHoSo () {
      return this.$store.getters.thongTinChungHoSo
    }
  },
  mounted () {
    var vm = this
    vm.$nextTick(function () {
      console.log('thongTinChungHoSo-RE====================', vm.$store.getters.thongTinChungHoSo)
      setTimeout(function () {
        vm.$store.dispatch('loadAllDossierTemplates', vm.$store.getters.thongTinChungHoSo).then(function (result) {
          console.log('dossierTemplatesResult============', result)
          var mainItemsTemplatePart = result.filter((val, index) => {
            return val.partType === 1
          })
          vm.mainItems = mainItemsTemplatePart
          var mainItems2TemplatePart = result.filter((val, index) => {
            return val.partType === 2
          })
          vm.mainItems2 = mainItems2TemplatePart
          console.log('mainItemsTemplatePart===========', mainItemsTemplatePart)
          console.log('mainItems2TemplatePart===========', mainItems2TemplatePart)
        }).catch(function (xhr) {
          console.log(xhr)
        })
      }, 300)
    })
  },
  methods: {
    moveRelease () {
      var vm = this
      vm.$root.$confirm.open('Thông báo', 'Bạn chắc chắn muốn thực hiện thao tác này?', { color: 'blue darken-4' }).then((confirm) => {
        console.log('run')
        vm.$store.dispatch('getCpsAuthen').then(resultAuthen => {
          let param = {
            dossierId: vm.thongTinChungHoSo.dossierId,
            actionCode: 30000,
            cps_auth: resultAuthen
          }
          vm.$store.dispatch('postAction', param).then(function (result) {
            vm.$store.dispatch('showMessageToastr', ['success', 'Chuyển thành công'])
            router.push('/danh-sach-ho-so/3')
          })
        }).catch(reject => {

        })
      }).catch(function (xhr) {})
    },
    redirectBack () {
      window.history.back()
    }
  }
}
</script>
