<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">I. THÔNG TIN CHUNG</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Thủ tục: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-select
                  v-else
                  :items="serviceInfos"
                  item-text="serviceName"
                  item-value="serviceCode"
                  v-model="thongTinChungHoSo.serviceInfo"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Dịch vụ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-select
                  v-else
                  :items="serviceConfigs"
                  item-text="serviceName"
                  item-value="serviceConfigId"
                  v-model="thongTinChungHoSo.serviceConfig"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12></v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Mã tiếp nhận: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="lePhi.ghiChuMoney"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Thời gian giải quyết: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="lePhi.ghiChuMoney"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Ngày giờ tiếp nhận: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="lePhi.ghiChuMoney"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Ngày hen trả: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-3" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="lePhi.ghiChuMoney"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-btn flat class="absolute__btn">
      <v-icon size="16">file_copy</v-icon>
      Hướng dẫn
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thongTinChungHoSo () {
      return this.$store.getters.thongTinChungHoSo
    },
    serviceInfos () {
      return this.$store.getters.serviceInfos
    },
    serviceConfigs () {
      return this.$store.getters.serviceConfigs
    }
  },
  methods: {}
}
</script>
