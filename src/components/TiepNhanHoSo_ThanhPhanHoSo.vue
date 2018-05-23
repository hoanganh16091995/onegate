<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">IV. THÀNH PHẦN HỒ SƠ</div>
        <v-card>

          <div style="position: relative;">
            <v-expansion-panel class="expaned__list__data">
              <v-expansion-panel-content hide-actions value="1">
                <div slot="header">1. Đơn đề nghị cấp giấy phép</div>
                <v-card>
                  <v-card-text>
                    <v-layout wrap>

                      <v-flex xs12>
                        
                      </v-flex>

                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <div class="absolute__btn group__thanh_phan" style="width: 530px;">
              <content-placeholders class="mt-1" v-if="loading">
                <content-placeholders-text :lines="1" />
              </content-placeholders>
              <v-layout row wrap class="flex__checkbox">
                <v-flex xs7 class="layout wrap">
                  <v-checkbox class="flex" v-model="thanhPhanHoSo.fileTypes" value="John"></v-checkbox>
                  <v-checkbox class="flex" v-model="thanhPhanHoSo.fileTypes" value="John"></v-checkbox>
                  <v-checkbox class="flex" v-model="thanhPhanHoSo.fileTypes" value="John"></v-checkbox>
                </v-flex>
                <v-flex xs5 class="text-right">
                  <v-btn icon class="mt-0 ml-0 mr-2">
                    <v-badge left>
                      <span slot="badge">6</span>
                      <v-icon size="20" color="primary">attach_file</v-icon>
                    </v-badge>
                  </v-btn>
                  <v-btn flat class="mt-0 mx-0">
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
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thanhPhanHoSo () {
      return {}
    }
  },
  methods: {}
}
</script>
