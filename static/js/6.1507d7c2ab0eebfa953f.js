webpackJsonp([6],{"7I0o":function(t,i,s){"use strict";(function(t){s("Hn22");var e=s("x+hZ"),a={data:function(){return{login_url:this.$host+"/mcm/api/user/login",formData:{username:"movi@skylandertech.com",password:"666666"},rstatus:!0,loginInfo:null}},methods:{confimClick:function(){var i=this;this.formData.username,this.formData.password;this.$velocity(t(".lb-animate"),"transition.slideUpOut",{stagger:150,drag:!0,complete:function(){console.log("animated")}}),this.$velocity(this.$refs.container,{opacity:0},1e3,function(){i.$router.push({path:"/"})})},toggleStatus:function(){this.rstatus=!this.rstatus,this.rstatus&&this.loginInfo?e.a.lset("loginInfo",this.loginInfo):e.a.lset("loginInfo","")},transition:function(){this.$velocity(this.$refs.container,{opacity:1},100,function(){}),this.$velocity(t(".lb-header"),"transition.slideDownIn",{duration:1850}),this.$velocity(t(".iptbox").eq(0),"transition.slideDownIn",{duration:1400}),this.$velocity(t(".iptbox").eq(1),"transition.slideDownIn",{duration:1100}),this.$velocity(t(".iptbox").eq(2),"transition.slideDownIn",{duration:950}),this.$velocity(t(".links-box"),"transition.slideDownIn",{duration:850}),this.$velocity(t(".lb-footer"),"transition.slideDownIn",{duration:800})}},created:function(){},mounted:function(){this.transition()}};i.a=a}).call(i,s("L7Pj"))},EV1k:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7I0o").a,a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"container",staticClass:"login-container"},[s("div",{ref:"loginBox",staticClass:"login-box"},[s("section",{ref:"loginBoxHeader",staticClass:"lb-header lb-animate"}),t._v(" "),s("section",{staticClass:"lb-body"},[s("div",{staticClass:"iptbox lb-animate"},[s("i",{staticClass:"ipt-icon"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],staticClass:"ipt",attrs:{type:"text",name:"username",placeholder:"USRNAME"},domProps:{value:t.formData.username},on:{input:function(i){i.target.composing||t.$set(t.formData,"username",i.target.value)}}})]),t._v(" "),s("div",{staticClass:"iptbox lb-animate"},[s("i",{staticClass:"ipt-icon"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"ipt",attrs:{type:"password",name:"password",placeholder:"PASSWORD"},domProps:{value:t.formData.password},on:{input:function(i){i.target.composing||t.$set(t.formData,"password",i.target.value)}}})]),t._v(" "),s("div",{staticClass:"iptbox iptboxBtn lb-animate"},[s("input",{staticClass:"ipt_btn",attrs:{type:"button",name:"btn",value:"LOGIN"},on:{click:t.confimClick}})]),t._v(" "),s("div",{staticClass:"links-box lb-animate"},[s("div",{staticClass:"remember-box",on:{click:t.toggleStatus}},[s("i",{ref:"selectBox",class:t.rstatus?"selectBox selectBoxActive":"selectBox"},[s("font",[t._v("✓")])],1),t._v(" "),s("span",{staticClass:"stext"},[t._v("Remmerber me")])]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"active-link-box"},[i("a",{attrs:{href:"javascript:;"}},[this._v("Register an account.")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("section",{staticClass:"lb-footer lb-animate"},[i("span",{staticClass:"bottom-line"})])}]};var n=s("vSla")(e,a,!1,function(t){s("PMP6")},"data-v-7bf8c727",null);i.default=n.exports},Hn22:function(t,i,s){"use strict";var e=s("AA3o"),a=s.n(e),n=s("xSur"),o=s.n(n),r=function(){function t(){a()(this,t)}return o()(t,[{key:"strimBothSides",value:function(t){return"function"==typeof String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")}},{key:"strimAll",value:function(t){return t.replace(/\s/g,"")}}]),t}();i.a=new r},PMP6:function(t,i){}});
//# sourceMappingURL=6.1507d7c2ab0eebfa953f.js.map