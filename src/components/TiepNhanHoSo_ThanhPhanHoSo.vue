<template>
  <div style="position: relative;">
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="1">
        <div slot="header">IV. THÀNH PHẦN HỒ SƠ</div>
        <v-card>
          <v-card-text>
            sdfs
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {}
}
</script>
