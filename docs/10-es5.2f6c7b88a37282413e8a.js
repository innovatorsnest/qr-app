!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(n,i,o){"use strict";o.r(i),o.d(i,"HomePageModule",(function(){return I}));var a=o("L9iM"),r=o("2vsk"),c=o("PCNd"),s=o("ofXK"),l=o("TEn/"),g=o("3Pt+"),b=o("tyNb"),d=o("fXoL"),p=o("92Lm"),u=o("EnSQ"),f=o("Whzt");function h(e,t){if(1&e&&d.Ib(0,"img",12),2&e){var n=d.Yb().$implicit;d.cc("src",n.images[0],d.gc)}}function m(e,t){1&e&&d.Ib(0,"img",13)}function y(e,t){if(1&e){var n=d.Nb();d.Mb(0,"ion-col",7),d.Mb(1,"ion-card",8),d.Ub("click",(function(){d.fc(n);var e=t.$implicit;return d.Yb().goToSubcategory(e)})),d.Mb(2,"span",9),d.kc(3),d.Lb(),d.ic(4,h,1,1,"img",10),d.ic(5,m,1,0,"ng-template",null,11,d.jc),d.Lb(),d.Lb()}if(2&e){var i=t.$implicit,o=d.ec(6);d.xb(3),d.mc(" ",i.name," "),d.xb(1),d.bc("ngIf",(null==i.images?null:i.images.length)>0)("ngIfElse",o)}}var v,w,C,M=((v=function(){function n(t,i,o,a){e(this,n),this.route=t,this.helper=i,this.dataService=o,this.router=a,this.slideOpts={initialSlide:1,speed:400}}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){this.getCategories()}},{key:"getCategories",value:function(){var e=this;this.dataService.getAllCategories().subscribe((function(t){console.log("%c response while adding the categories","color: yellow",t),e.allCategories=t.data.categories}),(function(e){console.log("%c error while adding the categories","color: yellow",e)}))}},{key:"goToSubcategory",value:function(e){!0===e.hasSubCategory?this.router.navigate(["subcategory/"+e.id]):(console.log("display snackbar"),this.helper.presentToast("No SubCategories and Products"))}}])&&t(i.prototype,o),a&&t(i,a),n}()).\u0275fac=function(e){return new(e||v)(d.Hb(b.a),d.Hb(p.a),d.Hb(u.a),d.Hb(b.g))},v.\u0275cmp=d.Bb({type:v,selectors:[["app-home"]],decls:9,vars:3,consts:[[1,"ion-no-border"],[3,"title"],["pager","true",3,"options"],[1,"slide"],[1,"banner"],["src","../../assets/images/homes/home.jpg","alt",""],["class","4","size","4",4,"ngFor","ngForOf"],["size","4",1,"4"],[1,"card",3,"click"],[1,"card-banner"],["class","card-image",3,"src",4,"ngIf","ngIfElse"],["dummyImage",""],[1,"card-image",3,"src"],["src","../../assets/images/homes/dish.jpg",1,"card-image"]],template:function(e,t){1&e&&(d.Mb(0,"ion-header",0),d.Ib(1,"app-header",1),d.Lb(),d.Mb(2,"ion-content"),d.Mb(3,"ion-slides",2),d.Mb(4,"ion-slide",3),d.Ib(5,"span",4),d.Ib(6,"img",5),d.Lb(),d.Lb(),d.Mb(7,"ion-row"),d.ic(8,y,7,3,"ion-col",6),d.Lb(),d.Lb()),2&e&&(d.xb(1),d.bc("title","Categories"),d.xb(2),d.bc("options",t.slideOpts),d.xb(5),d.bc("ngForOf",t.allCategories))},directives:[l.h,f.a,l.g,l.o,l.n,l.m,s.h,l.f,l.e,s.i],styles:[".slide[_ngcontent-%COMP%]{width:550px!important}.cart[_ngcontent-%COMP%]{font-size:22px;padding-right:10px;padding-left:10px}.card[_ngcontent-%COMP%]{height:150px}.card-image[_ngcontent-%COMP%]{height:100%;width:100%}.card-banner[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;background-color:rgba(63,55,55,.42);color:#fff;bottom:0;text-transform:capitalize;padding-top:3px;padding-bottom:3px}"]}),v),x=[{path:"",component:M},{path:":id",component:M}],k=((C=function t(){e(this,t)}).\u0275mod=d.Fb({type:C}),C.\u0275inj=d.Eb({factory:function(e){return new(e||C)},imports:[[b.i.forChild(x)],b.i]}),C),I=((w=function t(){e(this,t)}).\u0275mod=d.Fb({type:w}),w.\u0275inj=d.Eb({factory:function(e){return new(e||w)},providers:[r.a],imports:[[s.b,g.a,l.r,k,c.a,a.HeaderPageModule]]}),w)}}])}();