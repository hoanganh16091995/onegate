<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">IV. THÀNH PHẦN HỒ SƠ &nbsp;&nbsp;&nbsp;&nbsp; <i><span style="color: red">(*)</span> Những thành phần bắt buộc</i></div>
        <v-card v-if="dossierTemplates.length !== 0">
          <div style="position: relative;" v-for="(item, index) in dossierTemplates" v-bind:key="item.partNo">
            <v-expansion-panel class="expaned__list__data">
              <v-expansion-panel-content hide-actions :value="false">
                <div slot="header" @click="loadAlpcaForm(item)"> {{ (index + 1) + ' . ' + item.partName }} <span v-if="item.required" style="color: red">(*)</span></div>
                <v-card>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex xs12 class="text-xs-right">
                        <div :id="'formAlpaca'+item.partNo">
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <div class="absolute__btn group__thanh_phan">
              <content-placeholders class="mt-1" v-if="loading">
                <content-placeholders-text :lines="1" />
              </content-placeholders>
              <v-layout row wrap class="flex__checkbox">
                <v-flex style="width: 300px;" class="layout wrap">
                  <v-checkbox class="flex" v-model="thanhPhanHoSo.dossierTemplates[index].fileCheck"></v-checkbox>
                  <v-radio-group v-model="thanhPhanHoSo.dossierTemplates[index].fileType" row class="flex__checkbox" @change="postDossierMark(thanhPhanHoSo.dossierTemplates[index])" :disabled="!thanhPhanHoSo.dossierTemplates[index].fileCheck">
                    <v-radio value="2"></v-radio>
                    <v-radio value="0"></v-radio>
                    <v-radio value="1"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex style="width: 150px;" class="text-right">
                  <v-btn icon class="mt-0 ml-0 mr-2">
                    <v-badge left>
                      <span slot="badge" @click="viewFile(item)">{{item.count}}</span>
                      <input
                      type="file"
                      style="display: none"
                      :id="'file' + item.partNo"
                      @change="onUploadSingleFile($event,item)"
                      >
                      <v-icon size="20" color="primary" @click="pickFile(item)">attach_file</v-icon>
                    </v-badge>
                  </v-btn>
                  <v-btn flat class="mt-0 mx-0" @click="deleteAttackFiles(item)">
                    <v-icon size="20">delete</v-icon>
                    Xoá
                  </v-btn>
                </v-flex>
              </v-layout>
            </div>
          </div>
          
          <v-card-text>
            <v-layout wrap>

              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0 text-right">Ghi chú: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  v-model="thanhPhanHoSo.ghiChuThanhPhan"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
              
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  data: () => ({
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thanhPhanHoSo () {
      return this.$store.getters.thanhPhanHoSo
    },
    dossierTemplates () {
      return this.$store.getters.dossierTemplates
    },
    dossierFiles () {
      return this.$store.getters.dossierFiles
    }
  },
  methods: {
    deleteAttackFiles (item) {
      var vm = this
      vm.$store.dispatch('deleteAttackFiles', item).then(function (result) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Delete thành công!'])
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Delete không thành công!'])
      })
    },
    pickFile (item) {
      document.getElementById('file' + item.partNo).click()
    },
    onUploadSingleFile (e, data) {
      var vm = this
      e.dataItem = data
      vm.$store.dispatch('uploadSingleFile', e).then(function (result) {
        vm.$store.dispatch('showMessageToastr', ['success', 'Upload thành công!'])
        e.count ++
      }).catch(function (xhr) {
        vm.$store.dispatch('showMessageToastr', ['error', 'Upload không thành công!'])
      })
    },
    loadAlpcaForm (data) {
      this.$store.dispatch('loadAlpcaForm', data)
    },
    postDossierMark (data) {
      this.$store.dispatch('postDossierMark', data)
    },
    viewFile (data) {
      this.$store.dispatch('viewFile', data)
    }
  }
}
</script>
