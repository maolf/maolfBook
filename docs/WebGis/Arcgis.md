# Arcgis 学习记录

## ArcGIS API For Javascript 提供的三个查询功能

Esri给我们提供了三个类用于实现矢量数据查询功能：`FindTask` `QueryTask` `IdentifyTask`

- `FindTask`只能进行属性查询,`QueryTask`、`IdentifyTask`两个类既可以进行属性查询也可以进行空间查询。
- 对于`QueryTask`,`IdentifyTask`两个类，`QueryTask`只可应用于一个单独的图层，`IdentifyTask`可应用于地图服务和多个图层
- `QueryTask`可以进行简单的统计功能。

::: tip 空间查询和属性查询

**空间查询** 根据空间信息查属性，例如框选一个点、线、面查询属性信息

**属性查询** 根据属性查空间信息，例如输入一个地名，查询地名在地图上的位置，并高亮显示地块

:::

### FindTask实现属性查询

FindTask只能进行属性查询，不能做空间查询

```js
  //地图服务的URL
  const MapServer = "http://localhost:6080/arcgis/rest/services/Test/MyService/MapServer";
  //创建属性查询对象
  const findTask = new FindTask(MapServer);
  //创建属性查询参数
  const findParams = new FindParameters();

  on(dom.byId("Btn"),"click",function(){
    //是否返回给我们几何信息
    findParams.returnGeometry = true;
    //对哪一个图层进行属性查询
    findParams.layerIds = [1];
    //查询的字段
    findParams.searchFields = ["name"];
    //searchText和searchFields结合使用，即查询name=J4
    findParams.searchText = "J4";
    //执行查询对象
    findTask.execute(findParams, ShowFindResult);
  })
```

### QueryTask实现空间查询

需求：在地图上画一个图形，然后和图形相交的教学楼选择出来

分析：
  - 1.使用draw交互绘制几何形状
  - 2.根据geometry形状构建空间查询参数
  - 3.执行空间分析对象
  - 4.处理空间分析的结果

```js
  //定义一个绘图工具
  const toolBar = new Draw(map);
  //给button绑定事件
  on(dom.byId('btn'),'click', () => {
    //激活绘图工具，绘制一个面图形
    toolBar.activate(Draw.POLYGON);
  })

  //给绘图工具绑定绘图完成事件，绘图完成执行queryGraphic函数,并将绘制的geometry传入函数
  on(toolBar, "draw-complete", (result) => {
    //获得绘图得到的面
    const geometry = result.geometry;
    //关闭绘图工具
    toolBar.deactivate();
    queryGraphic(geometry);
  });

  // 编写queryGraphic函数
  function queryGraphic(geometry){
    //创建查询对象，注意：服务的后面有一个编号，代表对哪一个图层进行查询
    const queryTask = new QueryTask('"http://localhost:6080/arcgis/rest/services/Test/MyService/MapServer/1"')
    // 创建查询参数对象
    const query = new Query();
    // 空间查询的几何对象
    query.geometry = geometry;
    // 定义服务器给我们返回的字段信息，*代表返回所有字段
    query.outFields = ["*"];
    // 定义空间参考信息
    query.outSpatialReference = map.spatialReference;
    // 查询的标准，此处代表和geometry相交的图形都要返回
    query.spatialRelationship = Query.SPATIAL_REL_INTERSECTS
    // 是否返回几何信息
    query.returnGeometry = true;
    // 执行空间查询,并将查询结果做处理
    queryTask.execute(query, showQueryResult);
  }
```

### QueryTask实现属性查询
```js
  //给属性查询按钮添加click事件
  on(dom.byId("Btn"),"click",function(e){
    // 定义查询对象
    const queryTask = new QueryTask
    ("http://localhost:6080/arcgis/rest/services/Test/MyService/MapServer/1");
    //定义查询参数对象
    const query = new Query();
    //查询条件，类似于sql语句的where子句
    query.where = "name = 'J4'";;
    //返回的字段信息：*代表返回全部字段
    query.outFields = ["*"];
    //是否返回几何形状
    query.returnGeometry = true;
    //执行属性查询
    queryTask.execute(query, showQueryResult);
  })
```
### IdentifyTask实现空间查询

```js
  //定义绘图对象
  const toolBar = new Draw(map);
  //绑定点击事件
  on(dom.byId("Btn"),"click",function(e){
    //激活绘图工具：绘制面
    toolBar.activate(esri.toolbars.Draw.POLYGON);
  })
  //给绘图工具绑定绘图完成事件
  on(toolBar, "draw-complete", function (result) {
    //获得绘图得到的面
    const geometry=result.geometry;
    //关闭绘图工具
    toolBar.deactivate();
    //执行空间查询
    identifyQuery(geometry);
  });
  function identifyQuery(geometry) {
    //定义空间查询对象，注意他的参数是整个地图服务，而不是单个图层
    const identifyTask = new IdentifyTask(MapServer);
    //定义空间查询参数对象
    const params = new IdentifyParameters();
    //容差
    params.tolerance = 5;
    //是否返回几何信息
    params.returnGeometry = true;
    //空间查询的图层，此时是两个图层
    params.layerIds = [1,3];
    //空间查询的条件
    params.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
    params.width = map.width;
    params.height = map.height;
    //空间查询的几何对象
    params.geometry = geometry;
    params.mapExtent = map.extent;
    //执行空间查询
    identifyTask.execute(params,showQueryResult);
  }
```

