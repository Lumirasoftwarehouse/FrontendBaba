import{S as r}from"./sweetalert2.all-749d8cbc.js";import{_ as c,o as m,c as p,a as e,k as u,l,v as i,m as h,p as f,b as _,h as v}from"./index-fd209f16.js";const b="/img/register.png";const g={data(){return{fullName:"",email:"",phone:"",company:"",bidang:""}},methods:{submitRegister(){const n={fullname:this.fullName,email:this.email,num_phone:this.phone,company:this.company,bidang:this.bidang};fetch("https://backend-sblf.lumirainternational.com/api/insert-register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(o=>o.json()).then(o=>{console.log(o),r.fire({icon:"success",title:"Success",text:"Berhasil mendaftar!"}),this.fullName="",this.email="",this.phone="",this.company=""}).catch(o=>{console.error("Error:",o),r.fire({icon:"error",title:"Error",text:"Gagal mendaftar!"})})}}},s=n=>(f("data-v-3472d66f"),n=n(),_(),n),y={class:"register",id:"register"},k={class:"container"},N=s(()=>e("h2",{class:"text-center fw-bold mt-3 mb-4"},"REGISTER",-1)),E={class:"row"},S=s(()=>e("div",{class:"col-sm-6"},[e("img",{src:b,alt:"register",width:"400"})],-1)),x={class:"col-sm-6"},I={class:"mb-3"},B=s(()=>e("label",{for:"fullName",class:"form-label"},"Nama Lengkap",-1)),M={class:"mb-3"},R=s(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),w={class:"mb-3"},V=s(()=>e("label",{for:"phone",class:"form-label"},"Nomor HP",-1)),P={class:"mb-3"},T=s(()=>e("label",{for:"company",class:"form-label"},"Nama Perusahaan",-1)),H={class:"mb-3"},U=s(()=>e("label",{for:"company",class:"form-label"},"Bidang",-1)),A=v('<option selected value="" data-v-3472d66f>Pilih Bidang</option><option value="AI" data-v-3472d66f>AI</option><option value="Blockchain" data-v-3472d66f>Blockchain</option><option value="IoT" data-v-3472d66f>IoT</option><option value="Health" data-v-3472d66f>Health</option><option value="Education" data-v-3472d66f>Education</option><option value="Agriculture" data-v-3472d66f>Agriculture</option><option value="Blue Economy" data-v-3472d66f>Blue Economy</option><option value="Green Economy" data-v-3472d66f>Green Economy</option><option value="Finance and Investment" data-v-3472d66f>Finance and Investment</option><option value="Psycho and Mental Health" data-v-3472d66f>Psycho and Mental Health</option><option value="Others" data-v-3472d66f>Others...</option>',12),D=[A],G=s(()=>e("button",{type:"submit",class:"btn btn-primary"},"Daftar",-1));function O(n,o,j,F,a,d){return m(),p("div",y,[e("div",k,[N,e("div",E,[S,e("div",x,[e("form",{onSubmit:o[5]||(o[5]=u((...t)=>d.submitRegister&&d.submitRegister(...t),["prevent"]))},[e("div",I,[B,l(e("input",{type:"text",class:"form-control",id:"fullName",placeholder:"Masukkan nama lengkap anda","onUpdate:modelValue":o[0]||(o[0]=t=>a.fullName=t)},null,512),[[i,a.fullName]])]),e("div",M,[R,l(e("input",{type:"email",class:"form-control",id:"email",placeholder:"Masukkan email anda","onUpdate:modelValue":o[1]||(o[1]=t=>a.email=t)},null,512),[[i,a.email]])]),e("div",w,[V,l(e("input",{type:"tel",class:"form-control",id:"phone",placeholder:"Masukkan nomor hp anda","onUpdate:modelValue":o[2]||(o[2]=t=>a.phone=t)},null,512),[[i,a.phone]])]),e("div",P,[T,l(e("input",{type:"text",class:"form-control",id:"company",placeholder:"Masukkan nama perusahaan anda","onUpdate:modelValue":o[3]||(o[3]=t=>a.company=t)},null,512),[[i,a.company]])]),e("div",H,[U,l(e("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":o[4]||(o[4]=t=>a.bidang=t)},D,512),[[h,a.bidang]])]),G],32)])])])])}const L=c(g,[["render",O],["__scopeId","data-v-3472d66f"]]);export{L as R};
