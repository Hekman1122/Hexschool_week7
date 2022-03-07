"use strict";(self["webpackChunkhexschoolweek7"]=self["webpackChunkhexschoolweek7"]||[]).push([[670],{6670:function(l,e,t){t.r(e),t.d(e,{default:function(){return $l}});var o=t(6252),n=t(3577);const a={class:"container"},i=(0,o._)("h2",{class:"text-center h3"},"產品列表",-1),s={class:"text-end"},d={class:"table text-center table-hover"},r=(0,o._)("thead",null,[(0,o._)("tr",{class:"fs-5"},[(0,o._)("th",{scope:"col"},"產品名稱"),(0,o._)("th",{scope:"col"},"原價"),(0,o._)("th",{scope:"col"},"售價"),(0,o._)("th",{scope:"col"},"是否啟用"),(0,o._)("th",{scope:"col"},"編輯")])],-1),c={class:"fs-6"},u={scope:"row"},m={key:0,class:"text-success"},p={key:1,class:"text-muted"},g=["onClick"],b=(0,o.Uk)(" / "),_=["onClick"];function h(l,e,t,h,f,y){const P=(0,o.up)("pagination"),v=(0,o.up)("deleteModal"),U=(0,o.up)("updateModal"),w=(0,o.up)("editModal");return(0,o.wg)(),(0,o.iD)("div",a,[i,(0,o._)("div",s,[(0,o._)("button",{type:"button",class:"btn btn-outline-success mb-0 mt-1",onClick:e[0]||(e[0]=(...l)=>y.openUpdateModal&&y.openUpdateModal(...l))},"新增品項")]),(0,o._)("table",d,[r,(0,o._)("tbody",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.products,(l=>((0,o.wg)(),(0,o.iD)("tr",{key:l.id},[(0,o._)("th",u,(0,n.zw)(l.title),1),(0,o._)("td",null,(0,n.zw)(l.origin_price),1),(0,o._)("td",null,(0,n.zw)(l.price),1),(0,o._)("td",null,[l.is_enabled?((0,o.wg)(),(0,o.iD)("span",m,"啟用")):((0,o.wg)(),(0,o.iD)("span",p,"未啟用"))]),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-outline-dark btn-sm me-2",onClick:e=>y.openEditModal(l)},"修改",8,g),b,(0,o._)("button",{type:"button",class:"btn btn-outline-success btn-sm ms-2",onClick:e=>y.openDeleModal(l)},"刪除",8,_)])])))),128))])]),(0,o.Wm)(P,{pages:f.pagination,onChangePage:y.getProducts},null,8,["pages","onChangePage"]),(0,o.Wm)(v,{target:f.temp,ref:"delModal",onDelItem:y.deleteProduct},null,8,["target","onDelItem"]),(0,o.Wm)(U,{ref:"updateModal",onEmitUpdate:y.updateProduct},null,8,["onEmitUpdate"]),(0,o.Wm)(w,{ref:"editModal",onEmitUpdate:y.updateProduct,product:f.temp},null,8,["onEmitUpdate","product"])])}var f=t(8004),y=t(9121),P=t(9963);const v={class:"modal fade",id:"editModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog modal-dialog-centered"},w={class:"modal-content"},x=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"產品編輯頁面"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},$={class:"row"},V={class:"col-6"},k=(0,o._)("label",{for:"title",class:"form-label"},"產品標題",-1),C=(0,o._)("label",{for:"category",class:"form-label"},"產品類型",-1),D=(0,o._)("label",{for:"origin_price",class:"form-label"},"產品原價",-1),E=(0,o._)("label",{for:"price",class:"form-label"},"產品售價",-1),z=(0,o._)("label",{for:"unit",class:"form-label"},"產品單位",-1),Z=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),L=(0,o._)("label",{for:"content",class:"form-label"},"產品內容",-1),W={class:"col-6"},A=(0,o._)("label",{for:"is_enabled",class:"form-label"},"產品是否上架",-1),I=(0,o._)("label",{for:"num",class:"form-label"},"產品數量",-1),N=(0,o._)("label",{for:"calorie",class:"form-label"},"產品熱量",-1),S=(0,o._)("label",{for:"imageUrl",class:"form-label"},"產品圖片主網址",-1),T=(0,o._)("label",{for:"imageUrl1",class:"form-label"},"產品圖片網址1",-1),j=(0,o._)("label",{for:"imageUrl2",class:"form-label"},"產品圖片網址2",-1),H={class:"modal-footer"},K=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function O(l,e,t,n,a,i){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",U,[(0,o._)("div",w,[x,(0,o._)("div",M,[(0,o._)("div",$,[(0,o._)("div",V,[(0,o._)("div",null,[k,(0,o.wy)((0,o._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=l=>a.singleProduct.title=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.title]])]),(0,o._)("div",null,[C,(0,o.wy)((0,o._)("input",{type:"text",id:"category","onUpdate:modelValue":e[1]||(e[1]=l=>a.singleProduct.category=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.category]])]),(0,o._)("div",null,[D,(0,o.wy)((0,o._)("input",{type:"number",id:"origin_price","onUpdate:modelValue":e[2]||(e[2]=l=>a.singleProduct.origin_price=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",null,[E,(0,o.wy)((0,o._)("input",{type:"number",id:"price","onUpdate:modelValue":e[3]||(e[3]=l=>a.singleProduct.price=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.price,void 0,{number:!0}]])]),(0,o._)("div",null,[z,(0,o.wy)((0,o._)("input",{type:"text",id:"unit","onUpdate:modelValue":e[4]||(e[4]=l=>a.singleProduct.unit=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.unit]])]),(0,o._)("div",null,[Z,(0,o.wy)((0,o._)("input",{type:"text",id:"description","onUpdate:modelValue":e[5]||(e[5]=l=>a.singleProduct.description=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.description]])]),(0,o._)("div",null,[L,(0,o.wy)((0,o._)("input",{type:"text",id:"content","onUpdate:modelValue":e[6]||(e[6]=l=>a.singleProduct.content=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.content]])])]),(0,o._)("div",W,[(0,o._)("div",null,[A,(0,o.wy)((0,o._)("input",{type:"number",id:"is_enabled","onUpdate:modelValue":e[7]||(e[7]=l=>a.singleProduct.is_enabled=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.is_enabled,void 0,{number:!0}]])]),(0,o._)("div",null,[I,(0,o.wy)((0,o._)("input",{type:"number",id:"num","onUpdate:modelValue":e[8]||(e[8]=l=>a.singleProduct.num=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.num,void 0,{number:!0}]])]),(0,o._)("div",null,[N,(0,o.wy)((0,o._)("input",{type:"text",id:"calorie","onUpdate:modelValue":e[9]||(e[9]=l=>a.singleProduct.calorie=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.calorie]])]),(0,o._)("div",null,[S,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl","onUpdate:modelValue":e[10]||(e[10]=l=>a.singleProduct.imageUrl=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imageUrl]])]),(0,o._)("div",null,[T,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl1","onUpdate:modelValue":e[11]||(e[11]=l=>a.singleProduct.imagesUrl[0]=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imagesUrl[0]]])]),(0,o._)("div",null,[j,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl2","onUpdate:modelValue":e[12]||(e[12]=l=>a.singleProduct.imagesUrl[1]=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imagesUrl[1]]])])])])]),(0,o._)("div",H,[K,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...l)=>i.send&&i.send(...l))},"送出")])])])],512)}var Y=t(7424),q=t.n(Y),B={data(){return{modal:"",singleProduct:{imagesUrl:[]}}},emits:["emit-update"],methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()},send(){this.$emit("emit-update",this.singleProduct),setTimeout((()=>{this.singleProduct={imagesUrl:[]}}),4e3)}},mounted(){this.modal=new(q())(this.$refs.modal)}},F=t(3744);const G=(0,F.Z)(B,[["render",O]]);var J=G;const Q={class:"modal fade",id:"editModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},R={class:"modal-dialog modal-dialog-centered"},X={class:"modal-content"},ll=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"產品編輯頁面"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),el={class:"modal-body"},tl={class:"row"},ol={class:"col-6"},nl=(0,o._)("label",{for:"title",class:"form-label"},"產品標題",-1),al=(0,o._)("label",{for:"category",class:"form-label"},"產品類型",-1),il=(0,o._)("label",{for:"origin_price",class:"form-label"},"產品原價",-1),sl=(0,o._)("label",{for:"price",class:"form-label"},"產品售價",-1),dl=(0,o._)("label",{for:"unit",class:"form-label"},"產品單位",-1),rl=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),cl=(0,o._)("label",{for:"content",class:"form-label"},"產品內容",-1),ul={class:"col-6"},ml=(0,o._)("label",{for:"is_enabled",class:"form-label"},"產品是否上架",-1),pl=(0,o._)("label",{for:"num",class:"form-label"},"產品數量",-1),gl=(0,o._)("label",{for:"calorie",class:"form-label"},"產品熱量",-1),bl=(0,o._)("label",{for:"imageUrl",class:"form-label"},"產品圖片主網址",-1),_l=(0,o._)("label",{for:"imageUrl1",class:"form-label"},"產品圖片網址1",-1),hl=(0,o._)("label",{for:"imageUrl2",class:"form-label"},"產品圖片網址2",-1),fl={class:"modal-footer"},yl=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Pl(l,e,t,n,a,i){return(0,o.wg)(),(0,o.iD)("div",Q,[(0,o._)("div",R,[(0,o._)("div",X,[ll,(0,o._)("div",el,[(0,o._)("div",tl,[(0,o._)("div",ol,[(0,o._)("div",null,[nl,(0,o.wy)((0,o._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=l=>a.singleProduct.title=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.title]])]),(0,o._)("div",null,[al,(0,o.wy)((0,o._)("input",{type:"text",id:"category","onUpdate:modelValue":e[1]||(e[1]=l=>a.singleProduct.category=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.category]])]),(0,o._)("div",null,[il,(0,o.wy)((0,o._)("input",{type:"number",id:"origin_price","onUpdate:modelValue":e[2]||(e[2]=l=>a.singleProduct.origin_price=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",null,[sl,(0,o.wy)((0,o._)("input",{type:"number",id:"price","onUpdate:modelValue":e[3]||(e[3]=l=>a.singleProduct.price=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.price,void 0,{number:!0}]])]),(0,o._)("div",null,[dl,(0,o.wy)((0,o._)("input",{type:"text",id:"unit","onUpdate:modelValue":e[4]||(e[4]=l=>a.singleProduct.unit=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.unit]])]),(0,o._)("div",null,[rl,(0,o.wy)((0,o._)("input",{type:"text",id:"description","onUpdate:modelValue":e[5]||(e[5]=l=>a.singleProduct.description=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.description]])]),(0,o._)("div",null,[cl,(0,o.wy)((0,o._)("input",{type:"text",id:"content","onUpdate:modelValue":e[6]||(e[6]=l=>a.singleProduct.content=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.content]])])]),(0,o._)("div",ul,[(0,o._)("div",null,[ml,(0,o.wy)((0,o._)("input",{type:"number",id:"is_enabled","onUpdate:modelValue":e[7]||(e[7]=l=>a.singleProduct.is_enabled=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.is_enabled,void 0,{number:!0}]])]),(0,o._)("div",null,[pl,(0,o.wy)((0,o._)("input",{type:"number",id:"num","onUpdate:modelValue":e[8]||(e[8]=l=>a.singleProduct.num=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.num,void 0,{number:!0}]])]),(0,o._)("div",null,[gl,(0,o.wy)((0,o._)("input",{type:"text",id:"calorie","onUpdate:modelValue":e[9]||(e[9]=l=>a.singleProduct.calorie=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.calorie]])]),(0,o._)("div",null,[bl,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl","onUpdate:modelValue":e[10]||(e[10]=l=>a.singleProduct.imageUrl=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imageUrl]])]),(0,o._)("div",null,[_l,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl1","onUpdate:modelValue":e[11]||(e[11]=l=>a.singleProduct.imagesUrl[0]=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imagesUrl[0]]])]),(0,o._)("div",null,[hl,(0,o.wy)((0,o._)("input",{type:"text",id:"imageUrl2","onUpdate:modelValue":e[12]||(e[12]=l=>a.singleProduct.imagesUrl[1]=l),class:"form-control"},null,512),[[P.nr,a.singleProduct.imagesUrl[1]]])])])])]),(0,o._)("div",fl,[yl,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...l)=>i.send&&i.send(...l))},"送出")])])])],512)}var vl={data(){return{modal:"",singleProduct:{imagesUrl:[]}}},props:{product:{type:Object,default(){return{}}}},watch:{product(){this.singleProduct=this.product,this.singleProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.singleProduct.imageUrl||(this.singleProduct.imageUrl="")}},emits:["emit-update"],methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()},send(){this.$emit("emit-update",this.singleProduct),setTimeout((()=>{this.singleProduct={imagesUrl:[]}}),4e3)}},mounted(){this.modal=new(q())(this.$refs.modal)}};const Ul=(0,F.Z)(vl,[["render",Pl]]);var wl=Ul,xl={data(){return{products:[],pagination:{},temp:{},isNew:!1}},components:{pagination:f.Z,deleteModal:y.Z,updateModal:J,editModal:wl},methods:{getProducts(l=1){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${e}`;const t="https://vue3-course-api.hexschool.io/v2",o="hexschoolforhenrywu";this.$http.get(`${t}/api/${o}/admin/products?page=${l}`).then((l=>{this.products={...l.data.products},this.pagination={...l.data.pagination}})).catch((l=>{console.dir(l.response)}))},changePage(l){this.page=l},openDeleModal(l){this.temp={...l};const e=this.$refs.delModal;e.openModal()},deleteProduct(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${l}`;const e=this.$refs.delModal,t="https://vue3-course-api.hexschool.io/v2",o="hexschoolforhenrywu";this.$http.delete(`${t}/api/${o}/admin/product/${this.temp.id}`).then((l=>{alert("成功將產品刪除"),this.getProducts(),e.hideModal()})).catch((l=>{console.dir(l.response.data),e.hideModal()}))},openUpdateModal(){const l=this.$refs.updateModal;l.openModal()},openEditModal(l){this.temp={...l};const e=this.$refs.editModal;e.openModal()},updateProduct(l){const e="https://vue3-course-api.hexschool.io/v2",t="hexschoolforhenrywu",o={data:l};let n=`${e}/api/${t}/admin/product`,a="post",i=this.$refs.updateModal;this.isNew||(n=`${e}/api/${t}/admin/product/${l.id}`,a="put",i=this.$refs.editModal),this.$http[a](n,o).then((l=>{alert("編輯產品成功"),this.getProducts(),i.hideModal()})).catch((l=>{console.dir(l),alert("更新產品錯誤，請重新輸入"),i.hideModal()}))}},mounted(){this.getProducts()}};const Ml=(0,F.Z)(xl,[["render",h]]);var $l=Ml}}]);
//# sourceMappingURL=670.f0ab4cd0.js.map