<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">II. THÔNG TIN CHỦ HỒ SƠ</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Tên tổ chức cá nhân: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Người đại diện: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12></v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Địa chỉ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <v-text-field
                  name="lePhi.ghiChuMoney"
                  multi-line
                  rows="2"
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
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Số điện thoại: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-text-field
                  name="lePhi.totalMoney"
                  append-icon="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Địa chỉ E-mail: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">CMND/Hộ chiếu: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <v-text-field
                  name="lePhi.totalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0">Ghi chú: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <v-text-field
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
    <div class="absolute__btn" style="width: 270px;margin-top: 4px;">
      <v-radio-group v-model="thongTinChuHoSo.userType" row>
        <v-radio label="Công Dân" value="cong_dan" ></v-radio>
        <v-radio label="Doanh Nghiệp" value="doanh_nghiep"></v-radio>
      </v-radio-group>
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
    thongTinChuHoSo () {
      return this.$store.getters.thongTinChuHoSo
    }
  },
  methods: {}
}
</script>
