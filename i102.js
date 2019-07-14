iweb.controller('i102', function($scope,$routeParams) {
  $scope.location=[{
    lat:116.276336,
    lng:39.762759,
    titleText:'北京工厂',
    subContent:'北京市大兴区芦求路创新路彩食鲜食品有限公司',
    title:'./img/i102/bj/title.png',
    text:'北京彩食鲜生鲜工厂位于北京市大兴区黄村镇芦城村创新路3号，是全新的生鲜加工产品、食品及关联性产品供应链集成管理公司，于2016年12月28日成立，建筑面积约21000平方米。工厂包含蔬果、禽肉、净菜、水产生产车间。在公司发展壮大的2年里，北京工厂始终为客户提供好的产品和技术支持、健全的售后服务，满足永辉超市各业态门店、B2B（单位食堂及 酒店、餐饮等行业顾客）、B2B2C(电商APP)及高端市场，提供安全、健康、高性价比的食品。',
    leftImg:'./img/i102/bj/left.png',
    rightImg:'./img/i102/bj/right.png',
    centerImg:''
  },{
    lat:106.389717,
    lng:29.674019,
    titleText:'重庆工厂',
    subContent:'重庆市沙坪坝区土主镇永辉物流园彩食鲜',
    title:'./img/i102/cq/title.png',
    text:'重庆彩食鲜供应链发展有限公司于2017年8月30日注册成立，作为永辉彩食鲜的第三代工厂，全厂面积13441.7㎡，拥有水产车间、肉类车间、蔬果车间、净菜车间、沙拉车间、即食三文鱼、干货车间。随着各项生产技术的不断革新，目前已通过ISO9001,ISO22000,ISO14001和OHSAS18001认证，覆盖公司全系列产品。 重庆彩食鲜秉承客户第一，始终致力于为客户提供健康、新鲜、高性价比的食材，为华东地区食堂、餐饮连锁，超市以及各社区团购平台供应新鲜的水果、蔬菜、水产品、各类肉品、干货、即食性水产品和即食果蔬系列。',
    leftImg:'./img/i102/cq/left.png',
    rightImg:'./img/i102/cq/right.png',
    centerImg:''
  },{
    lat:104.113736,
    lng:30.946726,
    titleText:'四川工厂',
    subContent:'成都市濛阳镇濛兴西路50号永辉物流',
    title:'./img/i102/sc/title.png',
    text:'四川彩食鲜供应链管理有限公司于2017年6月在四川彭州市成立，注册地址为四川省彭州市濛阳镇濛兴西路50号，注册资本1亿元，是永辉云商板块旗下的集生鲜食材生产加工、食用品采供销售、供应链服务输出等为一体的供应链集成管理公司，专门负责永辉在四川地区供应链建设项目运营和S2B供应链业务运营等。<br/>' +
    '<div style="text-indent: 2em">秉承“融合共享、成于至善”的经营理念，四川彩食鲜供应链管理有限公司，坚持以促进“产供销”高效链接，带动产业链上下游企业协同发展为宗旨，大力强化以四川供应链产业园、四川彩食鲜中央工厂等大型建设项目为依托的S2B业务运营和生产管理,并重点培育和打造以“永辉云商企业购”为品牌落地的食用品供应链科技服务平台，通过整合、集聚、开放永辉生态圈上强大的供应链资源，致力于面向四川地区的永辉门店、合作伙伴及广大的B端企业客户，提供优质的产品采供和供应链服务，推动流通市场转型升级，提高供应链效率，降低成本，使批发交易向现代化、平台化方向迈进。</div>',
    leftImg:'./img/i102/sc/left.png',
    rightImg:'./img/i102/sc/right.png',
    centerImg:''
  },{
    lat:119.288651,
    lng:26.006807,
    titleText:'福建工厂',
    subContent:'福建省福州市仓山区台屿路99号福建彩食鲜供应链发展有限公司',
    title:'./img/i102/fj/title.png',
    text:'福建彩食鲜生鲜中央工厂坐落于福州市仓山区台屿路99号永辉工业园厂区。成立于2016年4月，占地面积39000平方米。我们拥有专业的食采团队以及原生态的农业基地，提供丰富多样的产品以及特色食材定制个性化服务；对食材我们采取基地直采，追溯食材源头，保证食材的安全性；厂区引进HACCP安全管理体系，并拥有CJ集团食安管理专家的食品检测中心，对所有食材品检，为客户提供最安全的产品；厂区车间采用完全符合GMP作业规范的低温加工车间，秉承以最优的产品品质及服务回报广大客户，获得了各中高端餐饮企业、企事业机关单位、大专院校食堂，连锁酒店以及电商平台一致肯定及好评。',
    leftImg:'./img/i102/fj/left.png',
    rightImg:'./img/i102/fj/right.png',
    centerImg:''
  },{
    lat:117.424111,
    lng:31.845604,
    titleText:'安徽工厂',
    subContent:'安徽省合肥市肥东县撮镇镇东风大道与铁路北路交叉口永辉物流',
    title:'./img/i102/ah/title.png',
    text:'安徽彩食鲜供应链发展有限公司成立于2017年06月19日，注册地址在合肥市肥东县撮镇镇龙塘村综合楼，占地面积约300亩（包括永辉物流面积），其中彩食鲜生鲜库面积6000平方米，主要从事速冻食品【速冻面米食品（生制品）、速冻其他食品（速冻肉制品、速冻果蔬制品）】、蛋制品（其他类）、糕点（烘烤类糕点、油炸类糕点、熟粉类糕点、月饼）、豆制品（非发酵性豆制品）生产、加工、配送、销售；淀粉及淀粉制品（淀粉）、糖（白砂糖、冰糖）、水产加工品（干制水产品）、蔬菜制品【食用菌制品（干制食用菌）】、其他粮食加工品、谷物粉类制成品、谷物碾磨加工品、谷物加工品、水果制品（水果干制品）、炒货食品及坚果制品（烘炒类）、味精 谷氨酸钠（99味精）分装、配送、销售；食品塑料袋生产、销售；食品加工、食品销售；农产品加工、销售；水电销售；物业管理、仓储（危险品除外）服务。彩食鲜是永辉打造的B2B食材服务商，是永辉生鲜中央工厂，为永辉超市各业态门店，B端零售商，企事业单位、高等院校、酒店、餐饮店等渠道供货。目前彩食鲜已在北京、上海、重庆、福建等建立多家工厂，按照ISO22000、ISO9001质量管理体系运行，并建立食品安全检测实验室，通过多种措施设置食品安全防线。',
    leftImg:'./img/i102/ah/left.png',
    rightImg:'./img/i102/ah/right.png',
  },{
    lat:121.128402,
    lng:31.322928,
    titleText:'江苏工厂',
    subContent:'江苏省苏州市昆山市双华路338号',
    title:'./img/i102/js/title.png',
    text:'江苏彩食鲜供应链发展有限公司于2017年8月30日注册成立，是一家集生产、仓储、物流和销售为一体的大型企业。为华东地区的超市和团体提供新鲜的水果、蔬菜、水产品、各类肉品、干货、面条、即食性水产品和即食果蔬系列。<br/>' +
    '江苏永辉彩食鲜采用产地直采，冷链加工，冷链配送，冷链追踪。全厂面积13441.7㎡。拥有水产车间、肉类车间、蔬果车间、净菜车间、即食果蔬车间、面条车间、即食三文鱼、干货车间。下设生产、行政、质量、人事、财务、IT模板、采购、销售部门。公司秉承客户第一，产品新鲜的要求，提供给客户和消费者最具价格竞争力的产品，同时确保产品拥有最高质量，各项生产技术不断革新，目前已通过ISO9001，ISO22000，ISO14001和OHSAS18001认证，覆盖公司所有产品。',
    leftImg:'./img/i102/js/left.png',
    rightImg:'./img/i102/js/right.png',
    centerImg:''
  }]
  // 百度地图API功能
  var map = new BMap.Map("myMap");    // 创建Map实例
  $scope.factory=$routeParams.factory?parseInt($routeParams.factory):1
  if($routeParams.factory){
    setTimeout(function () {
      $(window).scrollTop($('.three').offset().top-180)
    },0)
  }
  var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
  map.addControl(top_right_navigation);

  var setCenter=function(lat,lng,titleText,subContent){
    map.clearOverlays()
    map.centerAndZoom(new BMap.Point(lat+0.1, lng), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    // map.addControl(new BMap.MapTypeControl({
    //   mapTypes:[
    //     BMAP_NORMAL_MAP,
    //     BMAP_HYBRID_MAP
    //   ]}));
    // map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


    //自定义覆盖物

    function ComplexCustomOverlay(point){
      this._point = point;

    }
    // 继承API的BMap.Overlay
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    //2、初始化自定义覆盖物
    // 实现初始化方法
    ComplexCustomOverlay.prototype.initialize = function(map){
      // 保存map对象实例
      this._map = map;
      // 创建div元素，作为自定义覆盖物的容器
      var div = this._div = document.createElement("div");
      div.style.position='relative'
      div.style.width='630px'
      div.style.height='190px'
      div.style.padding='30px 70px 20px 100px'
      div.style.backgroundImage="url(./img/i102/marker.png)"
      div.style.backgroundSize='100% 100%'
      var titleDiv=document.createElement('div')
      var titleImg=document.createElement('img')
      var textSpan=document.createElement('span')
      var subText=document.createElement('div')
      titleImg.src='./img/i102/three7.png'
      titleImg.style.display='inline_block'
      titleImg.style.width='36px'
      titleImg.style.position='relative'
      titleImg.style.top='-6px'
      titleImg.style.marginRight='20px'

      textSpan.style.fontSize='30px'
      textSpan.innerText=titleText
      textSpan.style.fontWeight='bold'

      subText.style.fontSize='24px'
      subText.style.marginTop='20px'
      subText.style.color='#333'
      subText.innerText=subContent

      titleDiv.appendChild(titleImg)
      titleDiv.appendChild(textSpan)
      div.appendChild(titleDiv)
      div.appendChild(subText)
      // div.appendChild(arrow);

      // 将div添加到覆盖物容器中
      map.getPanes().labelPane.appendChild(div);//getPanes(),返回值:MapPane,返回地图覆盖物容器列表  labelPane呢???
      // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
      // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
      return div;

    }

    //3、绘制覆盖物
    // 实现绘制方法
    ComplexCustomOverlay.prototype.draw = function(){
      var map = this._map;
      var pixel = map.pointToOverlayPixel(this._point);
      console.log(pixel)
      this._div.style.left = pixel.x+20 + "px";
      this._div.style.top  = pixel.y-100 + "px";
    }



    //4、自定义覆盖物添加事件方法
    ComplexCustomOverlay.prototype.addEventListener = function(event,fun){
      this._div['on'+event] = fun;
    }


    var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(lat, lng));
    map.addOverlay(myCompOverlay);//将标注添加到地图中
    var myIcon = new BMap.Icon("./img/i102/pointer.png", new BMap.Size(40,57));
    var marker = new BMap.Marker(new BMap.Point(lat, lng),{icon:myIcon});
    map.addOverlay(marker);
  }
  setCenter($scope.location[$scope.factory-1].lat,$scope.location[$scope.factory-1].lng,$scope.location[$scope.factory-1].titleText,$scope.location[$scope.factory-1].subContent)
$scope.changeFactory=function (index) {
  $scope.factory=index
  setCenter($scope.location[$scope.factory-1].lat,$scope.location[$scope.factory-1].lng,$scope.location[$scope.factory-1].titleText,$scope.location[$scope.factory-1].subContent)
}

})
