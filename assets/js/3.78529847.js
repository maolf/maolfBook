(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,s,a){t.exports=a.p+"assets/img/proj4js.15626948.png"},183:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("OpenLayers默认只支持EPSG:4326和EPSG:3857，那想让它支持CGCS2000坐标系该怎么办？\n这个时候就需要自定义坐标系了，借助proj4.js（proj4js是一个转换点坐标从一个坐标系到另一个坐标系的JavaScript库，包括数据转换）即可实现")]),t._v(" "),t._m(2),t._v(" "),t._m(3),e("ul",[e("li",[e("p",[t._v("在"),e("a",{attrs:{href:"http://epsg.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://epsg.io/"),e("OutboundLink")],1),t._v("中查询目标坐标系的定义\n"),e("img",{attrs:{src:a(167),alt:"avatar"}})])]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"openlayers-学习记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openlayers-学习记录","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenLayers 学习记录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"默认支持坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认支持坐标系","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认支持坐标系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在项目中安装proj4")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("yarn add proj4\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在代码中定义当前坐标系")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" proj4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ‘proj4’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" register "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ol/proj/proj4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Projection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ol/proj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义坐标系，并注册到openlayers")]),t._v("\nproj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EPSG:4490"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' "'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("proj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("longlat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("ellps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GRS80")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("no_defs”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用register方法进行坐标系注册")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proj4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"view视图默认坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view视图默认坐标系","aria-hidden":"true"}},[this._v("#")]),this._v(" View视图默认坐标系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("View视图对象默认的坐标系是球型墨卡托投影，即 ESPG:3857。\n因此如果要支持CSGC2000的坐标系需要在View视图对象中定义投影的类型")])])}],!1,null,null,null);s.default=n.exports}}]);