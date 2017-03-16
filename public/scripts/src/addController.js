/**
 * Created by Administrator on 2017/2/22.
 */
userApp.controller('addController',function ($http,$scope,$rootScope,$state,$stateParams,$cookieStore) {
//    $stateParams状态参数服务，用来接受$state服务跳转时携带过来的数据
//    $state是当前url的信息，$stateParams是信息中的参数
//    app.js中有个post请求中有user对象，用于创建demo3数据库teas表中的各行元素
//     $scope可以渲染页面({{name}})
//    这个是关于从编辑进入添加页面的时候,各项数据让其都在
//    此时的  $scope.loginName渲染从编辑进入添加页面的各行input的value值
    if (!$cookieStore.get('account')){
        $state.go('login');
    }

    var user = $stateParams.user;
    $scope.loginName = user.loginName;
    $scope.password = user.password;
    $scope.loginName = user.loginName;
    $scope.realName = user.realName;
    $scope.age = user.age;
    $scope.sex = user.sex;
    $scope.birthday = user.birthday;

    if ($scope.password == null){
        $scope.password == '123456'
    }

    $scope.save = function () {
    //    给服务器端传数据
        var postData = {
            loginName: $scope.loginName,
            password: $scope.password,
            realName: $scope.realName,
            age: $scope.age,
            sex: $scope.sex,
            birthday: $scope.birthday
        }

        var url = "/api/addUser"; //添加接口地址
    //    如果user存在值，说明是编辑状态
        if (user){
            postData.id = user._id;
            url = "/api/editUser"; //编辑接口地址
        }

        $http.post(url,postData)
            .then(function (res) {
                if (res.data.code == "success"){
                    $state.go("nav.list");
                }
            });
    }

})
