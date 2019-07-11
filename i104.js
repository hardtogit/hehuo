iweb.controller('i104', function($scope,$routeParams) {
  $scope.tab=1
  $scope.type=$routeParams.type?parseInt($routeParams.type):1
  $scope.detail=false
  $scope.detailId=1
  $scope.data=[{
    title:'政府、企事业<br/>单位食堂配送',
    content:[
      '冷链配送   准时新鲜',
      '源头直供   剔除溢价',
      '按需定制   提升效率'
    ]
  },{
    title:'餐饮机构配置',
    content:[
      '食材采购　一站解决',
      '便捷送达　安心无忧',
      '省钱省心　更省时间'
    ]
  },{
    title:'福利礼品',
    content:[
      '专人挑选   量身定制',
      '更高品质   价格实惠',
      '随心选择   安心使用'
    ]
  },{
    title:'中小生产<br/>原料企业',
    content:[
      '为企业定制专属供应链',
      '高频次   优化采购管理',
      '严质检   为食安保品质'
    ]
  },{
    title:'商超渠道配送',
    content:[
      '丰富商超品类结构',
      '助力生鲜食材流通',
      '丰富居民健康饮食'
    ]
  },{
    title:'BBC-企业购',
    content:[
      '项目经理   全程跟进',
      'API接入    移动商城',
      '海量库存   多样选择'
    ]
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
})
