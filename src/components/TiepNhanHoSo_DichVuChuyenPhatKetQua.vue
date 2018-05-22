<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">VI. DỊCH VỤ CHUYỂN PHÁT KẾT QUẢ</div>
        <v-card>
          <v-card-text>
            
            <v-slide-y-transition>
              <span v-if="!dichVuChuyenPhatKetQua.homeRegister">
                <v-icon size="16">check_circle</v-icon> <strong>Đăng ký kết quả tại nhà</strong> để điền thông tin chuyển phát tận nhà
              </span>
              <v-layout v-else wrap>
                <v-flex xs12 sm2>
                  <v-subheader class="pl-0">Dịch vụ đăng ký: </v-subheader>
                </v-flex>
                <v-flex class="pr-4">
                  <v-select
                    :items="states"
                    v-model="a1"
                    autocomplete
                  ></v-select>
                </v-flex>
                <v-flex>
                  <v-select
                    :items="states"
                    v-model="a1"
                    autocomplete
                  ></v-select>
                </v-flex>
                <v-flex xs12>

                </v-flex>
                <v-flex xs12 sm2>
                  <v-subheader class="pl-0">SĐT người nhận: </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-text-field
                    name="lePhi.totalMoney"
                    append-icon="phone"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>

                </v-flex>
                <v-flex xs12 sm2>
                  <v-subheader class="pl-0">Địa chỉ trả kết quả: </v-subheader>
                </v-flex>
                <v-flex xs12 sm10>
                  <v-text-field
                    name="lePhi.totalMoney"
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
              </v-layout>
            </v-slide-y-transition>
            
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div class="absolute__btn" style="width: 195px;margin-top: 4px;">
      <v-checkbox
        label="Đăng ký kết quả tại nhà"
        v-model="dichVuChuyenPhatKetQua.homeRegister"
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
    dichVuChuyenPhatKetQua () {
      return this.$store.getters.dichVuChuyenPhatKetQua
    }
  },
  methods: {}
}
</script>
