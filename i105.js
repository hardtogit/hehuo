iweb.controller('i105', function($scope,$routeParams) {
  $scope.entity={}
  // 百度地图API功能
  var map = new BMap.Map("myMapTwo");    // 创建Map实例
  map.centerAndZoom(new BMap.Point(116.504, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
  //添加地图类型控件
  var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
  map.addControl(top_right_navigation);
  map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
  // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

  if($(window).width()>993) {
    var setCenter = function (lng, lat, titleText, subContent) {
      //自定义覆盖物

      function ComplexCustomOverlay(point) {
        this._point = point;

      }

      // 继承API的BMap.Overlay
      ComplexCustomOverlay.prototype = new BMap.Overlay();
      //2、初始化自定义覆盖物
      // 实现初始化方法
      ComplexCustomOverlay.prototype.initialize = function (map) {
        // 保存map对象实例
        this._map = map;
        // 创建div元素，作为自定义覆盖物的容器
        var div = this._div = document.createElement("div");
        div.style.position = 'relative'
        div.style.width = '630px'
        div.style.height = '190px'
        div.style.padding = '30px 70px 20px 100px'
        div.style.backgroundImage = "url(./img/i102/marker.png)"
        div.style.backgroundSize = '100% 100%'
        var titleDiv = document.createElement('div')
        var titleImg = document.createElement('img')
        var textSpan = document.createElement('span')
        var subText = document.createElement('div')
        titleImg.src = './img/i102/three7.png'
        titleImg.style.display = 'inline_block'
        titleImg.style.width = '36px'
        titleImg.style.position = 'relative'
        titleImg.style.top = '-6px'
        titleImg.style.marginRight = '20px'

        textSpan.style.fontSize = '30px'
        textSpan.innerText = titleText
        textSpan.style.fontWeight = 'bold'

        subText.style.fontSize = '24px'
        subText.style.marginTop = '20px'
        subText.style.color = '#333'
        subText.innerText = subContent

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
      ComplexCustomOverlay.prototype.draw = function () {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        console.log(pixel)
        this._div.style.left = pixel.x + 20 + "px";
        this._div.style.top = pixel.y - 100 + "px";
      }


      //4、自定义覆盖物添加事件方法
      ComplexCustomOverlay.prototype.addEventListener = function (event, fun) {
        this._div['on' + event] = fun;
      }


      var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(lng, lat));
      map.addOverlay(myCompOverlay);//将标注添加到地图中
      var myIcon = new BMap.Icon("./img/i102/pointer.png", new BMap.Size(40, 57));
      var marker = new BMap.Marker(new BMap.Point(lng,lat), {icon: myIcon});
      map.addOverlay(marker);
    }
    setTimeout(function () {
      window.ajax({
        obj:'user',
        act:'cooperationread',
        location:'pc',
      },function (jo) {
        $scope.entity=jo.info

        // setCenter(116.307502,39.819898,'全国总部办公室','北京市丰台区郭公庄中街20号院房天下大厦A座7楼')
        setCenter(jo.info.longitude,jo.info.latitude,jo.info.title,jo.info.address)
      })
    },300)
  }else{
    var setCenter = function ( lng, lat,titleText, subContent) {
      lng=parseFloat(lng)
      lat=parseFloat(lat)
      map.clearOverlays()
      map.centerAndZoom(new BMap.Point(lng + 0.18, lat), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes:[
      //     BMAP_NORMAL_MAP,
      //     BMAP_HYBRID_MAP
      //   ]}));
      // map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
      // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


      //自定义覆盖物

      function ComplexCustomOverlay(point) {
        this._point = point;

      }

      // 继承API的BMap.Overlay
      ComplexCustomOverlay.prototype = new BMap.Overlay();
      //2、初始化自定义覆盖物
      // 实现初始化方法
      ComplexCustomOverlay.prototype.initialize = function (map) {
        // 保存map对象实例
        this._map = map;
        // 创建div元素，作为自定义覆盖物的容器
        var div = this._div = document.createElement("div");
        div.style.position = 'relative'
        div.style.width = '315px'
        div.style.height = '85px'
        div.style.padding = '15px 35px 10px 50px'
        div.style.backgroundImage = "url(./img/i102/marker.png)"
        div.style.backgroundSize = '100% 100%'
        var titleDiv = document.createElement('div')
        var titleImg = document.createElement('img')
        var textSpan = document.createElement('span')
        var subText = document.createElement('div')
        titleImg.src = './img/i102/three7.png'
        titleImg.style.display = 'inline_block'
        titleImg.style.width = '18px'
        titleImg.style.position = 'relative'
        titleImg.style.top = '-3px'
        titleImg.style.marginRight = '10px'

        textSpan.style.fontSize = '15px'
        textSpan.innerText = titleText
        textSpan.style.fontWeight = 'bold'

        subText.style.fontSize = '12px'
        subText.style.marginTop = '10px'
        subText.style.color = '#333'
        subText.innerText = subContent

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
      ComplexCustomOverlay.prototype.draw = function () {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        console.log(pixel)
        this._div.style.left = pixel.x + 10 + "px";
        this._div.style.top = pixel.y - 50 + "px";
      }


      //4、自定义覆盖物添加事件方法
      ComplexCustomOverlay.prototype.addEventListener = function (event, fun) {
        this._div['on' + event] = fun;
      }


      var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(lng, lat));
      map.addOverlay(myCompOverlay);//将标注添加到地图中
      var myIcon = new BMap.Icon("./img/i102/pointer.png", new BMap.Size(20, 28));
      myIcon.setImageSize(new BMap.Size(20, 28))
      var marker = new BMap.Marker(new BMap.Point(lng, lat), {icon: myIcon});
      map.addOverlay(marker);
    }
    setTimeout(function () {
      window.ajax({
        obj:'user',
        act:'cooperationread',
        location:'pc',
      },function (jo) {
        $scope.entity=jo.info
        console.log(setCenter,'ssssssssssssssssss')
        setCenter(jo.info.longitude,jo.info.latitude,jo.info.title,jo.info.address)
      })
    },300)
  }
})
