webpackJsonp([7],{"3YW+":function(t,e){},YUY4:function(t,e){},k2bH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("x+hZ");var n={data:function(){return{}},methods:{initMap:function(){var t=new BMap.Map("mapBox");t.centerAndZoom(new BMap.Point(114.065113,22.609812),12);new BMapLib.TrafficControl({showPanel:!0});var e=new BMap.TrafficLayer;t.addTileLayer(e);!function(e,a,n){new BMap.DrivingRoute(t,{renderOptions:{map:t,autoViewport:!0},policy:n}).search(e,a)}("深圳市龙岗区星河WORLD A座","景鹏大厦",[BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS][0]),t.enableScrollWheelZoom(),t.enableContinuousZoom()}},created:function(){},mounted:function(){this.initMap()}},i=(a("YUY4"),n),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"container",staticClass:"map-container"},[this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sectionMap"},[a("div",{staticClass:"mapBox",attrs:{id:"mapBox"}}),t._v(" "),a("div",{staticClass:"mapInfo"},[a("h3",{staticClass:"titleArea"},[t._v("Grand Canyon Palace")]),t._v(" "),a("p",{staticClass:"stitleAreat itleAreaStreet"},[t._v("25 E Odgen Avenue")]),t._v(" "),a("p",{staticClass:"stitleAreat titleAreaCity"},[t._v("Las Vegas. NV")]),t._v(" "),a("p",{staticClass:"stitleAreat titleCountry"},[t._v("United States")])])])}]};var r=a("vSla")(i,s,!1,function(t){a("3YW+")},"data-v-6dd325fb",null);e.default=r.exports}});
//# sourceMappingURL=7.35a655ae75e8ba709c7b.js.map