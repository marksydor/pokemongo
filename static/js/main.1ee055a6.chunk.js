(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(3),r=n.n(a),c=n(19),s=n.n(c),o=(n(25),n(10)),i=n(2),A=n.n(i),u=n(5),p=n(6),j=n(1),m=(n(27),n(20).create({baseURL:"https://pokeapi.co/api/v2/"})),l=function(t){return t[0].toUpperCase()+t.slice(1)},b={getPocemons:function(){var t=Object(u.a)(A.a.mark((function t(){var e,n,a,r,c,s,o,i,u,p,b,d=arguments;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.length>0&&void 0!==d[0]?d[0]:12,n=d.length>1&&void 0!==d[1]?d[1]:"0",a=d.length>2?d[2]:void 0,r=[],t.next=6,m.get("pokemon");case 6:c=(c=t.sent).data.count,s=1+parseInt(n);case 9:if(!(s<c&&r.length<e)){t.next=21;break}return console.log("->",s),t.next=13,m.get("pokemon/".concat(s,"/"));case 13:for(o=t.sent,i=!0,u=o.data.types.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{type:Object(j.a)(Object(j.a)({},t.type),{},{name:l(t.type.name)})})})),p=0;p<u.length&&i;p++)for(b=0;b<a.length&&i;b++)u[p].type.name===a[b]&&(i=!1);i&&r.push({name:l(o.data.name),types:u,img:"https://pokeres.bastionbot.org/images/pokemon/".concat(s,".png"),id:s});case 18:s++,t.next=9;break;case 21:return t.abrupt("return",{offSet:s-1,pokemons:[].concat(r)});case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getPocemonsByTypes:function(){var t=Object(u.a)(A.a.mark((function t(){var e,n,a,r,c,s,o,i=arguments;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:12,n=i.length>1&&void 0!==i[1]?i[1]:0,i.length>2?i[2]:void 0,t.next=5,m.get("pokemon/?limit=".concat(e,"&offset=").concat(n));case 5:return a=t.sent,r=a.data.results.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{name:l(t.name)})})),t.next=9,Promise.all(r.map(function(){var t=Object(u.a)(A.a.mark((function t(e){var n,a,r,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(n=e.url.split("/"))[6],t.next=4,m.get("pokemon/".concat(n,"/"));case 4:return a=t.sent,r=a.data.types.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{type:Object(j.a)(Object(j.a)({},t.type),{},{name:l(t.type.name)})})})),c="https://pokeres.bastionbot.org/images/pokemon/".concat(n,".png"),t.abrupt("return",{types:r,img:c,id:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:for(c=t.sent,s=[],o=0;o<e;o++)s.push(Object(j.a)(Object(j.a)({},r[o]),c[o]));return t.abrupt("return",s);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getPocemonInfo:function(){var t=Object(u.a)(A.a.mark((function t(e){var n,a,r,c,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("pokemon/".concat(e,"/"));case 2:return n=t.sent,a="https://pokeres.bastionbot.org/images/pokemon/".concat(e,".png"),(r=n.data.stats.map((function(t){var e=t.stat.name;return console.log(e),e.indexOf("special-")>=0&&(e="SP "+((e=e.slice(8))[0].toUpperCase()+e.slice(1))),{stat:t.base_stat,name:l(e)}}))).push({stat:n.data.moves.length,name:"Total moves"}),r.push({stat:n.data.weight,name:"Weight"}),c=n.data.types.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{type:Object(j.a)(Object(j.a)({},t.type),{},{name:l(t.type.name)})})})),s={types:c,stats:r,name:l(n.data.name),id:e},t.abrupt("return",Object(j.a)(Object(j.a)({},s),{},{img:a}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getTags:function(){var t=Object(u.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m.get("type").then((function(t){return t.data.results.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{name:l(t.name)})}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},d="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAGwAawMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgQGAQMFB//aAAgBAQAAAAD9b+/IAUstsvK4AGU1E6dwDnJZTUTU7gcdZTUTcqXDkZmU1ExTuc8/UZTUTHPmfUBlNRMc5VuBlNRM46p3BlNRNyMzlS4ZTUT55+oKdxlNRMA5UuZT7d6QAp/A8rwAQzX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAH//xAAvEAACAQIDBAoCAwEAAAAAAAABAgMABAURUhITFTIQICExNHFykZKxMGEiUcFC/9oACAEBAAE/ALWCOFInuAzxP/3n2qf3S4XZMoIDZH91wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71wiz0t71d2llBkiIzStyrnV3amO4kRpmBBGYBrDo45MPjVxmClI0uGyKkhLWzditooEH8N1dbkBEG1K3KtWlpus5ZDtTN3t/X6FYp4+49Q+qwogWUXlTorqVYZg0ry4bKEclrVjkraKBB693dCEBEG1K3KtWtpus5JTtSt3noxTx9x6h9VhRAsovLodFdSrDMGkeTDZBHIS1s3YraKBz6t3dCEBEG1K3KtW1ru85Zm2pW5m/zpxTx9x6h9VhRAsovLpZFdSrKCppHkwyQRydtsx7G00D03V0IAqIu1K3KtWtoIs5ZTtSt3nqYp4+49Q+qwogWUXl1HRXUqwzBpHfDZdhyzWrch0UDnV3dCEBEG1K3KtW9tuQZJTtSt3nq4p4+49Q+qwogWUXl1WRXVlYZgipLibCm3Ge8jcHd/2nn+qsrUIN87B5X72/wdbFPH3HqH1WFECyi8urd3QhARBtStyrVvYIEZp/5yPzUry4bKEclrVjkraKBB6uKePuPUPqsKIFlF5dS7uhCAiDalblWra13ecszbUrczf50OiupVhmDSPJhsgjkJa2bsVtFA59TFPH3HqH1WFECyi8um6uhAFRF2pW5Vq1tBFnLKdqVu89RkV1KsoKmkeTDJBHJ22zHsbTQPTinj7j1D6rCiBZReXRd3QhARBtStyrVvbbkGSU7Urd56zorqVYZg0jvhsuw5ZrVuQ6KBz6MU8fceofVYUQLKLyq6utyAiDalblWrS03Wcsh2pm72/r9D8DIrqysMwRSNLhsipIS1s3YraKBBrFPH3HqH1VtdiCxgRBtSuMlWrW03Wckp2pW7z+J0V1KsMwaV5cNlCOS1qxyVtFYlk19OQewkfVWd5PAu0jDa7syAa4zf61+IrjN/rX4iuM3+tfiK4zf61+IrjN/rX4iuM3+tfiK4zf61+IrjN/rX4iuM3+tfiK4zf61+IrjN/rX4ipMUu5VKuykEaammmWVwJGyBr//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AR//Z",f=n(0),h=function(t){var e=t.stats.map((function(t,e){return Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.stat})]},e)})),n="#000",a=n.substr(0,n.length-t.id.toString().length)+t.id.toString();return Object(f.jsxs)("div",{className:"pocemonInfoCard",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:t.img?t.img:d,alt:t.name})}),Object(f.jsxs)("h2",{children:[t.name," ",a]}),Object(f.jsx)("div",{className:"statsTable",children:e})]})},g=function(t){var e=Object(a.useState)(!0),n=Object(p.a)(e,2),r=n[0],c=n[1];return t.active&&t.notActive&&t.loadNewPokemonsByTags?Object(f.jsx)(f.Fragment,{children:r?Object(f.jsxs)("div",{className:"tag ".concat(t.name),onClick:function(){t.active(),c(!1),t.loadNewPokemonsByTags()},children:[" ",t.name," "]}):Object(f.jsxs)("div",{className:"tag White",onClick:function(){t.notActive(),c(!0),t.loadNewPokemonsByTags()},children:[" ",t.name," "]})}):Object(f.jsxs)("div",{className:"tag ".concat(t.name),children:[" ",t.name," "]})},O=function(t){var e=t.types.map((function(t){return Object(f.jsx)(g,{name:t.type.name},t.slot)}));return Object(f.jsxs)("div",{className:"pocemonItem",onClick:function(){return t.setInfo(t.id)},children:[Object(f.jsx)("img",{src:t.img?t.img:d,alt:t.name}),Object(f.jsx)("h3",{children:t.name}),e]})},x=n.p+"static/media/pokemon.bfa18316.svg",v=function(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:x,alt:"loading"})})},k=function(t,e,n,r){return b.getPocemons(t,e,n).then((function(t){return console.log(t),t.pokemons.map((function(t){return Object(a.createElement)(O,Object(j.a)(Object(j.a)({},t),{},{key:t.id,setInfo:r}))}))}))};var y=function(){var t=Object(a.useState)(),e=Object(p.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(),s=Object(p.a)(c,2),i=s[0],m=s[1],l=Object(a.useState)(),d=Object(p.a)(l,2),O=d[0],x=d[1],y=Object(a.useState)(12),w=Object(p.a)(y,2),B=w[0],E=w[1],C=Object(a.useState)([]),I=Object(p.a)(C,2),T=I[0],N=I[1],Q=Object(a.useState)(!1),U=Object(p.a)(Q,2),K=U[0],S=U[1],V=function(){var t=Object(u.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,k(12,0,T,z);case 3:e=t.sent,r(e),E(e[e.length-1].key),S(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(u.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=m,t.next=3,b.getPocemonInfo(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(t){var e=T;e.push(t),N(e)},F=function(t){for(var e=T,n=0;n<e.length;n++)e[n]===t&&e.splice(n,1);N(e)},R=function(){var t=Object(u.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,k(12,B,T,z);case 3:e=t.sent,r([].concat(Object(o.a)(n),Object(o.a)(e))),E(e[e.length-1].key),S(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(Object(u.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,k(12,0,[],z);case 3:t.t1=t.sent,(0,t.t0)(t.t1),b.getTags().then((function(t){x(t.map((function(t,e){return Object(f.jsx)(g,{name:t.name,active:function(){return D(t.name)},notActive:function(){return F(t.name)},loadNewPokemonsByTags:function(){return V()}},e)})))}));case 6:case"end":return t.stop()}}),t)}))),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"pokedexHeader",children:Object(f.jsx)("h1",{children:"Pokedex"})}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("div",{className:"infoTags",children:O}),Object(f.jsxs)("div",{className:"pocemonsList",children:[!K&&n,K&&Object(f.jsx)(v,{}),K?Object(f.jsx)("button",{className:"loadMore Dis",disabled:!0,children:Object(f.jsx)("h2",{children:"Load More"})}):Object(f.jsx)("button",{className:"loadMore",onClick:R,children:Object(f.jsx)("h2",{children:"Load More"})})]}),Object(f.jsx)("div",{className:"pocemonInfo",children:i&&Object(f.jsx)(h,Object(j.a)({},i))})]})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),w()}},[[47,1,2]]]);
//# sourceMappingURL=main.1ee055a6.chunk.js.map