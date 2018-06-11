<template>
  <div>
    <content-placeholders class="mt-3" v-if="loading">
      <content-placeholders-text :lines="1" />
    </content-placeholders>
    <div v-else class="row-header" style="margin-top: 6px;">
      <div class="background-triangle-big"> TRẢ KẾT QUẢ THỤ LÝ HỒ SƠ </div> 
      <div class="layout row wrap header_tools row-blue">
        <div class="flex text-right" style="margin-left: auto;">
          <v-btn flat class="my-0 mx-0 btn-border-left" @click="moveRelease">
            <v-icon size="16">send</v-icon>
            Trả kết quả
          </v-btn>
        </div>
      </div>
    </div>
    <div class="list-traketqua">
      <div class="px-2 py-2 text-bold" style="background-color: #e1f5fe;">Giấy tờ nộp vào là bản gốc</div>
      <v-list class="py-0">
        <v-list-tile v-for="(item, index) in mainItems" :key="item" style="height: auto;">
          <v-list-tile-content style="font-size: 14px;">
            <v-list-tile-title style="display: flex;align-items: center;height: auto;white-space:normal">
              <span class="text-bold mr-2">{{index + 1}}.</span>
              <span>{{item.text}}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
    <div>
      <div class="px-2 py-2 text-bold" style="background-color: #e1f5fe;">Giấy tờ trả kết quả</div>
      <v-list class="py-0">
        <v-list-tile class="py-1" v-for="(item, index) in mainItems2" :key="item" style="height: auto;">
          <v-list-tile-content style="font-size: 14px;">
            <v-list-tile-title style="display: flex;align-items: center;height: auto;white-space:normal">
              <span class="text-bold mr-2">{{index + 1}}.</span>
              <span>{{item.text}}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  props: ['index', 'id'],
  data: () => ({
    validTNHS: false,
    mainItems: [
      {'value': true, 'text': 'Hồ sơ '},
      {'value': true, 'text': 'Hồ sơ 1'}
    ],
    mainItems2: [
      {'value': true, 'text': 'Hồ sơ '},
      {'value': true, 'text': 'Hồ sơ 1'}
    ]
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
      console.log(router)
    })
  },
  methods: {
    moveRelease () {
      var vm = this
      vm.$root.$confirm.open('Thông báo', 'Bạn chắc chắn muốn thực hiện thao tác này?', { color: 'blue darken-4' }).then((confirm) => {
        console.log('run')
      }).catch(function (xhr) {})
    }
  }
}
</script>

