import{r as f,b as d,f as n,g as a,i as _,n as S,l as h,c as P,A as w,E as D,z as r,x as C,j as p,v as b,F as k,S as i,y as j}from"./index-0e09ec2c.js";import{S as T}from"./Sidebar-a39a0822.js";import{N as B,F as U}from"./Footer-ece463eb.js";import{a as g}from"./axios-21b846bc.js";import{P as y,D as F}from"./jquery.dataTables-22d44938.js";import"./logo-42795f0e.js";const R={id:"wrapper"},x={id:"content-wrapper",class:"d-flex flex-column"},A={id:"content"},q={class:"container-fluid mt-4"},I=a("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Program Sosial",-1),N=a("div",{class:"row mt-4"},[a("div",{class:"col-12"},[a("button",{class:"btn btn-success float-end","data-toggle":"modal","data-target":"#modalTambahProgram"}," Tambah Program ")])],-1),V={class:"table-responsive"},L={key:0,class:"preloader"},z=a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Aksi"),a("th",{scope:"col"},"Image"),a("th",{scope:"col"},"Judul"),a("th",{scope:"col"},"Owner"),a("th",{scope:"col"},"Status")])],-1),J={scope:"row"},G={class:"btn-group",role:"group","aria-label":"Basic mixed styles example"},O=["onClick"],E=a("i",{class:"bi bi-info"},null,-1),M=[E],Y=["onClick"],H=a("i",{class:"bi bi-pencil-square"},null,-1),K=[H],Q=a("button",{type:"button",class:"btn btn-danger"},[a("i",{class:"bi bi-trash-fill"})],-1),W=["src","alt","onClick"],X=["onClick"],Z=["onClick"],aa={class:"modal fade",id:"modalDetail",tabindex:"-1",role:"dialog","aria-labelledby":"modalDetailLabel","aria-hidden":"true",ref:"modalDetailRef"},ta={class:"modal-dialog modal-dialog-centered",role:"document"},sa={class:"modal-content"},ea=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"modalDetailLabel"}," Detail Program Sosial "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),oa={class:"modal-body"},la={class:"row"},ia={class:"col-md-4"},da=["src"],ra={class:"col-md-8"},na={class:"modal-title mb-3"},ca={class:"text-muted mb-3"},ma={class:"badge badge-success"},ua=a("div",{class:"modal-footer"},[a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1),ha={class:"modal fade",id:"modalTambahProgram",tabindex:"-1",role:"dialog","aria-labelledby":"modalTambahProgramLabel","aria-hidden":"true",ref:"modalTambahProgramRef"},pa={class:"modal-dialog modal-dialog-centered",role:"document"},ba={class:"modal-content"},ga=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"modalTambahProgramLabel"}," Tambah Program Sosial "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),_a={class:"modal-body"},fa={class:"mb-3"},ka=a("label",{for:"judul",class:"form-label"},"Image",-1),ya={class:"mb-3"},va=a("label",{for:"judul",class:"form-label"},"Judul",-1),Sa={class:"mb-3"},Pa=a("label",{for:"deskripsiSosial",class:"form-label"},"Deskripsi",-1),wa={class:"modal-footer"},Da=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1),Ca={class:"modal fade",id:"modalUpdateSosial",tabindex:"-1",role:"dialog","aria-labelledby":"modalUpdateSosialLabel","aria-hidden":"true",ref:"modalUpdateSosialRef"},$a={class:"modal-dialog modal-dialog-centered",role:"document"},ja={class:"modal-content"},Ta=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"modalUpdateSosialLabel"}," Update Program Sosial "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),Ba={class:"modal-body"},Ua={class:"mb-3"},Fa=a("label",{for:"judul",class:"form-label"},"Image",-1),Ra={class:"mb-3"},xa=a("label",{for:"judul",class:"form-label"},"Judul",-1),Aa={class:"mb-3"},qa=a("label",{for:"deskripsiSosial",class:"form-label"},"Deskripsi",-1),Ia={class:"modal-footer"},Na=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1);y.use(F);const Va={data(){return{dataSosial:[],dataselect:[],ready:!1,formProgram:[]}},methods:{setData(s){this.dataselect=s},async tambahProgram(){try{const s=new FormData;s.append("image",this.formProgram.image),s.append("judul",this.formProgram.judul),s.append("deskripsi",this.formProgram.deskripsi);const l=await g.post("https://apibaba.lumirainternational.com/api/sosial/create-sosial",s,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.fetchDataSosial(),i.fire({icon:"success",title:"Request Berhasil",text:"Program sosial berhasil diupdate"}),$("#modalTambahProgram").modal("hide")}catch(s){console.error(s),i.fire({icon:"error",title:"Request Gagal",text:"Pragram sosial gagal diupdate"}),$("#modalTambahProgram").modal("hide")}},async updateSosial(){try{const s=new FormData;s.append("image",this.dataselect.image),s.append("judul",this.dataselect.judul),s.append("deskripsi",this.dataselect.deskripsi);const l=await g.post(`https://apibaba.lumirainternational.com/api/sosial/update-sosial/${this.dataselect.id}`,s,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.fetchDataSosial(),i.fire({icon:"success",title:"Request Berhasil",text:"Program sosial berhasil diupdate"}),$("#modalUpdateSosial").modal("hide")}catch(s){console.error(s),i.fire({icon:"error",title:"Request Gagal",text:"Pragram sosial gagal diupdate"}),$("#modalUpdateSosial").modal("hide")}},async changeStatus(s,l){try{if((await i.fire({title:"Apakah Anda yakin?",text:`Anda akan ${l=="1"?"mengaktifkan":"menonaktifkan"} program sosial ini.`,icon:"warning",showCancelButton:!0,confirmButtonText:"Ya, lanjutkan!",cancelButtonText:"Batal"})).isConfirmed){const m=new FormData;m.append("id",s),m.append("status",l);const t=await g.post("https://apibaba.lumirainternational.com/api/sosial/change-status",m,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});i.fire({icon:"success",title:"Request Berhasil",text:`Program sosial berhasil ${l=="1"?"diaktifkan":"dinonaktifkan"}`}),this.fetchDataSosial()}else i.fire({icon:"info",title:"Request Dibatalkan",text:"Perubahan status dibatalkan."})}catch(c){console.error(c),i.fire({icon:"error",title:"Request Gagal",text:`Program sosial gagal ${l=="1"?"diaktifkan":"dinonaktifkan"}`})}},async fetchDataSosial(){try{this.ready=!1;const s=await g.get("https://apibaba.lumirainternational.com/api/sosial/list-sosial",{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});this.dataSosial=s.data.data,this.ready=!0}catch(s){this.ready=!0,console.error(s)}},handleFileUpload(s){this.dataselect.image=s.target.files[0]},handleFileTambah(s){this.formProgram.image=s.target.files[0]}},created(){this.fetchDataSosial()}},Ma=Object.assign(Va,{__name:"ProgramSosial",setup(s){const l=f(!1),c=f(""),m=()=>{l.value=!l.value,c.value=l.value?"toggle-sidebar":""};return(t,o)=>(d(),n(k,null,[a("div",R,[_(T,{class:S(c.value)},null,8,["class"]),a("div",x,[a("div",A,[_(B,{onToggleSidebar:m}),a("div",q,[I,N,a("div",V,[t.ready?h("",!0):(d(),n("div",L)),t.ready?(d(),P(D(y),{key:1,class:"display table table-striped"},{default:w(()=>[z,a("tbody",null,[(d(!0),n(k,null,j(t.dataSosial,(e,v)=>(d(),n("tr",{key:e.id},[a("th",J,r(v+1),1),a("td",null,[a("div",G,[a("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#modalDetail",onClick:u=>t.setData(e)},M,8,O),a("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#modalUpdateSosial",onClick:u=>t.setData(e)},K,8,Y),Q])]),a("td",null,[a("img",{src:"https://apibaba.lumirainternational.com"+e.image,alt:e.judul,style:{"max-width":"100px",cursor:"pointer"},onClick:u=>t.detailBukti(e.image)},null,8,W)]),a("td",null,r(e.judul),1),a("td",null,r(e.owner_name),1),a("td",null,[e.status=="0"?(d(),n("div",{key:0,class:"bg-warning text-white rounded text-center",onClick:u=>t.changeStatus(e.id,"1"),style:{cursor:"pointer"}}," Nonaktif ",8,X)):h("",!0),e.status=="1"?(d(),n("div",{key:1,class:"bg-success text-white rounded text-center",onClick:u=>t.changeStatus(e.id,"0"),style:{cursor:"pointer"}}," Aktif ",8,Z)):h("",!0)])]))),128))])]),_:1})):h("",!0)])])]),_(U)])]),a("div",aa,[a("div",ta,[a("div",sa,[ea,a("div",oa,[a("div",la,[a("div",ia,[a("img",{src:"https://apibaba.lumirainternational.com"+t.dataselect.image,class:"img-fluid rounded",alt:"Program Sosial Image"},null,8,da)]),a("div",ra,[a("h5",na,"Judul: "+r(t.dataselect.judul),1),a("p",ca," Deskripsi: "+r(t.dataselect.deskripsi),1),a("p",null,"Owner: "+r(t.dataselect.owner_name),1),a("p",null,[C(" Status: "),a("span",ma,r(t.dataselect.status==1?"Aktif":"Pending"),1)])])])]),ua])])],512),a("div",ha,[a("div",pa,[a("div",ba,[ga,a("div",_a,[a("div",fa,[ka,a("input",{type:"file",class:"form-control",id:"image",onChange:o[0]||(o[0]=(...e)=>t.handleFileTambah&&t.handleFileTambah(...e))},null,32)]),a("div",ya,[va,p(a("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":o[1]||(o[1]=e=>t.formProgram.judul=e)},null,512),[[b,t.formProgram.judul]])]),a("div",Sa,[Pa,p(a("textarea",{class:"form-control",id:"deskripsiSosial",rows:"3","onUpdate:modelValue":o[2]||(o[2]=e=>t.formProgram.deskripsi=e)},null,512),[[b,t.formProgram.deskripsi]])])]),a("div",wa,[Da,a("button",{type:"submit",class:"btn btn-primary",onClick:o[3]||(o[3]=e=>t.tambahProgram())}," Simpan ")])])])],512),a("div",Ca,[a("div",$a,[a("div",ja,[Ta,a("div",Ba,[a("div",Ua,[Fa,a("input",{type:"file",class:"form-control",id:"image",onChange:o[4]||(o[4]=(...e)=>t.handleFileUpload&&t.handleFileUpload(...e))},null,32)]),a("div",Ra,[xa,p(a("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":o[5]||(o[5]=e=>t.dataselect.judul=e)},null,512),[[b,t.dataselect.judul]])]),a("div",Aa,[qa,p(a("textarea",{class:"form-control",id:"deskripsiSosial",rows:"3","onUpdate:modelValue":o[6]||(o[6]=e=>t.dataselect.deskripsi=e)},null,512),[[b,t.dataselect.deskripsi]])])]),a("div",Ia,[Na,a("button",{type:"submit",class:"btn btn-primary",onClick:o[7]||(o[7]=e=>t.updateSosial())}," Update ")])])])],512)],64))}});export{Ma as default};