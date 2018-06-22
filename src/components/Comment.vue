<template>
  <div class="comment-temp">
    <v-expansion-panel expand class="expansion-blue">
			<v-expansion-panel-content v-bind:value="expanded">
				<div slot="header">
					<span>Trao đổi thảo luận</span>
				</div>
				<v-card class="comments__container">
					<v-card-text>
						<div id="mobilink-comments-container"></div>
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
import '../store/jquery_comment'
export default {
  props: {
    class_pk: null,
    class_name: null,
    group_id: null,
    start_end: null,
    activity_type: null,
    profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
    textareaRows: 1,
    enableAttachments: {
      type: Boolean,
      default: true
    },
    enableHashtags: {
      type: Boolean,
      default: true
    },
    enablePinging: {
      type: Boolean,
      default: true
    },
    postCommentOnEnter: {
      type: Boolean,
      default: false
    },
    forceResponsive: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    newestText: {
      type: String,
      default: 'Mới nhất'
    },
    oldestText: {
      type: String,
      default: 'Cũ nhất'
    },
    popularText: {
      type: String,
      default: 'Phổ biến'
    },
    attachmentsText: {
      type: String,
      default: 'Đính kèm'
    },
    sendText: {
      type: String,
      default: 'Gửi'
    },
    replyText: {
      type: String,
      default: 'Trả lời'
    },
    editText: {
      type: String,
      default: 'Sửa'
    },
    editedText: {
      type: String,
      default: 'Đã sửa'
    },
    youText: {
      type: String,
      default: 'Bạn'
    },
    saveText: {
      type: String,
      default: 'Ghi lại'
    },
    deleteText: {
      type: String,
      default: 'Xóa'
    },
    viewAllRepliesText: {
      type: String,
      default: 'Xem tất cả câu trả lời'
    },
    hideRepliesText: {
      type: String,
      default: 'Ẩn câu trả lời'
    },
    noCommentsText: {
      type: String,
      default: 'Không có bình luận nào'
    },
    noAttachmentsText: {
      type: String,
      default: 'Không có tệp đính kèm'
    },
    attachmentDropText: {
      type: String,
      default: 'Kéo thả tệp đính kèm'
    },
    id: {
      type: String,
      default: 'commentId'
    },
    parent: {
      type: String,
      default: 'parent'
    },
    userId: {
      type: String,
      default: 'userId'
    },
    created: {
      type: String,
      default: 'createdDate'
    },
    modified: {
      type: String,
      default: 'modifiedDate'
    },
    content: {
      type: String,
      default: 'content'
    },
    fileURL: {
      type: String,
      default: 'fileUrl'
    },
    fileMimeType: {
      type: String,
      default: 'fileType'
    },
    fileName: {
      type: String,
      default: 'fileName'
    },
    pings: {
      type: String,
      default: 'pings'
    },
    creator: {
      type: String,
      default: 'userId'
    },
    fullname: {
      type: String,
      default: 'fullname'
    },
    profileURL: {
      type: String,
      default: 'profileUrl'
    },
    // profilePictureURL: {
    //   type: String,
    //   default: '/image/user_male_portrait'
    // },
    isNew: {
      type: String,
      default: 'isNew'
    },
    createdByAdmin: {
      type: String,
      default: 'isAdmin'
    },
    createdByCurrentUser: {
      type: String,
      default: 'createdByCurrentUser'
    },
    upvoteCount: {
      type: String,
      default: 'upvoteCount'
    },
    userHasUpvoted: {
      type: String,
      default: 'userHasUpvoted'
    },
    email: {
      type: String,
      default: 'email'
    },
    comments_api: '',
    contacts: [],
    user_id: 0,
    full_name: {
      type: String,
      default: ''
    },
    prevewConfig: {}
  },
  data: () => ({
    // this.initPrevewConfig(),
    users: this.contacts,
    comment: {},
    less: true,
    hidden__text: false,
    expanded: true
    //
  }),
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {},
  // mounted () {
  //   var vm = this
  //   $('#mobilink-comments-container').comments(vm.prevewConfig)
  // },
  created () {
    var vm = this
    vm.$nextTick(function () {
      if (vm.activity_type === 'EVENT') {
        if (vm.start_end === 0 || vm.start_end === 1) {
          vm.expanded = true
        } else {
          vm.expanded = false
        }
      }
      vm.$emit('init-comment', vm.prevewConfig)
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
    /* eslint-disable */
    initPrevewConfig: function () {
      
      var vm = this
      const config = {
        headers: {
          'groupId': vm.group_id
        }
      }
      vm.users = vm.contacts
        
      vm.prevewConfig = {
        profilePictureURL: vm.profilePictureURL,
        textareaRows: vm.textareaRows,
        enableAttachments: true,
        enableHashtags: vm.enableHashtags,
        enablePinging: vm.enablePinging,
        postCommentOnEnter: vm.postCommentOnEnter,
        forceResponsive: vm.forceResponsive,
        readOnly: vm.readOnly,
        newestText: vm.newestText,
        oldestText: vm.oldestText,
        popularText: vm.popularText,
        attachmentsText: vm.attachmentsText,
        sendText: vm.sendText,
        replyText: vm.replyText,
        editText: vm.editText,
        editedText: vm.editedText,
        youText: vm.youText,
        saveText: vm.saveText,
        deleteText: vm.deleteText,
        viewAllRepliesText: vm.viewAllRepliesText,
        hideRepliesText: vm.hideRepliesText,
        noCommentsText: vm.noCommentsText,
        noAttachmentsText: vm.noAttachmentsText,
        attachmentDropText: vm.attachmentDropText,
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
          fullname: 'fullName',
          profileURL: 'profileUrl',
          profilePictureURL: 'pictureUrl',
          isNew: 'isNew',
          createdByAdmin: 'isAdmin',
          createdByCurrentUser: 'createdByCurrentUser',
          upvoteCount: 'upvoteCount',
          userHasUpvoted: 'userHasUpvoted',
          email: 'email',
          className: 'className',
          classPK: 'classPK',
        },
        timeFormatter: function(time) {
          if (time != null) {
              var dt  = time.split(/\ |\s/)
              if(dt.length == 2){
                  var d = dt[0].split(/\-|\s/)
                  return (d.slice(0,3).reverse().join('/')) + ' ' + dt[1]
              }else{
                  return time
              }
          }
          return ''
        },
        getUsers: function(onSuccess, onError) {
          
          onSuccess(vm.contacts)
          /*onError();*/
        },
        getComments: function(onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          axios.get(vm.comments_api + '/' + vm.class_name + '/' + vm.class_pk, config).then(function (response) {
            var data = [];
            if (response.hasOwnProperty('data')) {
              var serializable = response.data.data
              for (var key in serializable) {
                vm.comment = serializable[key]
                vm.formatComment(vm.comment)
                data.push(vm.comment);
              }
              onSuccess(data);
            }
            vm.checkSeemoreStatus()
          })
          .catch(function (error) {
            console.log(error)
          })  
        },
        appendNewComments: function(commentJSONs, onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          let commentById = {}
          let oldCommentsId = commentJSONs.map(function(c){
            commentById[c.id] = c.id + '' + c.userHasUpvoted + '' + c.upvoteCount + '' + c.content
            return c.id
          })
          let url = vm.comments_api + '/' + vm.class_name + '/' + vm.class_pk + '?start=0&end=10&sort=modified_Number&order=true'
          axios.get(url, config).then(function (response) {
            let data = []
            let dataEdited = [];
            if (response.hasOwnProperty('data')) {
              var serializable = response.data.data
              let curId = 0
              let code = ''
              for (var key in serializable) {
                vm.comment = serializable[key]
                curId = vm.comment['commentId']
                code = vm.comment['commentId'] + '' + vm.comment['userHasUpvoted'] + '' + vm.comment['upvoteCount'] + '' + vm.comment['content']
                vm.formatComment(vm.comment)
                /**check return if not exist*/
                if ( oldCommentsId.indexOf( curId ) == -1 ) {
                  data.push(vm.comment);
                  vm.checkSeemoreStatus()
                } else if (code != commentById[curId]) {
                  /** if have changed */
                  dataEdited.push(vm.comment);
                  vm.checkSeemoreStatus()
                }
              }
              onSuccess(data, dataEdited);
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        
        },
        postComment: function(data, onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          var strPings = data.pings.join();
          var params = new URLSearchParams()
          params.append('className', vm.class_name)
          params.append('classPK', vm.class_pk)
          params.append('parent', data.parent != null ? data.parent : 0)
          params.append('pings', strPings)
          params.append('content', data.content)
          params.append('upvoteCount', data.upvoteCount != null ? data.upvoteCount : 0)
          axios.post(vm.comments_api,
            params,
            config
          )
          .then(function (response) {
            if(response != null){
              vm.comment = response.data
              vm.formatComment(vm.comment)
              onSuccess(vm.comment);
            }else{
              onSuccess([]);
            }
            vm.checkSeemoreStatus()
          })
          .catch(function (error) {
            onError();
            console.log(error)
          })
        },
        putComment: function(data, onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          var strPings = data.pings.join();
          var params = new URLSearchParams()
          params.append('className', vm.class_name)
          params.append('classPK', vm.class_pk)
          params.append('parent', data.parent != null ? data.parent : 0)
          params.append('pings', strPings)
          params.append('content', data.content)
          params.append('upvoteCount', data.upvoteCount != null ? data.upvoteCount : 0)
          axios.put(vm.comments_api +'/'+ data.commentId,
            params,
            config
          )
          .then(function (response) {
            vm.checkSeemoreStatus()
            if(response != null){
              vm.comment = response.data
              vm.formatComment(vm.comment)
              onSuccess(vm.comment);
            }else{
              onSuccess([]);
            }
          })
          .catch(function (error) {
            console.log(error)
          })  
        },
        deleteComment: function(data, onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          axios.delete(vm.comments_api + '/' + data.commentId, config).then(function (response) {
            vm.changeSeemoreStatus()
            onSuccess();
          })
          .catch(function (error) {
            console.log(error)
          })  
        },
        upvoteComment: function(data, onSuccess, onError) {
          const config = {
            headers: {
              'groupId': vm.group_id
            }
          }
          if (data.userHasUpvoted) {
            var params = new URLSearchParams()
            params.append('className', vm.class_name)
            params.append('classPK', vm.class_pk)
            params.append('commentId', data.commentId)
            params.append('upvoteCount', data.upvoteCount != null ? data.upvoteCount : 0)
            axios.put(vm.comments_api + '/' + data.commentId + '/upvotes',
              params,
              config
            )
            .then(function (response) {
              if(response != null){
                vm.comment = response.data
                vm.formatComment(vm.comment)
                onSuccess(vm.comment);
              }else{
                onSuccess([]);
              }
            })
            .catch(function (error) {
              console.log(error)
            })  
          } else {
            axios.delete(vm.comments_api + '/' + data.commentId + '/upvotes', config).then(function (response) {
              vm.comment = response.data
              vm.formatComment(vm.comment)
              onSuccess(vm.comment);
            })
            .catch(function (error) {
              console.log(error)
            })  
          }
        },
        uploadAttachments: function(comments, onSuccess, onError) {
          var responses = 0;
          var successfulUploads = [];
          var serverResponded = function() {
            responses++;
            if(responses == comments.length) {
              if(successfulUploads.length == 0) {
                onError();
              } else {
                onSuccess(successfulUploads)
              }
            }
          }

          $(comments).each(function(index, comment) {
            var formData = new FormData();
            
            formData.append('file', comment.file);

            formData.append('className', vm.class_name);
            
            formData.append('classPK', vm.class_pk);
            
            formData.append('parent', comment.parent != null ? comment.parent : 0);

            formData.append('fileName', comment.file.name);
            
            formData.append('fileType', comment.file.type);
            
            formData.append('fileSize', comment.file.size);
            
            formData.append('pings', comment.pings.join());
            
            formData.append('email', vm.user_id);
            
            formData.append('fullName', vm.full_name);

            $.ajax({
              url: '/o/v2/mobilink/comments/uploads',
              dataType: 'json',
              type: 'POST',
              headers: {
                "groupId": vm.group_id
              },
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              success: function(comment) {
                vm.formatComment(comment);
                successfulUploads.push(vm.comment);
                serverResponded();                      
              },
              error: function(xhr, data) {
                serverResponded();
              }
            });
          });
        }
      }

    },
    formatComment: function (comment) {
      var vm = this
      vm.comment = comment
      if(comment.parent == 0){
        vm.comment.parent = null;
      }
      
      if(comment.fileName == ''){
        vm.comment.fileName = null;
      }
      
      if(comment.fileType == ''){
        vm.comment.fileType = null;
      }
      
      if(comment.fileUrl == ''){
        vm.comment.fileUrl = null;
      }
      
      if(comment.pictureUrl == ''){
        vm.comment.pictureUrl = null;
      }
      
      if(comment.profileUrl == ''){
        vm.comment.profileUrl = '/image/user_male_portrait';
      }

      vm.comment.fullname = comment.fullName

      let pings = comment.pings
      vm.comment.pings = pings.toString().split(',')
      
      vm.comment.createdDate = moment(vm.comment.createDate).format('YYYY-MM-DD HH:mm');
      
      vm.comment.modifiedDate = moment(vm.comment.modifiedDate).format('YYYY-MM-DD HH:mm');
    }
    /* eslint-disable */
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
