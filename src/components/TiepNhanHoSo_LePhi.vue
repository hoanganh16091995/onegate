<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">V. LỆ PHÍ</div>
        <v-card>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0 text-right">Tổng tiền: </v-subheader>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field
                  v-model="lePhi.totalMoney"
                  :rules="[rules.number]"
                  v-on:keyup.native="clearTotalMoney"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 class="hidden-xs-and-down"></v-flex>
              <v-flex xs12 sm2>
                <v-subheader class="pl-0 text-right">Ghi chú: </v-subheader>
              </v-flex>
              <v-flex xs12 sm10>
                <v-text-field
                  v-model="lePhi.ghiChuMoney"
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
export default {
  data: () => ({
    rules: {
      number: (value) => {
        const pattern = /^\d+$/
        return pattern.test(value) || 'Sai định dạng kiểu dữ liệu số.'
      }
    }
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    lePhi () {
      return this.$store.getters.lePhi
    }
  },
  methods: {
    clearTotalMoney () {
      if (this.lePhi.totalMoney === '') {
        this.lePhi.totalMoney = 0
      }
    }
  }
}
</script>
