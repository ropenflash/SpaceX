(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{26:function(e,t,a){e.exports=a(60)},31:function(e,t,a){},32:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(23),r=a(9),s=(a(31),a(32),a(24)),i=a(4),u=a(5),o=a(7),m=a(6),d=a(10),h=a.n(d);a(50),a(51);var v=function(e){var t=e.flight,a=t.launch_success,n=t.launch_year,l=t.launch_landing,r=t.mission_name,s=t.flight_number,i=(t.mission_id,t.links.mission_patch_small);return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("img",{className:"card-image",src:i})),c.a.createElement("div",{className:"card-title"},r," #",s),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,"Mission Ids:",c.a.createElement("span",null,1," "),"   "),c.a.createElement("div",null,"Launch Year:",c.a.createElement("span",null," ",n)),c.a.createElement("div",null,"Successful Launch:",c.a.createElement("span",null," ",a&&a.toString())),c.a.createElement("div",null,"Successful Landing:",c.a.createElement("span",null,l))))};a(52);var f=function(e){var t=e.flights.map((function(e){return c.a.createElement(v,{key:e.flight_number,flight:e})}));return c.a.createElement("div",{className:"Container"},t)};a(53);var p=function(e){var t=e.btnText,a=e.setValue,n=e.arr,l=e.objSetter,r=e.checked,s=e.urlDesignator,i=r?"-active":"";return c.a.createElement("a",{className:"".concat("Button").concat(i),onClick:function(e){!function(e,t){e.preventDefault();var c=n.map((function(e){return e.value.toString()===t?{value:e.value,checked:!0}:{value:e.value,checked:!1}}));l(c),a(s,t)}(e,t)},href:"/".concat(t)},t)},E=(a(54),[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={yearObjArr:E.map((function(e){return{value:e,checked:!1}})),landBtns:[{value:!0,checked:!1},{value:!1,checked:!1}],launchBtns:[{value:!0,checked:!1},{value:!1,checked:!1}]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=function(t,a,n,l){return t.map((function(r){return c.a.createElement(p,Object.assign({key:r.value.toString(),btnText:r.value.toString(),checked:r.checked,setValue:a,arr:t},e.props,{urlDesignator:l,objSetter:n}))}))},a=this.state,n=a.yearObjArr,l=a.landBtns,r=a.launchBtns,s=this.props.handleFilter;return c.a.createElement("div",{className:"Filters"},c.a.createElement("div",{className:"filters-title"},"Filters"),c.a.createElement("div",{className:"year"},"Launch Year"),c.a.createElement("div",{className:"controls"},t(n,s,(function(t){e.setState({yearObjArr:t})}),"year")),c.a.createElement("div",{className:"launch"},"Successful Launch"),c.a.createElement("div",{className:"controls"},t(r,s,(function(t){e.setState({launchBtns:t})}),"launch")),c.a.createElement("div",{className:"landing"},"Successful Landing"),c.a.createElement("div",{className:"controls"},t(l,s,(function(t){e.setState({landBtns:t})}),"land")))}}]),a}(c.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n,c;return Object(i.a)(this,a),n=t.call(this,e),e.initialData?c=e.initialData:(c=window.__initial_data,delete window.__initial_data),n.state=c||{},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.year,n=t.launch,c=t.land,l=a?"&launch_year=".concat(a):"",r="true"===n?"&launch_success=true":"",s="true"===c?"&land_success=true":"";h.a.get("https://api.spacexdata.com/v3/launches?limit=100".concat(l).concat(r).concat(s)).then((function(t){e.setState({flights:t.data})}))}},{key:"UNSAFE_componentWillUpdate",value:function(e,t){var a=this,n=t.year,c=t.launch,l=t.land;if(n!==this.state.year||c!==this.state.launch||l!==this.state.land){var r=n?"&launch_year=".concat(n):"",s="true"===c?"&launch_success=true":"",i="true"===l?"&land_success=true":"";h.a.get("https://api.spacexdata.com/v3/launches?limit=100".concat(r).concat(s).concat(i)).then((function(e){a.setState({flights:e.data})}))}}},{key:"render",value:function(){var e=this,t=this.state.flights||[];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},"SpaceX Launch Programs"),c.a.createElement("div",{className:"content"},c.a.createElement(g,{handleFilter:function(t,a){e.setState(Object(s.a)({},t,a),(function(){var t=e.state,a=t.year,n=t.launch,c=t.land,l=a?"year=".concat(a):"",r="true"===n?"&launchSuccess=true":"",s="true"===c?"&landSuccess=true":"";window.history.pushState({},"","filter?".concat(l).concat(r).concat(s))}))}}),c.a.createElement("div",null,c.a.createElement(f,{flights:t}),c.a.createElement("div",{className:"developer"},"Developed By: ",c.a.createElement("span",null,"Rishab Gupta")))))}}]),a}(n.Component);Object(l.hydrate)(c.a.createElement(r.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a303c4ef.chunk.js.map