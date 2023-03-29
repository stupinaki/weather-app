(function(){"use strict";var t={9399:function(t,e,i){var a=i(9242),n=i(3396),r=i(7139);const s=t=>((0,n.dD)("data-v-cc9a39f2"),t=t(),(0,n.Cn)(),t),o={class:"btn-wrapper"},d={key:1},c={key:0,class:"loader"},u=s((()=>(0,n._)("h2",null,"Wait a minute. We are getting data...",-1))),l=[u];function p(t,e,i,a,s,u){const p=(0,n.up)("SettingBlock"),y=(0,n.up)("WeatherList");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[(0,n._)("button",{onClick:e[0]||(e[0]=(...e)=>t.toggle&&t.toggle(...e)),class:"btn"},(0,r.zw)(t.btnSymbol),1)]),t.isSettingBlockOpen?((0,n.wg)(),(0,n.j4)(p,{key:0,cities:t.favoriteCities,"error-message":t.errorMessage,"cities-options":t.citiesOptions,onDeleteCity:t.onDeleteCity,onReplaceCity:t.onReplaceCity,onAddFirstCity:t.addFirstCity,onFindNewCities:t.getNewCitiesOption,onAddCityAndCountry:t.addNewCityWithCountry},null,8,["cities","error-message","cities-options","onDeleteCity","onReplaceCity","onAddFirstCity","onFindNewCities","onAddCityAndCountry"])):((0,n.wg)(),(0,n.iD)("div",d,[t.isLoading?((0,n.wg)(),(0,n.iD)("div",c,l)):((0,n.wg)(),(0,n.j4)(y,{key:1,"weather-data":t.weatherData},null,8,["weather-data"]))]))])}i(7658);const y={CITY_NOT_FOUND:"CITY NOT FOUND",CITY_ALREADY_EXIST:"CITY ALREADY EXIST"},h="favouriteCities",g={CITIES:h};function m(t,e){return t.some((t=>{const i=e.coords.latitude===t.coords.latitude,a=e.coords.longitude===t.coords.longitude;return i&&a}))}async function f(){try{const t=await new Promise(((t,e)=>{navigator.geolocation.getCurrentPosition((e=>t(e)),(t=>e(t)))})),{latitude:e,longitude:i}=t.coords;return{latitude:e,longitude:i}}catch(t){console.log("error:",t)}}function C(t){return null!==t&&void 0!==t}const w="d2bf83ab574a9a34513323071137f97c",v={KEY:w};async function b(t,e){const{longitude:i,latitude:a}=e,n=`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${i}&appid=${v.KEY}`;try{const e=await fetch(n),i=await e.json();return i.city=t,{data:i,error:!1}}catch(r){return{data:null,error:!0}}}async function $(t){const e=await Promise.all(t.map((t=>b(t.city,t.coords))));return e.map((t=>t.data)).filter(C)}function _(t){return{id:t.name+", "+t.country,city:t.name,country:t.country,coords:{longitude:t.lon,latitude:t.lat}}}async function k(t){const e=`https://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=100&appid=${v.KEY}`;try{const t=await fetch(e),i=await t.json();return{data:i.map(_),error:!1}}catch(i){return{data:[],error:!0}}}function D(t){const e={};return t.forEach((t=>e[t.id]=t)),Object.values(e)}async function O(t){const{longitude:e,latitude:i}=t,a=`https://api.openweathermap.org/geo/1.0/reverse?lat=${i}&lon=${e}&limit=1&appid=${v.KEY}`;try{const t=await fetch(a),e=await t.json();return{data:e.map(_),error:!1}}catch(n){return{data:null,error:!0}}}function S(t,e){const i=JSON.stringify(e);localStorage.setItem(t,i)}function N(t){const e=localStorage.getItem(t);return e?JSON.parse(e):[]}const I=t=>((0,n.dD)("data-v-6a733300"),t=t(),(0,n.Cn)(),t),T={key:0,class:"nothing-found"},F=I((()=>(0,n._)("h2",null,"You have not added any cities yet..",-1))),A=I((()=>(0,n._)("p",null,"You can add new cities by clicking on the gear",-1))),E=[F,A],L={key:1,class:"wrapper"};function M(t,e,i,a,r,s){const o=(0,n.up)("WeatherBlock");return t.weatherData.length?((0,n.wg)(),(0,n.iD)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.weatherData,(t=>((0,n.wg)(),(0,n.j4)(o,{key:t.id,"city-name":t.city,"country-code":t.sys.country,"temperature-main":t.main.temp,"temperature-feel":t.main.feels_like,sky:t.weather[0].main,humidity:t.main.humidity,pressure:t.main.pressure,"icon-code":t.weather[0].icon,visibility:t.visibility,"wind-speed":t.wind.speed},null,8,["city-name","country-code","temperature-main","temperature-feel","sky","humidity","pressure","icon-code","visibility","wind-speed"])))),128))])):((0,n.wg)(),(0,n.iD)("div",T,E))}const Y={class:"wrapper"},q={class:"full-name"},W={class:"img-temperature"},j={class:"img-container"},P=["src"],z={class:"temperature"},B={class:"feels-details"},R={class:"main-details"};function Z(t,e,i,a,s,o){return(0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("div",q,[(0,n._)("b",null,(0,r.zw)(t.fullName),1)]),(0,n._)("div",W,[(0,n._)("div",j,[(0,n._)("img",{class:"img",src:t.iconURL,alt:"weather icon"},null,8,P)]),(0,n._)("div",z,(0,r.zw)(t.mainTemperature),1)]),(0,n._)("div",B,"Feels like: "+(0,r.zw)(t.feelTemperature)+".",1),(0,n._)("div",R,[(0,n._)("div",null,"Sky: "+(0,r.zw)(t.sky),1),(0,n._)("div",null,"Pressure: "+(0,r.zw)(t.pressure)+" hPa",1),(0,n._)("div",null,"Humidity: "+(0,r.zw)(t.humidity)+"%",1),(0,n._)("div",null,"Visibility: "+(0,r.zw)(t.visibilityKM),1),(0,n._)("div",null,"Wind speed: "+(0,r.zw)(t.windSpeed)+" meter/sec",1)])])}function x(t){return"https://openweathermap.org/img/w/"+t+".png"}function K(t){return Math.round(t-273.15)+"°C"}var U=(0,n.aZ)({name:"WeatherBlock",props:{cityName:{type:String,required:!0},countryCode:{type:String,required:!0},temperatureMain:{type:Number,required:!0},temperatureFeel:{type:Number,required:!0},iconCode:{type:String,required:!0},sky:{type:String,required:!0},humidity:{type:Number,required:!0},pressure:{type:Number,required:!0},visibility:{type:Number,required:!0},windSpeed:{type:Number,required:!0}},computed:{fullName(){const{cityName:t,countryCode:e}=this.$props;return t+", "+e},mainTemperature(){return K(this.$props.temperatureMain)},feelTemperature(){return K(this.$props.temperatureFeel)},iconURL(){return x(this.$props.iconCode)},visibilityKM(){return this.$props.visibility/1e3+"km"}}}),X=i(89);const H=(0,X.Z)(U,[["render",Z],["__scopeId","data-v-ffd7c624"]]);var J=H,V=(0,n.aZ)({name:"WeatherList",components:{WeatherBlock:J},props:{weatherData:{type:Array,required:!0}}});const G=(0,X.Z)(V,[["render",M],["__scopeId","data-v-6a733300"]]);var Q=G;const tt=t=>((0,n.dD)("data-v-981a3b08"),t=t(),(0,n.Cn)(),t),et={class:"settings"},it={for:"addCity"},at={class:"input-btn-wrapper"},nt=tt((()=>(0,n._)("button",{type:"submit",class:"submit-btn"},"Submit",-1))),rt={key:0},st=tt((()=>(0,n._)("h3",null,"Perhaps you are looking for:",-1))),ot={class:"options"},dt=["onClick"];function ct(t,e,i,s,o,d){const c=(0,n.up)("CityPlate"),u=(0,n.up)("draggable");return(0,n.wg)(),(0,n.iD)("div",et,[(0,n._)("form",{onSubmit:e[4]||(e[4]=(0,a.iM)(((...e)=>t.addFirstCity&&t.addFirstCity(...e)),["prevent"]))},[(0,n._)("label",it,[(0,n._)("b",null,(0,r.zw)(t.labelText),1)]),(0,n._)("div",at,[(0,n.wy)((0,n._)("input",{id:"addCity",type:"text",class:(0,r.C_)(t.inputStyle),"onUpdate:modelValue":e[0]||(e[0]=e=>t.newCityName=e),onInput:e[1]||(e[1]=(...e)=>t.findNewCities&&t.findNewCities(...e)),onFocus:e[2]||(e[2]=(...e)=>t.onFocus&&t.onFocus(...e)),onBlur:e[3]||(e[3]=e=>t.isFocus=!1)},null,34),[[a.nr,t.newCityName]]),nt,t.citiesOptions.length>0?((0,n.wg)(),(0,n.iD)("div",rt,[st,(0,n._)("div",ot,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.citiesOptions,(e=>((0,n.wg)(),(0,n.iD)("button",{key:e.id,class:"option",type:"submit",onClick:i=>t.addCityAndCountry(e.id)},(0,r.zw)(e.id),9,dt)))),128))])])):(0,n.kq)("",!0)])],32),(0,n.Wm)(u,{list:t.cities,disabled:!t.enabled,"item-key":"city","ghost-class":"ghost",class:"plate-container",onStart:e[5]||(e[5]=e=>t.dragging=!0),onEnd:t.onEndDrag},{item:(0,n.w5)((({element:e})=>[(0,n.Wm)(c,{"city-id":e.id,onDeleteCity:t.onDeleteCity},null,8,["city-id","onDeleteCity"])])),_:1},8,["list","disabled","onEnd"])])}var ut=i(6983),lt=i.n(ut);const pt={class:"plate"};function yt(t,e,i,a,s,o){return(0,n.wg)(),(0,n.iD)("div",pt,[(0,n._)("div",null,(0,r.zw)(t.cityId),1),(0,n._)("button",{class:"btn",onClick:e[0]||(e[0]=(...e)=>t.onClick&&t.onClick(...e))},"🗑")])}var ht=(0,n.aZ)({name:"CityPlate",emits:["deleteCity"],props:{cityId:{type:String,required:!0}},methods:{onClick(){this.$emit("deleteCity",this.$props.cityId)}}});const gt=(0,X.Z)(ht,[["render",yt],["__scopeId","data-v-3a10909e"]]);var mt=gt,ft=(0,n.aZ)({name:"SettingBlock",emits:["deleteCity","replaceCity","addFirstCity","findNewCities","addCityAndCountry"],components:{CityPlate:mt,draggable:lt()},props:{cities:{type:Array,required:!0},errorMessage:{type:String,required:!1,default:""},citiesOptions:{type:Array,required:!0}},data(){return{enabled:!0,dragging:!1,isFocus:!1,newCityName:""}},methods:{findNewCities(){this.$data.newCityName&&this.$emit("findNewCities",this.$data.newCityName)},addCityAndCountry(t){this.$emit("addCityAndCountry",t),this.$data.newCityName=""},addFirstCity(){this.$data.newCityName&&(this.$emit("addFirstCity",this.$data.newCityName),this.$data.newCityName="")},onDeleteCity(t){this.$emit("deleteCity",t)},onEndDrag(){this.$data.dragging=!1,this.$emit("replaceCity")},onFocus(t){t.target?.select(),this.$data.isFocus=!0}},computed:{inputStyle(){return this.$props.errorMessage?"input-error input":"input"},labelText(){return this.$data.isFocus?"Add city:":"Add city: "+this.$props.errorMessage}}});const Ct=(0,X.Z)(ft,[["render",ct],["__scopeId","data-v-981a3b08"]]);var wt=Ct;function vt(t,e){const i=[];return e.forEach((e=>{const a=t.find((t=>{const i=t.city+", "+t.sys.country;return i===e.id}));a&&i.push(a)})),i}var bt=(0,n.aZ)({name:"App",components:{WeatherList:Q,SettingBlock:wt},data(){return{isLoading:!1,weatherData:[],errorMessage:"",citiesOptions:[],favoriteCities:[],isSettingBlockOpen:!1}},async beforeMount(){await this.initFavoritesCities(),await this.getWeatherData()},watch:{async"favoriteCities.length"(){S(g.CITIES,this.$data.favoriteCities),await this.getWeatherData()}},computed:{btnSymbol(){return this.$data.isSettingBlockOpen?"×":"⚙"}},methods:{toggle(){this.$data.isSettingBlockOpen=!this.$data.isSettingBlockOpen},addFirstCity(){const{citiesOptions:t}=this.$data;if(!t.length)return void(this.$data.errorMessage=y.CITY_NOT_FOUND);const e=t[0],i=m(this.$data.favoriteCities,e);i?this.$data.errorMessage=y.CITY_ALREADY_EXIST:(this.$data.favoriteCities.push(e),this.$data.citiesOptions=[])},onDeleteCity(t){const{favoriteCities:e}=this.$data;this.$data.favoriteCities=e.filter((e=>e.id!==t))},onReplaceCity(){const{weatherData:t,favoriteCities:e}=this.$data;S(g.CITIES,e),this.$data.weatherData=vt(t,e)},addNewCityWithCountry(t){const{citiesOptions:e}=this.$data,i=e.filter((e=>e.id===t)),a=i[0],n=m(this.$data.favoriteCities,a);n?this.$data.errorMessage=y.CITY_ALREADY_EXIST:(this.$data.favoriteCities.push(a),this.$data.citiesOptions=[])},async getNewCitiesOption(t){this.$data.isLoading=!0;const{data:e}=await k(t);if(null===e)return this.$data.errorMessage=y.CITY_NOT_FOUND,this.$data.citiesOptions=[],void(this.$data.isLoading=!1);this.$data.citiesOptions=D(e),this.$data.errorMessage="",this.$data.isLoading=!1},async initFavoritesCities(){if(this.$data.isLoading=!0,this.$data.favoriteCities=N(g.CITIES),this.$data.favoriteCities.length>0)return void(this.$data.isLoading=!1);const t=await f();if(!t)return void(this.$data.isLoading=!1);const{data:e}=await O(t),i=e?e[0]:null;i?this.$data.favoriteCities.push(i):this.$data.isLoading=!1},async getWeatherData(){this.$data.isLoading=!0,this.$data.weatherData=await $(this.$data.favoriteCities),this.$data.isLoading=!1}}});const $t=(0,X.Z)(bt,[["render",p],["__scopeId","data-v-cc9a39f2"]]);var _t=$t;(0,a.ri)(_t).mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,d=0;d<a.length;d++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[d])}))?a.splice(d--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,s=a[0],o=a[1],d=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(d)var u=d(i)}for(e&&e(a);c<s.length;c++)r=s[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},a=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(9399)}));a=i.O(a)})();
//# sourceMappingURL=app.c85fe272.js.map