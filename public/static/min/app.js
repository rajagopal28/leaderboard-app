var app=angular.module("bookworm-ui",["ngRoute","ngStorage","ui.bootstrap","ngTagsInput"]);app.config(["$routeProvider","$httpProvider",function(a,b){a.when("/bookworm/home",{templateUrl:"templates/welcome.html",controller:"HomeController"}).when("/bookworm/login",{templateUrl:"templates/login.html",controller:"UserLoginController"}).when("/bookworm/register",{templateUrl:"templates/register.html",controller:"UserRegistrationController"}).when("/bookworm/auth/users",{templateUrl:"templates/users.html",controller:"UsersController"}).when("/bookworm/auth/users/:username",{templateUrl:"templates/view-user.html",controller:"UserDetailsController"}).when("/bookworm/auth/update-profile/:userId",{templateUrl:"templates/update-profile.html",controller:"UserRegistrationController"}).when("/bookworm/auth/borrow",{templateUrl:"templates/borrow.html",controller:"BorrowBooksController"}).when("/bookworm/auth/borrow/:bookId",{templateUrl:"templates/view-lent.html",controller:"ViewBookController"}).when("/bookworm/auth/lend",{templateUrl:"templates/lend.html",controller:"LendBookController"}).when("/bookworm/auth/edit-book/:bookId",{templateUrl:"templates/lend.html",controller:"LendBookController"}).when("/bookworm/forums",{templateUrl:"templates/forums.html",controller:"ForumController"}).when("/bookworm/forums/:forumId",{templateUrl:"templates/forum-chats.html",controller:"ForumChatController"}).when("/bookworm/auth/new-forum",{templateUrl:"templates/new-forum.html",controller:"NewForumController"}).when("/bookworm/auth/edit-forum/:forumId",{templateUrl:"templates/new-forum.html",controller:"NewForumController"}).when("/bookworm/contact",{templateUrl:"templates/contact.html",controller:"HomeController"}).when("/bookworm/about",{templateUrl:"templates/about.html",controller:"HomeController"}).when("/bookworm/feedback",{templateUrl:"templates/feedback.html",controller:"FeedbackController"}).otherwise({redirectTo:"/bookworm/home"}),b.interceptors.push("BookWormHTTPInterceptor")}]).run(["$rootScope","$location","BookwormAuthProvider",function(a,b,c){a.$on("$locationChangeStart",function(a,d,e){d&&-1!==d.indexOf("/bookworm/auth")&&(c.isLoggedIn()||(a.preventDefault(),b.path("/bookworm/login")))})}]);var app=angular.module("bookworm-ui",["ngRoute","ngStorage","ui.bootstrap","ngTagsInput"]);app.config(["$routeProvider","$httpProvider",function(a,b){a.when("/bookworm/home",{templateUrl:"templates/welcome.html",controller:"HomeController"}).when("/bookworm/login",{templateUrl:"templates/login.html",controller:"UserLoginController"}).when("/bookworm/register",{templateUrl:"templates/register.html",controller:"UserRegistrationController"}).when("/bookworm/auth/users",{templateUrl:"templates/users.html",controller:"UsersController"}).when("/bookworm/auth/users/:username",{templateUrl:"templates/view-user.html",controller:"UserDetailsController"}).when("/bookworm/auth/update-profile/:userId",{templateUrl:"templates/update-profile.html",controller:"UserRegistrationController"}).when("/bookworm/auth/borrow",{templateUrl:"templates/borrow.html",controller:"BorrowBooksController"}).when("/bookworm/auth/borrow/:bookId",{templateUrl:"templates/view-lent.html",controller:"ViewBookController"}).when("/bookworm/auth/lend",{templateUrl:"templates/lend.html",controller:"LendBookController"}).when("/bookworm/auth/edit-book/:bookId",{templateUrl:"templates/lend.html",controller:"LendBookController"}).when("/bookworm/forums",{templateUrl:"templates/forums.html",controller:"ForumController"}).when("/bookworm/forums/:forumId",{templateUrl:"templates/forum-chats.html",controller:"ForumChatController"}).when("/bookworm/auth/new-forum",{templateUrl:"templates/new-forum.html",controller:"NewForumController"}).when("/bookworm/auth/edit-forum/:forumId",{templateUrl:"templates/new-forum.html",controller:"NewForumController"}).when("/bookworm/contact",{templateUrl:"templates/contact.html",controller:"HomeController"}).when("/bookworm/about",{templateUrl:"templates/about.html",controller:"HomeController"}).when("/bookworm/feedback",{templateUrl:"templates/feedback.html",controller:"FeedbackController"}).otherwise({redirectTo:"/bookworm/home"}),b.interceptors.push("BookWormHTTPInterceptor")}]).run(["$rootScope","$location","BookwormAuthProvider",function(a,b,c){a.$on("$locationChangeStart",function(a,d,e){d&&-1!==d.indexOf("/bookworm/auth")&&(c.isLoggedIn()||(a.preventDefault(),b.path("/bookworm/login")))})}]),app.constant("Constants",{DEFAULT_ITEMS_PER_PAGE:10,DEFAULT_MAXIMUM_PAGES:10,SORT_ORDER_ASC:"asc",SORT_ORDER_DESC:"desc",DEFAULT_SORT_FIELD:"createdTS",DEFAULT_LOCAL_IMAGES_PATH:"../static/images/",DEFAULT_POST_ERROR_MESSAGE:"Problem submitting the details. Please try after sometime!",MESSAGE_USERNAME_AVAILABLE:"User name available",MESSAGE_USERNAME_UNAVAILABLE:"User name is not available",MODAL_SIZE_LARGE:"l",MODAL_DISMISS_RESPONSE:"cancel",DEFAULT_HTTP_TIMEOUT:"1000",DEFAULT_MIN_YEAR:1900,DEFAULT_MIN_MONTH:5,DEFAULT_MIN_DATE:22,DEFAULT_DATE_FORMAT:"dd-MMMM-yyyy",DEFAULT_YEAR_FORMAT:"yy",PARAM_VALUE_GENDER_MALE:"male",PARAM_VALUE_GENDER_FEMALE:"female",ERROR_LOGIN_FAILED:"Invalid credentials!!",ERROR_MISSING_REQUIRED_FIELDS:"Missing one or more required fields",DEFAULT_DATA_ERROR_MESSAGE:"Something went wring. Please try after sometime!",PARAM_USER_NAME:"username",PARAM_USER_IMAGE_FILE_NAME:"file",MAX_FILE_UPLOAD_LIMIT:"5242880",GOOGLE_BOOKS_SEARCH_PARAM_ISBN:"isbn:",GOOGLE_BOOKS_SEARCH_PARAM_IN_TITLE:"intitle:",GOOGLE_BOOKS_SEARCH_MAX_RESULTS:10,GOOGLE_BOOK_VALID_ISBN_LENGTHS:[10,13],GOOGLE_BOOK_MIN_TITLE_QUERY_LIMIT:5,GOOGLE_BOOK_ISBN_TYPE_10:"ISBN_10",ALL_BOOK_GENRES:["History","Romance","Drama","Mystery","Science","Fiction","Thriller","Comedy","Philosophy","Spiritual"],BOOKWORM_HTTP_AUTH_TOKEN_BEARER:"Bearer ",ERROR_MESSAGE_FILE_SIZE_LIMIT_EXCEEDED:"Sorry we cannot upload the file. File size should be less than 5MB.",EVENT_NAME_DATE_SET:"date-set",EVENT_NAME_NEW_CHAT:"new-chat",getDefaultPagingSortingData:function(){var a={itemsPerPage:this.DEFAULT_ITEMS_PER_PAGE,totalItems:0,pageNumber:1,primarySort:{},maximumPages:this.DEFAULT_MAXIMUM_PAGES};return a.primarySort[this.DEFAULT_SORT_FIELD]=this.SORT_ORDER_ASC,a}}),app.controller("BorrowBooksController",["$scope","$http","Constants","BooksService","GoogleAPIService",function(a,b,c,d,e){a.search={},a.pageSort=c.getDefaultPagingSortingData(),a.getLocations=function(a){return e.getAddresses({address:a}).then(function(a){return a.data?a.data.results.map(function(a){return a.formatted_address}):null})},a.genres=c.ALL_BOOK_GENRES,a.search.sortAscending=!0,a.search.isAvailable=!0,a.genres=[],a.search.genres=a.genres,a.pageChanged=function(){$.extend({},a.pageSort);a.search.genres=[];for(var b in a.genres){var e=a.genres[b].text?a.genres[b].text:a.genres[b];a.search.genres.push(e)}var f=a.search.sortAscending?c.SORT_ORDER_ASC:c.SORT_ORDER_DESC;a.pageSort.primarySort={lendDate:f},a.search=$.extend(a.search,a.pageSort),d.rentalBooks(a.search).then(function(b){a.availableBooks=b.data.items,a.pageSort.totalItems=b.data.totalItems})},a.searchBooks=function(){a.pageChanged()},a.pageChanged()}]).controller("ViewBookController",["$scope","$http","$routeParams","Constants","BooksService","BookwormAuthProvider",function(a,b,c,d,e,f){a.book={},a.status={success:!1,error:!1};var g=c.bookId;e.rentalBooks({id:g}).then(function(b){b.data&&b.data.items&&(a.bookDataAvailable=b.data.items.length>0,a.book=b.data.items[0],a.book.authorName=a.book.authorName.join(", "))}),a.isUserContributor=function(){return a.book&&f.isCurrentUser(a.book.contributor)},a.borrowBook=function(){var b=a.book,c=f.getUser();b&&c&&c.username&&(b.borrowerName=c.username,e.requestBook(b).then(function(b){b.data.success?(a.status.success=!0,a.status.error=!1):(a.status.error=!0,a.status.success=!1)}))},a.dismissAlert=function(){a.status.success=!1,a.status.error=!1},a.isLoggedIn=function(){return f.isLoggedIn()}}]).controller("LendBookController",["$scope","$routeParams","$http","Constants","ConfigService","BooksService","BookwormAuthProvider","GoogleAPIService",function(a,b,c,d,e,f,g,h){a.book={},a.status={success:!1,error:!1};var i;e.getConfig().then(function(b){b.data&&b.data&&(i=b.data.noImageURL,a.book.thumbnailURL=i)});var j=g.getUser(),k={};j&&(k={authorName:j.authorName,username:j.username,thumbnailURL:j.thumbnailURL});var l=b.bookId;l&&f.rentalBooks({id:l}).then(function(b){b.data&&b.data.items&&(a.book=b.data.items[0],a.book.genresList=a.book.genres,a.book.authorName=a.book.authorName.join(", "),a.book.contributor=k)}),a.isEditMode=function(){return l&&""!==l.trim()},a.editBook=function(){f.editBook(a.book).then(function(b){b.success?(a.status.success=!0,a.status.error=!1):(a.status.error=!0,a.status.success=!1)})},a.loadBookDetails=function(b){var c=a.book.isbn;if(!isNaN(c)&&-1!=d.GOOGLE_BOOK_VALID_ISBN_LENGTHS.indexOf(c.length)){var e={q:d.GOOGLE_BOOKS_SEARCH_PARAM_ISBN+c,maxResults:d.GOOGLE_BOOKS_SEARCH_MAX_RESULTS};h.searchBooks(e).then(function(b){b.data.items&&b.data.items.length>0&&(a.book=f.parseGBookToBook(b.data.items[0]))})}if(b&&b.length>d.GOOGLE_BOOK_MIN_TITLE_QUERY_LIMIT){var g=b.split(" ").join("+"),e={q:d.GOOGLE_BOOKS_SEARCH_PARAM_IN_TITLE+g,maxResults:d.GOOGLE_BOOKS_SEARCH_MAX_RESULTS};return h.searchBooks(e).then(function(a){return a.data.items&&a.data.items.length>0?a.data.items.map(function(a){return f.parseGBookToBook(a)}):void 0})}},a.onBookSelect=function(b,c,d){a.book=b},a.genres=d.ALL_BOOK_GENRES,a.book.genresList=[],a.changeSorting=function(b){a.search.sortAscending=!b},a.lendBook=function(){a.book.thumbnailURL||(a.book.thumbnailURL=i),a.book.genres=[];for(var b=0;b<a.book.genresList.length;b++){var c=a.book.genresList[b];a.book.genres.push(c.text)}a.book.contributor=k,f.lendBook(a.book).then(function(b){b.data.success?(a.status.success=!0,a.status.error=!1,a.book={}):(a.status.error=!0,a.status.success=!1)})}}]),app.controller("ForumController",["$scope","ForumsService","Constants","BookwormAuthProvider",function(a,b,c,d){a.status={},a.forums=[],a.pageSort=c.getDefaultPagingSortingData(),a.pageChanged=function(){var c=a.pageSort;b.allForums(c).then(function(b){a.status={},a.forums=b.data.items,a.forums&&a.forums.length&&(a.status[a.forums[0].id]={open:!0}),a.pageSort.totalItems=b.data.totalItems})},a.isLoggedIn=function(){return d.isLoggedIn()},a.isCreatorAuthor=function(a){return d.isCurrentUser(a.author)},a.pageChanged()}]).controller("ForumChatController",["$scope","$routeParams","Constants","ForumsService","BookwormAuthProvider",function(a,b,c,d,e){var f=b.forumId;a.newChat={},a.loggedTime=new Date,a.currentUser=e.getUser(),a.isUserForumOwner=function(){return a.forum&&e.isCurrentUser(a.forum.author)},a.isCommentatorAuthor=function(a){return e.isCurrentUser(a.author)},a.isLoggedIn=function(){return e.isLoggedIn()};var g=c.getDefaultPagingSortingData();a.addChat=function(){if(a.newChat.chatComment&&""!==a.newChat.chatComment.trim()){var b=$.extend({},g);b.forumId=f,b.chatComment=a.newChat.chatComment;var c=d.getCurrentAuthorInfo();c&&(b.author=c),d.addChat(b).then(function(b){a.newChat.chatComment=""})}},a.forum={},a.forumChats=[];var h={id:f};d.allChats(h).then(function(b){b.data&&(a.forum=b.data,a.forumChats=b.data.chats)}),socket.on(c.EVENT_NAME_NEW_CHAT,function(b){b.forumId===f&&a.forumChats.push(b.chat)})}]).controller("NewForumController",["$scope","$routeParams","Constants","ForumsService","BooksService","GoogleAPIService","BookwormAuthProvider",function(a,b,c,d,e,f,g){a.book={},a.forum={};var h=b.forumId;if(a.status={success:!1,error:!1},a.isLoggedIn=function(){return g.isLoggedIn()},h){var i=c.getDefaultPagingSortingData();i.id=h,d.allForums(i).then(function(b){b.data&&b.data.items&&(a.forum=b.data.items[0],a.forum&&a.forum.referredBook&&(a.book=a.forum.referredBook))})}a.isEditMode=function(){return h&&""!==h.trim()},a.updateForum=function(){a.forum.referredBook=a.book;var b=d.getCurrentAuthorInfo();b&&(a.forum.author=b),d.updateForum(a.forum).then(function(b){b&&b.data&&(b.data.success?(a.status.success=!0,a.status.error=!1):(a.status.error=!0,a.status.success=!1))})},a.addForum=function(){a.forum.referredBook=a.book;var b=d.getCurrentAuthorInfo();b&&(a.forum.author=b),d.addForum(a.forum).then(function(b){b&&b.data&&(b.data.success?(a.status.success=!0,a.status.error=!1,a.book={},a.forum={}):(a.status.error=!0,a.status.success=!1))})},a.loadBookDetails=function(a){if(a&&a.length>c.GOOGLE_BOOK_MIN_TITLE_QUERY_LIMIT){var b=a.split(" ").join("+"),d={q:c.GOOGLE_BOOKS_SEARCH_PARAM_IN_TITLE+b,maxResults:c.GOOGLE_BOOKS_SEARCH_MAX_RESULTS};return f.searchBooks(d).then(function(a){return a.data.items&&a.data.items.length>0?a.data.items.map(function(a){return e.parseGBookToBook(a)}):void 0})}},a.dismissAlert=function(){a.status.success=!1,a.status.error=!1},a.onBookSelect=function(b,c,d){a.book=b}}]),app.controller("HomeController",["$scope","UsersService","BookwormAuthProvider",function(a,b,c){a.tabs=[{title:"BookWorm",template:"./templates/about-site.html",active:!0},{title:"Author",template:"./templates/about-author.html",active:!1}],a.loginPopup=function(){},a.isLoggedIn=function(){return c.isLoggedIn()},a.getDisplayName=function(){var a=c.getUser();return a&&a.authorName?a.authorName:void 0},a.getUserName=function(){var a=c.getUser();return a&&a.username?a.username:void 0},a.getThumbnail=function(){var a=c.getUser();return a&&a.thumbnailURL?a.thumbnailURL:void 0},a.logout=function(){b.logout()}}]),app.controller("UserRegistrationController",["$scope","$routeParams","$uibModal","Constants","ConfigService","UsersService","BookwormAuthProvider",function(a,b,c,d,e,f,g){a.user={};var h=b.userId;a.user.gender=d.PARAM_VALUE_GENDER_MALE,a.user.dob=new Date,a.$on(d.EVENT_NAME_DATE_SET,function(b,c){a.user.dob=c.selectedDate});var i,j,k;if(e.getConfig().then(function(b){b.data&&b.data&&(i=b.data.noMaleImageURL,j=b.data.noFemaleImageURL,k=b.data.imagesDirectory?b.data.imagesDirectory:d.DEFAULT_LOCAL_IMAGES_PATH,a.user.thumbnailURL=i)}),a.status={success:!1,warn:!1,error:!1},a.genderChange=function(){a.user.thumbnailURL||(a.user.thumbnailURL=a.user.gender===d.PARAM_VALUE_GENDER_MALE?i:j),a.user.gender===d.PARAM_VALUE_GENDER_FEMALE&&a.user.thumbnailURL===i?a.user.thumbnailURL=j:a.user.gender===d.PARAM_VALUE_GENDER_MALE&&a.user.thumbnailURL===j&&(a.user.thumbnailURL=i)},a.isEditMode=function(){return h&&""!==h.trim()},a.isEditMode()){var l=d.getDefaultPagingSortingData();l.id=h,f.getUsers(l).then(function(b){b.data&&b.data.items&&(a.user=b.data.items[0])})}a.isUserContributor=function(){return g.isCurrentUser(a.user)},a.isLoggedIn=function(){return g.isLoggedIn()},a.update=function(){f.updateProfile(a.user).then(function(b){a.status.success=!0,a.status.error=!1,g.updateUser(a.user)},function(b){a.status.error=!0,a.status.success=!1})},a.signup=function(){f.registerUser(a.user).then(function(b){a.status.success=!0,a.status.error=!1,a.user={}},function(b){a.status.error=!0,a.status.success=!1})},a.checkUsername=function(){f.usernameUnique(a.user).then(function(b){b.data&&(a.user.isUsernameAvailable=b.data.isUsernameAvailable,b.data.isUsernameAvailable?a.user.customMessage=d.MESSAGE_USERNAME_AVAILABLE:a.user.customMessage=d.MESSAGE_USERNAME_UNAVAILABLE)})},a.showImageUploadModal=function(){var b=c.open({animation:!0,templateUrl:"../../../templates/image-upload.html",controller:"ImageUploadController",size:d.MODAL_SIZE_LARGE,resolve:{user:a.user}});b.result.then(function(b){b.data&&b.data.success&&b.data.fileAbsolutePath&&(a.user.thumbnailURL=b.data.fileAbsolutePath)})},a.dismissAlert=function(){a.status.success=!1,a.status.error=!1,a.status.warn=!1}}]).controller("UserLoginController",["$scope","$location","$uibModal","Constants","UsersService",function(a,b,c,d,e){a.user={},a.status={error:!1},a.dismissMessage=function(){a.status.error=!1},a.login=function(){e.loginUser(a.user).then(function(c){c.data?c.data.authSuccess?(a.status.error=!1,b.path("/bookworm/home")):(a.errorMessage=d.ERROR_LOGIN_FAILED,a.status.error=!0):(a.status.error=!0,a.errorMessage=d.DEFAULT_POST_ERROR_MESSAGE)})}}]).controller("UsersController",["$scope","Constants","UsersService",function(a,b,c){var d=b.getDefaultPagingSortingData();a.users=[],c.getUsers(d).then(function(b){b.data&&b.data.items&&(a.users=b.data.items)})}]).controller("UserDetailsController",["$scope","$routeParams","Constants","UsersService","BookwormAuthProvider",function(a,b,c,d,e){var f=c.getDefaultPagingSortingData();a.user={},a.isUserContributor=function(){return e.isCurrentUser(a.user)},a.isLoggedIn=function(){return e.isLoggedIn()},f.username=b.username,d.getUsers(f).then(function(b){b.data&&b.data.items&&(a.userDataAvailable=b.data.items.length>0,a.user=b.data.items[0])})}]).controller("ImageUploadController",["$scope","$uibModalInstance","$timeout","Constants","UsersService","BookwormAuthProvider","user",function(a,b,c,d,e,f,g){a.user=g,a.profileThumbnail=null,a.status={error:!1,success:!1},a.uploadImage=function(){var f=a.profileThumbnail;f&&f.size<d.MAX_FILE_UPLOAD_LIMIT&&e.postImage(f).then(function(e){e&&e.data?e.data.success?(a.status.error=!1,a.status.success=!0,a.user.thumbnailURL=a.user.thumbnailURL!==e.data.fileAbsolutePath?e.data.fileAbsolutePath:e.data.fileAbsolutePath+"?lastmod="+(new Date).getTime(),c(function(){b.close(e.data)},5e3),a.profileThumbnail=null):(a.status.error=!0,a.status.success=!1,a.errorMessage=e.data.error):(a.status.error=!0,a.status.success=!1,a.errorMessage=d.DEFAULT_POST_ERROR_MESSAGE)},function(b){b&&(a.status.error=!0,a.status.success=!1,a.errorMessage=d.DEFAULT_POST_ERROR_MESSAGE)})},a.dismissAlert=function(){a.status.error=!1,a.status.success=!1},a.cancel=function(){b.dismiss(d.MODAL_DISMISS_RESPONSE)}}]).controller("FeedbackController",["$scope","Constants","UsersService","BookwormAuthProvider",function(a,b,c,d){if(a.feedback={feedbackType:"query"},a.status={success:!1,error:!1},d.isLoggedIn()){var e=d.getUser();if(e&&e.username){var f=b.getDefaultPagingSortingData();f.username=e.username,c.getUsers(f).then(function(b){b.data&&b.data.items&&(a.feedback=$.extend(a.feedback,b.data.items[0]),a.feedback.authorName=a.feedback.firstName+" "+a.feedback.lastName)})}}a.dismissAlert=function(){a.status.error=!1,a.status.success=!1},a.sendFeedback=function(){a.feedback.feedbackComment&&c.postFeedback(a.feedback).then(function(b){b.data&&b.data.success?(a.status.error=!1,a.status.success=!0):(a.status.error=!0,a.status.success=!1),a.feedback.feedbackComment=""},function(b){a.status.error=!0,a.status.success=!1,a.feedback.feedbackComment=""})}}]),app.directive("datePickerInput",function(){return{restrict:"E",scope:{initDate:"="},templateUrl:"../../templates/datepicker-input-template.html",controller:"DatepickerCtrl"}}).controller("DatepickerCtrl",["$scope","Constants",function(a,b){a.today=function(){a.dt=new Date},a.status={},a.initDate?a.dt=a.initDate:a.today(),a.clear=function(){a.dt=null},a.toggleMin=function(){a.minDate=a.minDate?null:new Date(b.DEFAULT_MIN_YEAR,b.DEFAULT_MIN_MONTH,b.DEFAULT_MIN_DATE)},a.toggleMin(),a.maxDate=new Date,a.showDatepicker=function(b){a.status.opened=!0},a.onDatePicked=function(){a.$emit(b.EVENT_NAME_DATE_SET,{selectedDate:a.dt})},a.setDate=function(b,c,d){a.dt=new Date(b,c,d)},a.dateOptions={formatYear:b.DEFAULT_YEAR_FORMAT,startingDay:1},a.format=b.DEFAULT_DATE_FORMAT}]),app.directive("equals",function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){a.$watch(c.ngModel,function(){e()}),c.$observe("equals",function(a){e()});var e=function(){var a=d.$viewValue,b=c.equals;d.$setValidity("equals",!a||!b||a===b)}}}}}),app.directive("fileModel",["$parse",function(a){return{restrict:"A",link:function(b,c,d){var e=a(d.fileModel),f=e.assign;c.bind("change",function(){b.$apply(function(){f(b,c[0].files[0])})})}}}]),app.factory("BookwormAuthProvider",["$http","$localStorage",function(a,b){function c(){var a,c=b.user;return"undefined"!=typeof c&&(a=JSON.parse(c)),a}function d(){g=null,b.user=null,b.token=null}function e(a){if(g&&g.authSuccess&&a&&a.username===g.username){var c={authSuccess:g.authSuccess,authorName:(""+(a.firstName?a.firstName:"")+" "+(a.lastName?a.lastName:"")).trim(),username:a.username,thumbnailURL:a.thumbnailURL,token:g.token};b.user=JSON.stringify(c),g=c}}function f(a){b.token=a.token,b.user=JSON.stringify(a),g=a}var g;return{setUser:function(a){a.authSuccess?f(a):d()},updateUser:function(a){e(a)},isLoggedIn:function(){return g||(g=c()),g?g.authSuccess:!1},getUser:function(){return g||(g=c()),g},isCurrentUser:function(a){return g&&a&&a.username===g.username}}}]),app.factory("BookWormHTTPInterceptor",["$q","$location","$localStorage","Constants","LoaderService",function(a,b,c,d,e){return{request:function(a){return a&&a.url&&-1!==a.url.indexOf("/bookworm")&&(a.headers=a.headers||{},c.token&&(a.headers.Authorization=d.BOOKWORM_HTTP_AUTH_TOKEN_BEARER+c.token)),e.activateSpinner(),a},responseError:function(c){return(401===c.status||403===c.status)&&b.path("/bookworm/login"),e.deactivateSpinner(),a.reject(c)},response:function(a){return e.deactivateSpinner(),a}}}]);var BOOKWORM_APPLICATION_HOST="http://bookworms-dextrous.rhcloud.com/";"localhost"!==location.hostname&&(BOOKWORM_APPLICATION_HOST="https:"===location.protocol?"wss://"+location.hostname+":8443":"ws://"+location.hostname+":8000");var socket=io.connect(BOOKWORM_APPLICATION_HOST,{transports:["websocket"]});pingServer=function(a){socket.on("connect",function(){socket.emit("ferret","tobi",function(a){})})},function(a){a.loader_ext={defaults:{autoCheck:32,css:{},size:16,bgColor:"#FFF",bgOpacity:.5,fontColor:!1,position:[0,0,0,0],title:"",isOnly:!0,imgUrl:"images/loading[size].gif",onShow:function(){},onClose:function(){}},template:function(b,c){return a.each(c,function(a,c){b=b.replace("${"+a+"}",c)}),a(b)},init:function(b,c){return this.options=a.extend({},this.defaults,c),this.scope=b,this.scope.is(":hidden")?void 0:(this.checkScope(),this.check_position(),this.check_unique(),this.create(),this.set_css(),this.set_define(),this.show(),this.loading)},checkScope:function(){this.options.autoCheck&&((this.scope.is("body")||this.scope.is("div")||this.scope.is("form"))&&(this.options.size=this.options.autoCheck),(this.scope.is("input")||this.scope.is("button"))&&(this.options.title=""))},check_position:function(){for(var a=this.options.position,b=0;4>b;b++)void 0===a[b]&&(a[b]=0);this.options.position=a},check_unique:function(){this.options.isOnly&&void 0!==this.loading&&this.close()},create:function(){var b=this.options;b.imgUrl=b.imgUrl.replace("[size]",b.size+"x"+b.size),this.loading=this.template(a.loader.tmpl,{Class:"x"+b.size,Src:b.imgUrl,Title:b.title}).hide(),this.loading.appendTo(a("body"))},set_css:function(){var b=this.scope,c=this.options,d=this.loading,e=b.outerHeight(),f=b.outerWidth(),g=b.offset().top,h=b.offset().left;d.css("top",g),b.is("body")&&(e=a(window).height(),f=a(window).width(),d.css("position","fixed"),this.for_ie6()),d.css({height:e+c.position[2],width:f+c.position[3],left:h,"border-radius":b.css("border-radius")}).css(c.css);var i=d.children();i.css({"margin-top":(e-c.size)/2+c.position[0],"margin-left":(f-c.size)/2+c.position[1]-i.find("span").outerWidth()/2})},set_define:function(){var b=this.options,c=this.loading;b.bgColor?c.css({"background-color":b.bgColor,opacity:b.bgOpacity,filter:"alpha(opacity="+100*b.bgOpacity+")"}):c.css("background","none"),b.fontColor&&c.find("span").css("color",b.fontColor);var d=this;a(window).resize(function(){d.loading&&d.set_css()})},for_ie6:function(){var b=this.loading;a.browser&&a.browser.msie&&"6.0"==a.browser.version&&(b.css({position:"absolute",top:a(window).scrollTop()}),a(window).scroll(function(){b.css("top",a(window).scrollTop())}))},show:function(){var b=this.options;this.loading.show(1,function(){var c=a(this).children(),d=c.css("margin-left").replace("px","");c.css("margin-left",d-c.find("span").outerWidth()/2),b.onShow(this.loading)})},close:function(b){if(b){var c=a(a.loader.tmpl).attr("class");a("."+c).remove()}else void 0!=this.loading&&(this.loading.remove(),this.loading=void 0);void 0!=this.options&&this.options.onClose()}},a.loader={tmpl:'<div class="loading_wrp"><div class="loading ${Class}"><img src="${Src}" /><span>${Title}</span></div></div>',open:function(b){return a("body").loader(b)},close:function(b){a.loader_ext.close(b)}},a.fn.loader=function(b){if(a(this).size()){"string"===a.type(b)&&(b={title:b});var c=a(this);return c.size()>1&&(c=c.parent()),a.loader_ext.init(c,b)}}}(jQuery),app.service("BooksService",["$http","Constants",function(a,b){this.rentalBooks=function(b){return a.get("/bookworm/api/books/rental/all",{params:b})},this.lendBook=function(c){return a.post("/bookworm/api/books/rental/add",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.editBook=function(c){return a.post("/bookworm/api/books/rental/update",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.requestBook=function(c){return a.post("/bookworm/api/books/rental/request",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.parseGBookToBook=function(a){var c={};c.description=a.volumeInfo.description,c.bookName=a.volumeInfo.title,a.volumeInfo.authors&&a.volumeInfo.authors.length>0&&(c.authorName=a.volumeInfo.authors),c.thumbnailURL=a.volumeInfo.imageLinks?a.volumeInfo.imageLinks.thumbnail:null,c.googleId=a.id;var d=a.volumeInfo.industryIdentifiers;for(var e in d)d[e].type===b.GOOGLE_BOOK_ISBN_TYPE_10&&(c.isbn=d[e].identifier);return c}}]),app.service("ConfigService",["$http","$q","BookwormAuthProvider",function(a,b,c){var d;this.getConfig=function(){if(d){var c=b.defer();return c.resolve({data:d}),c.promise}var e=a.get("/bookworm/api/config");return e.then(function(a){d=a.data}),e}}]),app.service("ForumsService",["$http","Constants","BookwormAuthProvider",function(a,b,c){this.addForum=function(c){return a.post("/bookworm/api/forums/add",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.updateForum=function(c){return a.post("/bookworm/api/forums/update",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.allForums=function(b){return a.get("/bookworm/api/forums/all",{params:b})},this.allChats=function(b){return a.get("/bookworm/api/forums/chats/all",{params:b})},this.addChat=function(c){return a.post("/bookworm/api/forums/chats/add",c,{timeout:b.DEFAULT_HTTP_TIMEOUT})},this.getCurrentAuthorInfo=function(){var a=c.getUser();return a?{authorName:a.authorName,username:a.username,thumbnailURL:a.thumbnailURL}:null}}]),app.service("GoogleAPIService",["$http",function(a){this.getAddresses=function(b){return a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:b})},this.searchBooks=function(b){return a.get("https://www.googleapis.com/books/v1/volumes",{params:b})}}]),app.service("LoaderService",["$",function(a){function b(){c.active?a.loader.close(!0):a.loader.open(c.options),c.active=!c.active}var c={options:{autoCheck:!1,size:32,bgColor:"#fff",bgOpacity:.9,fontColor:"#000",title:"Loading",isOnly:!1,imgUrl:"./static/images/loading.gif"},active:!1};this.activateSpinner=function(){b()},this.deactivateSpinner=function(){b()}}]).service("$",function(){return $}),app.service("UsersService",["$http","$q","$localStorage","Constants","BookwormAuthProvider",function(a,b,c,d,e){this.registerUser=function(b){return a.post("/bookworm/api/users/register",b,{timeout:d.DEFAULT_HTTP_TIMEOUT})},this.updateProfile=function(b){return a.post("/bookworm/api/users/update",b,{timeout:d.DEFAULT_HTTP_TIMEOUT})},this.loginUser=function(b){var c=a.post("/bookworm/api/users/login-auth",b,{timeout:d.DEFAULT_HTTP_TIMEOUT});return c.then(function(a){e.setUser(a.data)}),c},this.usernameUnique=function(b){return a.post("/bookworm/api/users/check-unique",b,{timeout:d.DEFAULT_HTTP_TIMEOUT})},this.logout=function(a){e.setUser({}),a&&a()},this.getUsers=function(b){return a.get("/bookworm/api/users/all",{params:b},{timeout:d.DEFAULT_HTTP_TIMEOUT})},this.postImage=function(c){var f=e.getUser();if(f&&f.username&&c){var g=f.username,h=new FormData;return h.append(d.PARAM_USER_NAME,g),h.append(d.PARAM_USER_IMAGE_FILE_NAME,c),a.post("/bookworm/api/user/profile-upload",h,{transformRequest:angular.identity,headers:{"Content-Type":void 0}})}return b.reject({error:d.ERROR_MISSING_REQUIRED_FIELDS})},this.postFeedback=function(b){return a.post("/bookworm/api/feedback/add",b,{timeout:d.DEFAULT_HTTP_TIMEOUT})}}]);