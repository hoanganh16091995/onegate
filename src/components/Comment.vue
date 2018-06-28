<template>
  <div class="comment-temp">
    <v-expansion-panel expand class="expansion-blue">
			<v-expansion-panel-content v-bind:value="expanded">
				<v-card class="comments__container">
					<v-card-text>
						<div id="comments-container-el"></div>
						<div v-if="hidden__text"><span class="see__more primary--text" @click="changeSeemoreStatus" v-if="less">Xem thêm</span></div>
						<div v-if="hidden__text"><span class="see__less primary--text" @click="changeSeemoreStatus" v-if="!less">Rút gọn</span></div>
					</v-card-text>
				</v-card>
			</v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import $ from 'jquery'
import 'jquery-textcomplete'
import '../store/jquery_comment'
export default {
  props: ['dossierId'],
  data: () => ({
    usersComment: [],
    comment: [],
    less: true,
    hidden__text: false,
    expanded: true
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {},
  created () {
    var vm = this
    vm.$nextTick(function () {
      vm.$store.dispatch('loadUsersComment', vm.dossierId).then(result => {
        vm.usersComment = result
        console.log('userComment', vm.usersComment)
      })
    })
  },
  mounted () {
    var vm = this
    $('#comments-container-el').comments({
      profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
      textareaRows: 1,
      enableAttachments: true,
      enableHashtags: true,
      enablePinging: true,
      postCommentOnEnter: false,
      forceResponsive: false,
      readOnly: false,
      textareaPlaceholderText: 'Thêm bình luận mới',
      newestText: 'Mới nhất',
      oldestText: 'Cũ nhất',
      popularText: 'Phổ biến',
      attachmentsText: 'Đính kèm',
      sendText: 'Gửi',
      replyText: 'Trả lời',
      editText: 'Sửa',
      editedText: 'Đã sửa',
      youText: 'Bạn',
      saveText: 'Ghi lại',
      deleteText: 'Xóa',
      viewAllRepliesText: 'Xem tất cả câu trả lời',
      hideRepliesText: 'Ẩn câu trả lời',
      noCommentsText: 'Không có bình luận nào',
      noAttachmentsText: 'Không có tệp đính kèm',
      attachmentDropText: 'Kéo thả tệp đính kèm',
      fieldMappings: {
        id: 'commentId',
        parent: 'parent',
        userId: 'userId',
        created: 'createdDate',
        modified: 'modifiedDate',
        content: 'content',
        fileURL: 'fileUrl',
        fileMimeType: 'fileType',
        fileName: 'fileName',
        pings: 'pings',
        creator: 'userId',
        fullname: 'fullname',
        profileURL: 'profileUrl',
        profilePictureURL: 'pictureUrl',
        isNew: 'isNew',
        createdByAdmin: 'isAdmin',
        createdByCurrentUser: 'createdByCurrentUser',
        upvoteCount: 'upvoteCount',
        userHasUpvoted: 'userHasUpvoted',
        email: 'email',
        className: 'className',
        classPK: 'classPK'
      },
      /* eslint-disable */
      timeFormatter: function (time) {
        if (time != null) {
          var dt = time.split(/\ |\s/)
          if (dt.length === 2) {
            var d = dt[0].split(/\-|\s/)
            return (d.slice(0, 3).reverse().join('/')) + ' ' + dt[1]
          } else {
            return time
          }
        }
        return ''
      },
      /* eslint-disable */
      getUsers: function (onSuccess, onError) {
        onSuccess(vm.usersComment)
      },
      getComments: function (onSuccess, onError) {
        console.log('dossierId', vm.dossierId)
        let promise = vm.$store.dispatch('loadCommentItems', vm.dossierId)
        promise.then(result => {
          var data = []
          $.each(result, function (index, item) {
            vm.comment = item
            vm.formatComment(vm.comment)
            data.push(vm.comment)
          })
          onSuccess(data)
        }).catch(reject => {
          onSuccess([])
          onError()
        })
      },
      postComment: function(data, onSuccess, onError) {
        data.id = vm.dossierId
        vm.$store.dispatch('postComment', data).then(result => {
          vm.comment = result
          vm.formatComment(vm.comment)
          onSuccess(vm.comment)
        })
      }
    })
  },
  methods: {
    changeSeemoreStatus: function () {
      var vm = this
      vm.less = !vm.less
      $('.comments__container .data-container').animate({scrollTop: 0}, 100)
      if (vm.less === false) {
        $('.comments__container .data-container').css({ 'height': '300px', 'overflow': 'auto' })
      } else {
        $('.comments__container .data-container').css({ 'height': '150px', 'overflow': 'hidden' })
      }
    },
    checkSeemoreStatus: function () {
      let vm = this
      vm.hidden__text = true
      setTimeout(function () {
        $('.comments__container .data-container').css({ 'height': 'auto', 'overflow': 'hidden' })
        if ($('.comments__container .data-container').height() > 150) {
          if (vm.less === true) {
            $('.comments__container .data-container').css({ 'height': '150px', 'overflow': 'hidden' })
          } else {
            $('.comments__container .data-container').css({ 'height': '300px', 'overflow': 'auto' })
          }
        } else {
          $('.comments__container .data-container').css({ 'height': 'auto' })
          vm.hidden__text = false
        }
      }, 1000)
    },
    //
    formatComment: function (comment) {
      var vm = this
      vm.comment = comment
      if (comment.parent === 0) {
        vm.comment.parent = null
      }
      if (comment.fileName === '') {
        vm.comment.fileName = null
      }
      if (comment.fileType === '') {
        vm.comment.fileType = null
      }
      if (comment.fileUrl === '') {
        vm.comment.fileUrl = null
      }
      if (comment.pictureUrl === '') {
        vm.comment.pictureUrl = null
      }
      if (comment.profileUrl === '') {
        vm.comment.profileUrl = '/image/user_male_portrait'
      }
      vm.comment.fullname = comment.fullname
      vm.comment.pings = comment.pings.toString().split(',')
      vm.comment.createdDate = vm.dateTimeView(vm.comment.createDate)
      vm.comment.modifiedDate = vm.dateTimeView(vm.comment.modifiedDate)
    },
    dateTimeView (arg) {
      if (arg) {
        let value = new Date(arg)
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()} ${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}`
      } else {
        return ''
      }
    }
    //
  }
}
</script>
<style>
  .comments__container .see__more, .comments__container .see__less {
    float: right;
    margin-left: auto;
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .comments__container .data-container {
    height: auto;
  }
  .comments__container .data-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 8px;
    background-color: #F5F5F5;
  }
  .comments__container .data-container::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5;
  }
  .comments__container .data-container::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgb(181, 181, 181);
  }
</style>
