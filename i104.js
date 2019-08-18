iweb.controller('i104', function($scope,$routeParams) {
  $scope.tab=1
  $scope.type=$routeParams.type?parseInt($routeParams.type):1
  $scope.detail=false
  $scope.detailId=1
  $scope.entity={}
  $scope.supply=[]
  $scope.data=[{
    title:'政府、企事业单位食堂配送',
    content:[
      '冷链配送&nbsp&nbsp&nbsp准时新鲜',
      '源头直供&nbsp&nbsp&nbsp剔除溢价',
      '按需定制&nbsp&nbsp&nbsp提升效率'
    ],
    bottomImg:'./img/i104/-s-tu1.png'
  },{
    title:'餐饮机构配送',
    content:[
      '食材采购&nbsp&nbsp&nbsp一站解决',
      '便捷送达&nbsp&nbsp&nbsp安心无忧',
      '省钱省心&nbsp&nbsp&nbsp更省时间'
    ],
    bottomImg:'./img/i104/-s-tu2.png'
  },{
    title:'福利礼品',
    content:[
      '专人挑选&nbsp&nbsp&nbsp量身定制',
      '更高品质&nbsp&nbsp&nbsp价格实惠',
      '随心选择&nbsp&nbsp&nbsp安心使用'
    ],
    bottomImg:'./img/i104/-s-tu3.png'
  },{
    title:'中小生产原料企业',
    content:[
      '为企业定制专属供应链',
      '高频次&nbsp&nbsp&nbsp优化采购管理',
      '严质检&nbsp&nbsp&nbsp为食安保品质'
    ],
    bottomImg:'./img/i104/-s-tu4.png'
  },{
    title:'企业购',
    content:[
      '项目经理&nbsp&nbsp&nbsp全程跟进',
      'API接入&nbsp&nbsp&nbsp移动商城',
      '海量库存&nbsp&nbsp&nbsp多样选择'
    ],
    bottomImg:'./img/i104/-s-tu5.png'
  },{
    title:'商超渠道配送',
    content:[
      '丰富商超&nbsp&nbsp&nbsp品类结构',
      '助力生鲜&nbsp&nbsp&nbsp食材流通',
      '丰富居民&nbsp&nbsp&nbsp健康饮食'
    ],
    bottomImg:'./img/i104/-s-tu6.png'
  }]
  $scope.changeTab=function (tab) {
   $scope.tab=tab
  }
  $scope.changeType=function (type) {
    $scope.type=type
  }
  $scope.goDetail=function (id) {
    $(window).scrollTop(0)
    $scope.detailId=id
    $scope.detail=true
  }
  $scope.close=function () {
    $scope.detail=false
  }
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'partnerread',
      location:'pc',
    },function (jo) {
      $scope.entity=jo.info
      var arr=[]
      for (var i = 0; i <jo.info.ptrcustomer.length ; i++) {
          arr.push({title:jo.info.ptrcustomer[i].name,content:jo.info.ptrcustomer[i].detail.split('；'),bottomImg:jo.info.ptrcustomer[i].bpicture,icon:jo.info.ptrcustomer[i].icon,selicon:jo.info.ptrcustomer[i].selicon})
      }
      $scope.data=arr
      $scope.supply=jo.info.ptrprovider
      console.log($scope.entity,'aaaaaaaaaaaaaaaaa')
    })
  },300)
})
