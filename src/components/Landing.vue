<template>
  <div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> <span v-if="trangThaiHoSoList">{{trangThaiHoSoList[index].title}}</span> </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex solo text-ellipsis">
          <v-text-field
            name="keywords"
            placeholder="Keywords: search for projects"
            prepend-icon="search"
            solo
          ></v-text-field>
        </div> 
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left">
            <v-icon size="16">send</v-icon>
            Chuyển hồ sơ vào xử lý
          </v-btn>
          <v-btn flat class="my-0 mx-0">
            <v-icon size="16">delete</v-icon>
            Xóa
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data: () => ({}),
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    trangThaiHoSoList () {
      return this.$store.getters.loadtrangThaiHoSoList
    }
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
      vm.$store.dispatch('setCurrentIndex', vm.index)
    })
  },
  methods: {}
}
</script>
