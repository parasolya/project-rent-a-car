"use strict";(self.webpackChunkproject_rent_a_car=self.webpackChunkproject_rent_a_car||[]).push([[21],{480:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(413),a=n(433),i=n(439),u=n(791),c="FavoritesPage_page__-QU8H",o=n(249),l=n(855),s=n(184),f=function(){for(var e=(0,u.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("favorite")))&&void 0!==e?e:[]})),r=(0,i.Z)(e,2),n=r[0],f=r[1],p=(0,a.Z)(new Set(n.map((function(e){return e.make})))).map((function(e){return{label:e,value:e}})),v=[],m=10;m<=600;m+=10)v.push(m);var d=v.map((function(e){return{label:e,value:e}}));return(0,s.jsxs)("div",{className:c,children:[(0,s.jsx)("div",{children:(0,s.jsx)(l.Z,{onSubmit:function(e){var r=e,a=n.map((function(e){var r=parseInt(e.rentalPrice.replace(/\D/g,""),10);return(0,t.Z)((0,t.Z)({},e),{},{rentalPrice:r})})).filter((function(e){return e.make===r.make&&e.rentalPrice<=r.rentalPrice&&e.mileage>=parseInt(r.from,10)&&e.mileage<=parseInt(r.to,10)}));f(a)},optionsCarBrand:p,optionsCarPrice:d})}),(0,s.jsx)(o.Z,{items:n,onChangeFavoriteArrey:function(e){var r=n.filter((function(r){return r.id!==e}));f(r)}})]})}}}]);
//# sourceMappingURL=21.93346fc5.chunk.js.map