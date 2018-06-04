<template>
  <div>
    <div style="position: relative;">
      <v-expansion-panel>
        <v-expansion-panel-content hide-actions value="1">
          <div slot="header">II. THÔNG TIN CHỦ HỒ SƠ</div>
          <v-card>
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0"> {{ labelSwitch[thongTinChuHoSo.userType].cmtnd }}: </v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  @change="onChangeApplicantIdNo"
                  v-model="labelSwitch['true'].thongTinUser.applicantIdNo"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0"> {{ labelSwitch[thongTinChuHoSo.userType].nguoi_nop }}: </v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  v-model="labelSwitch['true'].thongTinUser.applicantName"
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
                  v-model="labelSwitch['true'].thongTinUser.address"
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
                  :items="citys"
                  item-text="itemName"
                  item-value="itemCode"
                  v-model="labelSwitch['true'].thongTinUser.city"
                  @change="onChangeCity"
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
                  :items="districts"
                  item-text="itemName"
                  item-value="itemCode"
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.district"
                  @change="onChangeDistrict"
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
                  :items="wards"
                  item-text="itemName"
                  item-value="itemCode"
                  v-model="labelSwitch['true'].thongTinUser.ward"
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
                  v-model="labelSwitch['true'].thongTinUser.contactTelNo"
                  append-icon="phone"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Địa chỉ E-mail: </v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  v-model="labelSwitch['true'].thongTinUser.contactEmail"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <div class="absolute__btn" style="width: 270px;margin-top: 4px;">
        <content-placeholders class="mt-1" v-if="loading">
          <content-placeholders-text :lines="1" />
        </content-placeholders>
        <v-radio-group v-else v-model="thongTinChuHoSo.userType" row>
          <v-radio label="Công Dân" :value="true"></v-radio>
          <v-radio label="Doanh Nghiệp" :value="false"></v-radio>
        </v-radio-group>
      </div>
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
                  <v-subheader v-else class="pl-0">CMND/Hộ chiếu: </v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.applicantIdNo"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Tên tổ chức cá nhân: </v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.applicantName"
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
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.address"
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
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.city"
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
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.district"
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
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.ward"
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
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.contactTelNo"
                  append-icon="phone"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Email: </v-subheader>
                </v-flex>
                <v-flex xs12 sm6>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                  v-else
                  v-model="labelSwitch[thongTinNguoiNopHoSo.sameUser].thongTinUser.contactEmail"
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
        <!-- <v-checkbox
        v-else
        label="Giống chủ hồ sơ"
        v-model="thongTinNguoiNopHoSo.sameUser"
        ></v-checkbox> -->
        <v-checkbox
        v-else
        label="Giống chủ hồ sơ 2"
        v-model="sameUser2"
        ></v-checkbox>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data: () => ({
    districts: [],
    wards: [],
    labelSwitch: {
      'true': {
        cmtnd: 'CMND/ Hộ chiếu',
        nguoi_nop: 'Họ và tên',
        thongTinUser: {}
      },
      'false': {
        cmtnd: 'Mã số thuế',
        nguoi_nop: 'Tên tổ chức/ cá nhân',
        thongTinUser: {}
      }
    }
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    thongTinChuHoSo () {
      return this.$store.getters.thongTinChuHoSo
    },
    thongTinNguoiNopHoSo () {
      return this.$store.getters.thongTinNguoiNopHoSo
    },
    citys () {
      return this.$store.getters.citys
    },
    districtsArr () {
      return this.$store.getters.districts
    },
    wardsArr () {
      return this.$store.getters.wards
    },
    dossier () {
      return this.$store.getters.dossier
    },
    delegateCitys () {
      return this.$store.getters.delegateCitys
    },
    delegateDistricts () {
      return this.$store.getters.delegateDistricts
    },
    delegateWards () {
      return this.$store.getters.delegateWards
    },
    sameUser2 () {
      return this.$store.getters.sameUser2
    }
  },
  watch: {
    districtsArr (value) {
      this.districts = value
    },
    wardsArr (value) {
      this.wards = value
    },
    thongTinNguoiNopHoSo (value) {
      console.log(value)
      if (!value.sameUser) {
        this.labelSwitch['false'].thongTinUser = value
      } else {
        this.labelSwitch['true'].thongTinUser = this.thongTinChuHoSo
        this.labelSwitch['true'].thongTinUser['sameUser'] = true
      }
    },
    thongTinChuHoSo (value) {
      console.log(value)
      if (this.thongTinNguoiNopHoSo.sameUser) {
        this.labelSwitch['true'].thongTinUser = value
        this.labelSwitch['true'].thongTinUser['sameUser'] = true
      } else {
        this.labelSwitch['false'].thongTinUser = this.thongTinChuHoSo
      }
    }
  },
  methods: {
    onChangeCity (data) {
      this.$store.dispatch('loadDistricts', data)
      if (this.thongTinNguoiNopHoSo.sameUser) {
        this.$store.dispatch('loadDelegateDistricts', data)
      }
    },
    onChangeDistrict (data) {
      this.$store.dispatch('loadWards', data)
      if (this.thongTinNguoiNopHoSo.sameUser) {
        this.$store.dispatch('loadDelegateWards', data)
      }
    },
    onChangeApplicantIdNo (data) {
      this.$store.dispatch('getUserInfoFromApplicantIdNo', data)
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

