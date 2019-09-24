// Based on AngularJS 1.4.2

var Head = document.getElementsByTagName('head')[0],style = document.createElement('style');
function linkScript(parm, fn) {
  var linkScript;
  if(/\.css[^\.]*$/.test(parm)) {
    linkScript = document.createElement("link");
    linkScript.type = "text/" + ("css");
    linkScript.rel = "stylesheet";
    linkScript.href = parm;
  } else {
    linkScript = document.createElement("script");
    linkScript.type = "text/" + ("javascript");
    linkScript.src = parm;
  }
  Head.insertBefore(linkScript, Head.lastChild)
  linkScript.onload = linkScript.onerror = function() {
    if(fn) fn()
  }
}


// save a handle to the $rootScope obj
var rootScope;
var callBackFn = {}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function goto_view(v) {
    $(window).scrollTop(0);
    var baseUrl = window.location.href;
    baseUrl = (baseUrl.indexOf('#') > 0 ? baseUrl.substr(0, baseUrl.indexOf('#')) : baseUrl);
    window.location.href = baseUrl + "#/" + v;
}
function logout() {
    sessionStorage.setItem("login_name", "");
    sessionStorage.setItem("login_passwd", "");
    apiconn.logout();
}

var apiconn =new APIConnection();
window.ajax = function (params, cb) {
    if (cb) {
        if (callBackFn[params.obj + '_' + params.act]) {
            callBackFn[params.obj + '_' + params.act].push(cb)
        } else {
            callBackFn[params.obj + '_' + params.act] = [cb]
        }
    }
    apiconn.send_obj(params)
}
apiconn.client_info.clienttype = "web";

apiconn.state_changed_handler = function () {
 if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
   //渲染应用
   var iweb = angular.module('iweb', ['ngRoute']);
   window.iweb = iweb
   iweb.config(['$routeProvider',
     function ($routeProvider) {

       $routeProvider.
       when('/home', {
         templateUrl: 'i100.html',
         controller: 'i100'
       }).
       when('/company', {
         templateUrl: 'i101.html',
         controller: 'i101'
       }).
       when('/factory', {
         templateUrl: 'i102.html',
         controller: 'i102'
       }).
       when('/news', {
         templateUrl: 'i103.html',
         controller: 'i103'
       }).
       when('/partner', {
         templateUrl: 'i104.html',
         controller: 'i104'
       }).
       when('/cooperation', {
         templateUrl: 'i105.html',
         controller: 'i105'
       }).
       when('/join', {
         templateUrl: 'i106.html',
         controller: 'i106'
       }).
       when('/news/detail', {
         templateUrl: 'i107.html',
         controller: 'i107'
       }).
       otherwise({
         redirectTo: '/home'
       });
     }]);
   iweb.run(['$rootScope', function ($rootScope) {
     $rootScope.$on("$routeChangeSuccess", function (angularEvent, current, previous) { //
       // console.log(current.$$route.originalPath,'sssssssssssss')
       window._hmt.push(['_trackPageview', '/#' +current.$$route.originalPath ])
       if (current.controller == "main") {
         $rootScope.showMenu = false;
       } else {
         $rootScope.showMenu = true;
       }
       if (current.controller == "i101") {

       } else {
         if (window.visibilitychangeCall) {
           window.isjiantong = false;
           document.removeEventListener("visibilitychange", window.visibilitychangeCall, false);
           window.visibilitychangeCall = null;
         }
       }
     });
     if($(window).width()>993) {
       $rootScope.device='pc'
     }else{
       $rootScope.device='mobile'
     }
     $rootScope.staticRootPath='http://www.freshfood.cn/cgi-bin/download.pl?proj=yh_ga&fid='
     // $rootScope.staticRootPath='http://47.92.169.34/cgi-bin/download.pl?proj=demo8&fid='
     rootScope = $rootScope;
   }]);
   linkScript('./i100.js')
   linkScript('./header.js')
   linkScript('./baseFooter.js')
   iweb.filter('showAsHtml',function ($sce) {
     return function (input) {
       return $sce.trustAsHtml(input);
     }
   })

   iweb.filter("trustUrl", ['$sce', function ($sce) {
     return function (recordingUrl) {
       return $sce.trustAsResourceUrl(recordingUrl);
     };
   }]);
        }
};
apiconn.response_received_handler = function (jo) {
        if (jo.ustr != null && jo.ustr != "" && jo.uerr != "ERR_CONNECTION_EXCEPTION") {
            // layer.msg(jo.ustr, {
            //     icon: 2
            // })
            callBackFn[jo.obj + '_' + jo.act].shift()
        } else {
            if (callBackFn[jo.obj + '_' + jo.act] && callBackFn[jo.obj + '_' + jo.act].length) {
                callBackFn[jo.obj + '_' + jo.act].shift()(jo)
            }
        }
        if (jo.obj == "person" && jo.act == "login" && jo.user_info && jo.server_info) {
            // goto_view("i001");
            // window.location.reload()
            // goto_view("/i203");
        }
        if (jo.obj == "person" && jo.act == "logout") {
            goto_view("/i203");
            return;
        }
        // $scope.$on("RESPONSE_RECEIVED_HANDLER", function(event, jo) {}
        if (jo.obj == "sdk" && jo.act == "switchreq") {
            return goto_view(jo.ixxx);
        }
};

window.apiconn.wsUri = 'ws://www.freshfood.cn/yh_ga';
// window.apiconn.wsUri = 'ws://47.92.169.34:51708/demo8';
window.apiconn.connect();




