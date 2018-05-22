<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">III. THÔNG TIN NGƯỜI NỘP HỒ SƠ</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Họ và tên: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">CMND/Hộ chiếu: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">CMND/Hộ chiếu: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Số điện thoại: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  name="lePhi.totalMoney"
                  append-icon="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Tỉnh/Thành phố: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-select
                  :items="states"
                  v-model="a1"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Quận/Huyện: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-select
                  :items="states"
                  v-model="a1"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Xã/Phường: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-select
                  :items="states"
                  v-model="a1"
                  autocomplete
                ></v-select>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div class="absolute__btn" style="width: 150px;margin-top: 4px;">
      <v-checkbox
        label="Giống chủ hồ sơ"
        v-model="thongTinNguoiNopHoSo.sameUser"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thongTinNguoiNopHoSo () {
      return this.$store.getters.thongTinNguoiNopHoSo
    }
  },
  methods: {}
}
</script>
