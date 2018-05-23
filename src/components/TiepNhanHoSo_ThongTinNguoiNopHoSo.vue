<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">III. THÔNG TIN NGƯỜI NỘP HỒ SƠ</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Tên tổ chức cá nhân: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="delegateApplicantName"
                  v-model="thongTinNguoiNopHoSo.delegateApplicantName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Địa chỉ: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="delegateAddress"
                  v-model="thongTinNguoiNopHoSo.delegateAddress"
                  multi-line
                  rows="2"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Tỉnh/Thành phố: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-select
                  v-else
                  :items="delegateCitys"
                  item-text="itemName"
                  item-value="itemCode"
                  @change="onChangeDelegateCity"
                  v-model="thongTinNguoiNopHoSo.delegateCity"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Quận/Huyện: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-select
                  v-else
                  :items="delegateDistricts"
                  item-text="itemName"
                  item-value="itemCode"
                  @change="onChangeDelegateDistrict"
                  v-model="thongTinNguoiNopHoSo.delegateDistrict"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Xã/Phường: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-select
                  v-else
                  :items="delegateWards"
                  item-text="itemName"
                  item-value="itemCode"
                  v-model="thongTinNguoiNopHoSo.delegateWard"
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Số điện thoại: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="delegateContactTelNo"
                  v-model="thongTinNguoiNopHoSo.delegateContactTelNo"
                  append-icon="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">Email: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="delegateContactEmail"
                  v-model="thongTinNguoiNopHoSo.delegateContactEmail"
                  append-icon="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-subheader v-else class="pl-0">CMND/Hộ chiếu: </v-subheader>
              </v-flex>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  name="delegateApplicantIdNo"
                  v-model="thongTinNguoiNopHoSo.delegateApplicantIdNo"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div class="absolute__btn" style="width: 150px;margin-top: 4px;">
      <content-placeholders class="mt-1" v-if="loading">
        <content-placeholders-text :lines="1" />
      </content-placeholders>
      <v-checkbox
        v-else
        label="Giống chủ hồ sơ"
        v-model="thongTinNguoiNopHoSo.sameUser"
        @change="sameUser"
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
    },
    delegateCitys () {
      return this.$store.getters.delegateCitys
    },
    delegateDistricts () {
      return this.$store.getters.delegateDistricts
    },
    delegateWards () {
      return this.$store.getters.delegateWards
    }
  },
  methods: {
    sameUser () {
      var thongTinChuHoSo = this.$store.getters.thongTinChuHoSo
      if (this.thongTinNguoiNopHoSo.sameUser) {
        console.log(thongTinChuHoSo)
        let data = {
          sameUser: true,
          delegateApplicantName: thongTinChuHoSo.applicantName,
          delegateAddress: thongTinChuHoSo.address,
          delegateCity: thongTinChuHoSo.city,
          delegateDistrict: thongTinChuHoSo.district,
          delegateWard: thongTinChuHoSo.ward,
          delegateApplicantIdNo: thongTinChuHoSo.applicantIdNo,
          delegateContactEmail: thongTinChuHoSo.contactEmail,
          delegateContactTelNo: thongTinChuHoSo.contactTelNo
        }
        this.$store.commit('setThongTinNguoiNopHoSo', data)
      } else {
        this.$store.dispatch('resetThongTinNguoiNopHoSo')
      }
    },
    onChangeDelegateCity (data) {
      this.$store.dispatch('loadDelegateDistricts', data)
    },
    onChangeDelegateDistrict (data) {
      this.$store.dispatch('loadDelegateWards', data)
    }
  }
}
</script>
