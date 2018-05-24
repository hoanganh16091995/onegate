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
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Thủ tục: </v-subheader>
                </v-flex>
                <v-flex xs12 sm10>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <!-- <v-select
                    v-else
                    :items="serviceInfoItems"
                    item-text="serviceName"
                    item-value="serviceCode"
                    v-model="thongTinChungHoSo.serviceInfo"
                    autocomplete
                    @change = "changeServiceInfo"
                  ></v-select> -->
                  <v-subheader style="float:left;height: 100%"><i>{{thongTinChungHoSo.serviceInfo}}</i></v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Dịch vụ: </v-subheader>
                </v-flex>
                <v-flex xs12 sm10>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <!-- <v-select
                    v-else
                    :items="serviceConfigItems"
                    item-text="serviceName"
                    item-value="serviceConfigId"
                    v-model="thongTinChungHoSo.serviceConfig"
                    autocomplete
                  ></v-select> -->
                  <v-subheader v-else style="float:left;height: 100%"><i>{{thongTinChungHoSo.serviceOption}}</i></v-subheader>
                </v-flex>
                <v-flex xs12></v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0" >
                    Mã tiếp nhận * : 
                  </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <!-- <v-text-field
                    v-else
                    name="thongTinChungHoSo.dossierNo"
                    rows="2"
                    :rules="[v => !!v || 'Trường dữ liệu bắt buộc']"
                    required
                  ></v-text-field> -->
                  <v-subheader v-else style="float:left"><i>{{thongTinChungHoSo.dossierNo}}</i></v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Thời gian giải quyết: </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else style="float:left"><i>{{thongTinChungHoSo.dueDate}} ngày làm việc</i></v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Ngày giờ tiếp nhận * : </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else style="float:left"><i>{{thongTinChungHoSo.startDateTime}}</i></v-subheader>
                </v-flex>
                <v-flex xs12 sm2>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-subheader v-else class="pl-0">Ngày hẹn trả * : </v-subheader>
                </v-flex>
                <v-flex xs12 sm4>
                  <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                  <v-flex v-else>
                    <v-menu style="display: inline-block;width: 69%"
                    lazy
                    :close-on-content-click = "true"
                    transition = "scale-transition"
                    offset-y
                    full-width
                    :nudge-top = "40"
                    max-width = "290px"
                    >
                      <v-text-field
                        slot="activator"
                        placeholder="dd/mm/yyyy"
                        v-model="thongTinChungHoSo.dateEnd"
                        @blur="thongTinChungHoSo.dateEndMd = parseDate(thongTinChungHoSo.dateEnd)"
                        :rules="[v => !!v || 'Trường dữ liệu bắt buộc!']"
                        required
                      ></v-text-field>
                      <v-date-picker :min="minDate" ref="datepicker" v-model="thongTinChungHoSo.dateEndMd" :first-day-of-week="1" @change="changeDate" @input="thongTinChungHoSo.dateEnd = formatDate($event)" autosave locale="vi">
                      </v-date-picker>
                    </v-menu>
                  
                    <v-menu style="display: inline-block; width: 30%"
                    ref="menuTimeEnd"
                    lazy
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    :return-value.sync="thongTinChungHoSo.timeEndText"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="thongTinChungHoSo.timeEndText"
                        placeholder="hh:mm"
                        readonly
                      ></v-text-field>
                      <v-time-picker v-model="thongTinChungHoSo.timeEnd" format="24hr" @change="$refs.menuTimeEnd.save(thongTinChungHoSo.timeEnd)"></v-time-picker>
                    </v-menu>
                  </v-flex>
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
    data: () => ({
      minDate: null
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      thongTinChungHoSo () {
        let date = new Date()
        this.$store.getters.thongTinChungHoSo.startDateTime = this.getCurentDateTime('datetime')
        this.$store.getters.thongTinChungHoSo.dateEndMd = this.getCurentDateTime('date')
        this.$store.getters.thongTinChungHoSo.dateEnd = this.parseCurrentDate(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())
        this.$store.getters.thongTinChungHoSo.timeEndText = this.parseCurrentTime(date.getHours() + ':' + date.getMinutes())
        this.$store.getters.thongTinChungHoSo.dueDate = 1
        this.minDate = this.getCurentDateTime('date')
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
      changeDate () {
        this.thongTinChungHoSo.dueDate = this.getDuedate()
        console.log(this.thongTinChungHoSo)
      },
      getCurentDateTime (type) {
        let date = new Date()
        if (type === 'datetime') {
          return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} | ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
        } else if (type === 'date') {
          return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`
        }
      },
      getDuedate () {
        let dueDateMs = (new Date(this.thongTinChungHoSo.dateEndMd).getTime() - new Date().getTime())
        if (Math.ceil(dueDateMs / 1000 / 60 / 60 / 24) === 0) {
          return 1
        }
        return Math.ceil(dueDateMs / 1000 / 60 / 60 / 24)
      },
      parseDate (date) {
        if (!date) {
          return null
        }
        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      parseCurrentDate (date) {
        if (!date) {
          return null
        }
        const [day, month, year] = date.split('/')
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      },
      parseCurrentTime (time) {
        if (!time) {
          return null
        }
        const [hh, mm] = time.split(':')
        return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}`
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
