(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(e,t,i){"use strict";i.r(t),i.d(t,"HomePageModule",(function(){return y}));var o=i("L9iM"),n=i("2vsk"),s=i("PCNd"),a=i("ofXK"),c=i("TEn/"),r=i("3Pt+"),g=i("tyNb"),l=i("fXoL"),b=i("92Lm"),d=i("EnSQ"),p=i("Whzt");function m(e,t){if(1&e&&l.Ib(0,"img",12),2&e){const e=l.Yb().$implicit;l.cc("src",e.images[0],l.gc)}}function h(e,t){1&e&&l.Ib(0,"img",13)}function u(e,t){if(1&e){const e=l.Nb();l.Mb(0,"ion-col",7),l.Mb(1,"ion-card",8),l.Ub("click",(function(){l.fc(e);const i=t.$implicit;return l.Yb().goToSubcategory(i)})),l.Mb(2,"span",9),l.kc(3),l.Lb(),l.ic(4,m,1,1,"img",10),l.ic(5,h,1,0,"ng-template",null,11,l.jc),l.Lb(),l.Lb()}if(2&e){const e=t.$implicit,i=l.ec(6);l.xb(3),l.mc(" ",e.name," "),l.xb(1),l.bc("ngIf",(null==e.images?null:e.images.length)>0)("ngIfElse",i)}}let f=(()=>{class e{constructor(e,t,i,o){this.route=e,this.helper=t,this.dataService=i,this.router=o,this.slideOpts={initialSlide:1,speed:400}}ngOnInit(){this.getCategories()}getCategories(){this.dataService.getAllCategories().subscribe(e=>{console.log("%c response while adding the categories","color: yellow",e),this.allCategories=e.data.categories},e=>{console.log("%c error while adding the categories","color: yellow",e)})}goToSubcategory(e){!0===e.hasSubCategory?this.router.navigate(["subcategory/"+e.id]):(console.log("display snackbar"),this.helper.presentToast("No SubCategories and Products"))}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(g.a),l.Hb(b.a),l.Hb(d.a),l.Hb(g.g))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-home"]],decls:9,vars:3,consts:[[1,"ion-no-border"],[3,"title"],["pager","true",3,"options"],[1,"slide"],[1,"banner"],["src","../../assets/images/homes/home.jpg","alt",""],["class","4","size","4",4,"ngFor","ngForOf"],["size","4",1,"4"],[1,"card",3,"click"],[1,"card-banner"],["class","card-image",3,"src",4,"ngIf","ngIfElse"],["dummyImage",""],[1,"card-image",3,"src"],["src","../../assets/images/homes/dish.jpg",1,"card-image"]],template:function(e,t){1&e&&(l.Mb(0,"ion-header",0),l.Ib(1,"app-header",1),l.Lb(),l.Mb(2,"ion-content"),l.Mb(3,"ion-slides",2),l.Mb(4,"ion-slide",3),l.Ib(5,"span",4),l.Ib(6,"img",5),l.Lb(),l.Lb(),l.Mb(7,"ion-row"),l.ic(8,u,7,3,"ion-col",6),l.Lb(),l.Lb()),2&e&&(l.xb(1),l.bc("title","Categories"),l.xb(2),l.bc("options",t.slideOpts),l.xb(5),l.bc("ngForOf",t.allCategories))},directives:[c.h,p.a,c.g,c.o,c.n,c.m,a.h,c.f,c.e,a.i],styles:[".slide[_ngcontent-%COMP%]{width:550px!important}.cart[_ngcontent-%COMP%]{font-size:22px;padding-right:10px;padding-left:10px}.card[_ngcontent-%COMP%]{height:150px}.card-image[_ngcontent-%COMP%]{height:100%;width:100%}.card-banner[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;background-color:rgba(63,55,55,.42);color:#fff;bottom:0;text-transform:capitalize;padding-top:3px;padding-bottom:3px}"]}),e})();const w=[{path:"",component:f},{path:":id",component:f}];let M=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[g.i.forChild(w)],g.i]}),e})(),y=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},providers:[n.a],imports:[[a.b,r.a,c.r,M,s.a,o.HeaderPageModule]]}),e})()}}]);