import{d as f,o as l,c as d,a as e,f as u,u as k,g as b,F as m,r as v,l as p,v as _,t as B}from"./index-fd209f16.js";import{S as y,N as w,F as S}from"./Footer-237d52ff.js";import{a as c}from"./axios-21b846bc.js";import{S as C}from"./sweetalert2.all-749d8cbc.js";import"./logo-42795f0e.js";const A={id:"wrapper"},T={id:"content-wrapper",class:"d-flex flex-column"},x={id:"content"},L={class:"container-fluid mt-4"},M=e("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Benefit Program",-1),D={class:"row"},N=e("div",{class:"col-1"},null,-1),O={class:"col-10"},j=e("div",{class:"row mb-3"},[e("div",{class:"col-4"},[e("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#addBenefit"}," Tambah Benefit ")]),e("div",{class:"col-8"})],-1),I={class:"table-responsive"},U={key:0,class:"text-center"},z={key:1,class:"display table table-striped"},V=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col",style:{width:"130px"}},"Aksi"),e("th",{scope:"col"},"Benefit")])],-1),F=["onClick"],P=e("i",{class:"bi bi-pencil-square"},null,-1),K=[P],E=["onClick"],H=e("i",{class:"bi bi-trash3-fill"},null,-1),J=[H],q=e("div",{class:"col-1"},null,-1),W={class:"modal fade",id:"addBenefit",tabindex:"-1",role:"dialog","aria-labelledby":"addBenefitLabel","aria-hidden":"true"},G={class:"modal-dialog",role:"document"},Q={class:"modal-content"},R=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addBenefitLabel"},"Tambah Benefit"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),X={class:"modal-body"},Y={class:"mb-3"},Z=e("label",{for:"benefit",class:"form-label"},"Benefit",-1),ee={class:"modal-footer"},te=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),ae={class:"modal",id:"updateBenefitModal",tabindex:"-1",role:"dialog","aria-labelledby":"updateBenefitModalLabel","aria-hidden":"true"},se={class:"modal-dialog",role:"document"},oe={class:"modal-content"},ie=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"updateBenefitModalLabel"},"Update Misi"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),ne={class:"modal-body"},le={class:"modal-footer"},de=e("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),re={data(){return{newBenefit:"",benefitList:[],dataBenefit:"",idBenefit:"",user_id:"",ready:!1,remainingTime:"Loading"}},methods:{setDataBenefit(t,a){this.idBenefit=t,this.dataBenefit=a},async updateBenefit(){try{const t=await c.post(`https://backend-sblf.lumirainternational.com/api/auth/update-benefit/${this.idBenefit}`,{benefit:this.dataBenefit},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.updateBenefit="",this.fetchBenefit(),this.showAlert("Success","Benefit berhasil diupdate","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mengupdate benefit","error")}},async tambahBenefit(){try{const t=await c.post("https://backend-sblf.lumirainternational.com/api/auth/create-benefit",{benefit:this.newBenefit},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.newBenefit="",this.fetchBenefit(),this.showAlert("Berhasil!","Data benefit berhasil ditambahkan.","success")}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data benefit.","error")}},async deleteBenefit(t){try{const a=await c.delete(`https://backend-sblf.lumirainternational.com/api/auth/delete-benefit/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.fetchBenefit(),this.showAlert("Success","Benefit berhasil didelete","success")}catch(a){console.error(a),this.showAlert("Oops...","Terjadi kesalahan saat mendelete benefit","error")}},async fetchBenefit(){this.ready=!1;try{const t=await c.get("https://backend-sblf.lumirainternational.com/api/auth/get-benefit",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.benefitList=t.data.data,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data benefit.","error")}},showAlert(t,a,n){this.$swal({title:t,text:a,icon:n}).then(()=>{$("#addBenefit").modal("hide"),$("#updateBenefitModal").modal("hide")})},konfirmasi(t,a){C.fire({title:`Apakah Anda yakin ingin menghapus benefit ${a}?`,text:"Benegit akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(n=>{n.isConfirmed&&this.deleteBenefit(t)})}},created(){const t=sessionStorage.getItem("token");if(t)try{const[a,n]=t.split("."),h=JSON.parse(atob(a)),o=atob(n),i=JSON.parse(atob(t.split(".")[1])),s=i.exp,r=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",r.toUTCString()),new Date>r?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=i.id,console.log("ini idddd:",this.user_id),(!h||!o)&&this.$router.push("/"),this.fetchBenefit()}catch(a){console.error("Error decoding token:",a),this.$router.push("/")}else this.$router.push("/")}},me=Object.assign(re,{__name:"BenefitProgram",setup(t){const a=f(!1),n=f(""),h=()=>{a.value=!a.value,n.value=a.value?"toggle-sidebar":""};return(o,i)=>(l(),d(m,null,[e("div",A,[u(y,{class:k(n.value)},null,8,["class"]),e("div",T,[e("div",x,[u(w,{onToggleSidebar:h}),e("div",L,[M,e("div",D,[N,e("div",O,[j,e("div",I,[o.ready?b("",!0):(l(),d("p",U,"Loading...")),o.ready?(l(),d("table",z,[V,e("tbody",null,[(l(!0),d(m,null,v(o.benefitList,(s,r)=>(l(),d("tr",{key:s.id},[e("td",null,B(r+1),1),e("td",null,[e("button",{class:"btn btn-warning me-3","data-toggle":"modal","data-target":"#updateBenefitModal",onClick:g=>o.setDataBenefit(s.id,s.benefit)},K,8,F),e("button",{class:"btn btn-danger",onClick:g=>o.konfirmasi(s.id,s.benefit)},J,8,E)]),e("td",null,B(s.benefit),1)]))),128))])])):b("",!0)])]),q])])]),u(S)])]),e("div",W,[e("div",G,[e("div",Q,[R,e("div",X,[e("form",null,[e("div",Y,[Z,p(e("textarea",{class:"form-control","onUpdate:modelValue":i[0]||(i[0]=s=>o.newBenefit=s),placeholder:"Masukkan benefit"},null,512),[[_,o.newBenefit]])])])]),e("div",ee,[te,e("button",{type:"button",class:"btn blueButton",onClick:i[1]||(i[1]=(...s)=>o.tambahBenefit&&o.tambahBenefit(...s))}," Kirim ")])])])]),e("div",ae,[e("div",se,[e("div",oe,[ie,e("div",ne,[p(e("textarea",{class:"form-control","onUpdate:modelValue":i[2]||(i[2]=s=>o.dataBenefit=s),placeholder:"Masukkan benefit"},null,512),[[_,o.dataBenefit]])]),e("div",le,[de,e("button",{type:"button",class:"btn btn-primary",onClick:i[3]||(i[3]=(...s)=>o.updateBenefit&&o.updateBenefit(...s))}," Update ")])])])])],64))}});export{me as default};
