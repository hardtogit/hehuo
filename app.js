// Based on AngularJS 1.4.2

var IWEB_ACCOUNT = "test2";
var TOOLBOX_ACCOUNT = "test1";

var iweb = angular.module('iweb', ['ngRoute']);
window.iweb = iweb

iweb.config(['$routeProvider',
  	function ($routeProvider) {

        $routeProvider.
        when('/i100', {
            templateUrl: 'i100.html',
            controller: 'i100'
        }).
        otherwise({
            redirectTo: '/i100'
        });
}]);

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

var apiconn ={}
// new APIConnection();
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
// apiconn.client_info.clienttype = "web";

apiconn.state_changed_handler = function () {
    rootScope.$apply(function () {

        console.log("state: " + apiconn.from_state + " => " + apiconn.conn_state);


        if (apiconn.conn_state == "IN_SESSION") {
            sessionStorage.setItem("login_name", apiconn.login_name);
            sessionStorage.setItem("login_passwd", apiconn.login_passwd);
            sessionStorage.setItem("credential_data", JSON.stringify(apiconn.credential_data))
            // window.location.reload()
        } else if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {

            // auto re login after page refresh

            if (apiconn.login_name == "" && apiconn.credential_data == null) {

                var login_name = sessionStorage.getItem("login_name");
                var login_passwd = sessionStorage.getItem("login_passwd");

                var cred = sessionStorage.getItem("credential_data");
                var cred_obj = null;
                console.log(cred, 'sssssssssssssssssssssssssssss')
                if (cred !== "") cred_obj = JSON.parse(cred);
                // alert('s')
                // reset stored cred to prevent infinite loop in case of failure
                sessionStorage.setItem("login_name", "");
                sessionStorage.setItem("login_passwd", "");
                sessionStorage.setItem("credential_data", "");

                if (login_name != "" && login_name != null) {
                    apiconn.login(login_name, login_passwd);

                } else if (cred_obj != null) {
                    apiconn.loginx(cred_obj);

                } else {}
            }

        }

        rootScope.$broadcast("STATE_CHANGED_HANDLER", {});
    });
};

apiconn.response_received_handler = function (jo) {

    rootScope.$apply(function () {

        if (jo.ustr != null && jo.ustr != "" && jo.uerr != "ERR_CONNECTION_EXCEPTION") {
            layer.msg(jo.ustr, {
                icon: 2
            })
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

        rootScope.$broadcast("RESPONSE_RECEIVED_HANDLER", jo);
    });
};

// apiconn.wsUri = "ws://live.121tongbu.com/znyx";
angular.module("iweb")
    .factory('fileReader', function ($q, $log) {

        var onLoad = function (reader, deferred, scope) {
            return function () {
                /*scope.$apply(function () {
                    deferred.resolve(reader.result);
                });*/
            };
        };
        var onError = function (reader, deferred, scope) {
            return function () {
                /*scope.$apply(function () {
                    deferred.reject(reader.result);
                });*/
            };
        };
        var getReader = function (deferred) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred);
            reader.onerror = onError(reader, deferred);
            return reader;
        };
        var readAsDataURL = function (file) {
            var deferred = $q.defer();
            var reader = getReader(deferred);
            reader.readAsDataURL(file);
            return deferred.promise;
        };
        var callFun = null;
        var openFile = function (callback) {
            var ele = document.getElementById("uploadImageFile");
            if (ele) {
                document.body.removeChild(ele);
            }
            ele = document.createElement("input");
            ele.setAttribute("type", "file");
            ele.setAttribute("id", "uploadImageFile");
            ele.style.display = "none";
            document.body.appendChild(ele);
            callFun = callback;
            ele.onchange = function (event) {
                //附件预览
                var file = (event.srcElement || event.target).files[0];
                getFile(file);
            };
            ele.click();
        };

        //打开文件
        var getFile = function (file) {
            uploadFile('local_file', file, 200)
        };

        //上传文件
        var uploadFile = function (src, data, sizes) {
            var fd = new FormData();
            fd.append("local_file", data);
            fd.append("proj", apiconn.server_info.proj);
            fd.append("sizes", sizes);
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", uploadComplete, false);
            xhr.open("POST", apiconn.server_info.upload_to);
            xhr.send(fd);
        };
        //上传完成
        var uploadComplete = function (evt) {
            var jo = {};
            if (evt.target.responseText.indexOf("} ") > 0) {
                jo = JSON.parse(evt.target.responseText.substring(0, evt.target.responseText.lastIndexOf(" ")));
            } else {
                // jo = JSON.parse(evt.target.responseText);
                jo = eval('(' + evt.target.responseText + ')');
            }
            var img = new Image();
            var count = 10;
            img.onerror = function () {
                if (count > 0) {
                    count--;
                }
            };
            if (callFun) {
                callFun(jo);
            }
        };

        return {
            readAsDataUrl: readAsDataURL,
            openFile: openFile
        };

    })
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    }).directive("ordertr", function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<tr><td>123</td></tr>',
            scope: {
                obj: '@obj'
            }
        };
    });

iweb.run(['$rootScope', function ($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (angularEvent, current, previous) { //
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

    rootScope = $rootScope;
    // apiconn.connect();
}]);
