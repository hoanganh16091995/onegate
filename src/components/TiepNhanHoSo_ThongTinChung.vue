<template>
  <div style="position: relative;">
    <v-form v-model="thongTinChungHoSo.valid" ref="formThongtinchung" lazy-validation>
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
                    :items="serviceInfoItems"
                    item-text="serviceName"
                    item-value="serviceCode"
                    v-model="thongTinChungHoSo.serviceInfo"
                    autocomplete
                    @change = "changeServiceInfo"
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
                    :items="serviceConfigItems"
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
                  <v-subheader v-else class="pl-0" >
                    Mã tiếp nhận * : 
                  </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-text-field
                    v-else
                    name="thongTinChungHoSo.dossierNo"
                    multi-line
                    rows="2"
                    :rules="[v => !!v || 'Trường dữ liệu bắt buộc']"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Thời gian giải quyết: </v-subheader>
                </v-flex>
                <v-flex xs12 sm4 style="padding-top: 6px">
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <p v-else><i> {{thongTinChungHoSo.dueDate}} ngày làm việc</i> </p>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Ngày giờ tiếp nhận * : </v-subheader>
                </v-flex>
                <v-flex xs12 sm4 style="padding-top: 6px">
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <p><i>{{thongTinChungHoSo.startDateTime}}</i></p>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Ngày hẹn trả * : </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-3" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                    <v-menu style="display: inline-block;width: 69%"
                    lazy
                    :close-on-content-click = "true"
                    v-model = "thongTinChungHoSo.dateStartMenu"
                    transition = "scale-transition"
                    offset-y
                    full-width
                    :nudge-top = "40"
                    max-width = "290px"
                    >
                      <v-text-field
                        slot="activator"
                        placeholder="dd/mm/yyyy"
                        v-model="thongTinChungHoSo.dateStart"
                        @blur="thongTinChungHoSo.dateStartMd = parseDate(thongTinChungHoSo.dateStart)"
                        :rules="[v => !!v || 'Trường dữ liệu bắt buộc!']"
                        required
                      ></v-text-field>
                      <v-date-picker v-model="thongTinChungHoSo.dateStartMd" :first-day-of-week="1" @change="changeDate" @input="thongTinChungHoSo.dateStart = formatDate($event)" autosave locale="vi">
                      </v-date-picker>
                    </v-menu>

                    <v-menu style="display: inline-block; width: 30%"
                    ref="menuTimestart"
                    lazy
                    :close-on-content-click="false"
                    v-model="thongTinChungHoSo.timeStartMenu"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"

                    :return-value.sync="thongTinChungHoSo.timeStart"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="thongTinChungHoSo.timeStart"
                        placeholder="hh:mm"
                        readonly
                        :rules="[v => !!v || 'Trường dữ liệu bắt buộc!']"
                        required
                      ></v-text-field>
                      <v-time-picker v-model="thongTinChungHoSo.timeStart" format="24hr" @change="$refs.menuTimestart.save(thongTinChungHoSo.timeStart)"></v-time-picker>
                    </v-menu>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-form>

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
      this.$store.getters.thongTinChungHoSo.startDateTime = this.getCurentDateTime()
      return this.$store.getters.thongTinChungHoSo
    },
    serviceInfoItems () {
      return this.$store.getters.serviceInfoItems
    },
    serviceConfigItems () {
      return this.$store.getters.serviceConfigItems
    }
  },
  methods: {
    changeServiceInfo () {
      console.log('Run change')
      console.log(this.thongTinChungHoSo)
    },
    changeDate () {
      console.log('Run change Date')
      this.thongTinChungHoSo.dueDate = this.getDuedate()
    },
    getCurentDateTime () {
      let date = new Date()
      return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`
    },
    getDuedate () {
      let dueDateMs = (new Date(this.thongTinChungHoSo.dateStartMd).getTime() - new Date().getTime())
      return Math.round(dueDateMs / 1000 / 60 / 60 / 24)
    },
    parseDate (date) {
      if (!date) {
        return null
      }
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDate (date) {
      if (!date) {
        return null
      }
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    validateThongtinchung () {
      this.thongTinChungHoSo.valid = this.$refs.formThongtinchung.validate()
      return this.thongTinChungHoSo.valid
    }
  }
}
</script>