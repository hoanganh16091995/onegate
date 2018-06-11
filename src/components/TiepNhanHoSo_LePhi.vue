<template>
  <div style="position: relative;">
    <v-expansion-panel class="expansion-pl">
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header"><div class="background-triangle-small"> V. </div>LỆ PHÍ</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <content-placeholders class="mt-1" v-if="loading">
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                <v-subheader v-else class="pl-0 text-right">Tổng tiền: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <content-placeholders class="mt-1" v-if="loading">
                  <content-placeholders-text :lines="1" />
                </content-placeholders>
                <v-text-field
                  v-else
                  v-model="lePhi.fee"
                  v-on:keyup.native="clearTotalMoney"
                ></v-text-field>
                <!-- <v-text-field
                  v-else
                  @blur="toCurrency= false"
                  @focus="toCurrency = true"
                >{{amount|currency}}</v-text-field> -->
              </v-flex>
              <v-flex xs12 sm6 class="hidden-xs-and-down">Hạn mức :{{lePhi.request}} đ</v-flex>
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
                  :value="dossier.feeNote"
                  v-model="lePhi.feeNote"
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
// import * as utils from '../store/onegate_utils'
export default {
  data: () => ({
    rules: {
      number: (value) => {
        const pattern = /^\d+$/
        return pattern.test(value) || 'Sai định dạng kiểu dữ liệu số.'
      }
    },
    toCurrency: '',
    amount: 10000
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    lePhi () {
      return this.$store.getters.lePhi
    },
    dossier () {
      return this.$store.getters.dossier
    }
  },
  methods: {
    clearTotalMoney () {
      if (this.lePhi.fee === '') {
        this.lePhi.fee = 0
      } else {
        this.lePhi.fee = parseInt(this.lePhi.fee)
        console.log(this.lePhi.fee)
      }
    }
  }
  // filters: {
  //   currency (val) {
  //     var vm = this
  //     if (vm.toCurrency) {
  //       return utils.currency(val)
  //     }
  //     return val
  //   }
  // }
}
</script>
