<template>
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
                  name="applicantIdNo"
                  v-model="thongTinChuHoSo.applicantIdNo"
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
                  name="applicantName"
                  v-model="thongTinChuHoSo.applicantName"
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
                  name="address"
                  v-model="thongTinChuHoSo.address"
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
                 v-model="thongTinChuHoSo.city"
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
                  v-model="thongTinChuHoSo.district"
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
                  v-model="thongTinChuHoSo.ward"
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
                  name="contactTelNo"
                  v-model="thongTinChuHoSo.contactTelNo"
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
                  name="contactEmail"
                  v-model="thongTinChuHoSo.contactEmail"
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
    citys () {
      return this.$store.getters.citys
    },
    districtsArr () {
      return this.$store.getters.districts
    },
    wardsArr () {
      return this.$store.getters.wards
    }
  },
  watch: {
    districtsArr (value) {
      this.districts = value
    },
    wardsArr (value) {
      this.wards = value
    },
    thongTinChuHoSo (value) {
      console.log(value)
    }
  },
  methods: {
    onChangeCity (data) {
      this.$store.dispatch('loadDistricts', data)
      setTimeout(function () {
        console.log(this.districtsArr)
        console.log(this.districts)
      }, 100)
    },
    onChangeDistrict (data) {
      this.$store.dispatch('loadWards', data)
    }
  }
}
</script>
