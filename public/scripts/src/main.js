/**
 * Created by Administrator on 2017/2/22.
 */
var userApp = angular.module('userApp',['ui.router','ngCookies']);

userApp.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("login",{
            url: "/login",
            templateUrl: "login.html",
            controller: "loginController"
        })
        .state("register",{
            url: "/register",
            templateUrl: "register.html",
            controller: "registerController"
        })
        .state("nav",{
            url: "/nav",
            templateUrl: "nav.html",
            controller: "navController"
        })
        .state("nav.list",{
            url: "/list",
            templateUrl: "list.html",
            controller: "listController"
        })
        .state("nav.add",{
            url: "/add",
            templateUrl: "add.html",
            controller: "addController",
            params: {user:""}
        });
//    默认地址
    $urlRouterProvider.otherwise("/login");
})