import{e as n,b as i,f as l,g as e,j as d,v as r,i as c,A as g,x as m}from"./index-0e09ec2c.js";/* empty css                                                                  */const _={class:"container-fluid"},u={class:"row mt-3"},p={class:"col-3"},f=e("div",{class:"col-9"},[e("h6",{class:"fw-bold"},"TV Digital")],-1),v={class:"mt-3"},b={class:"row fixed-bottom m-2"},h={data(){return{idPelanggan:""}},methods:{goBack(){this.$router.go(-1)}}},B=Object.assign(h,{__name:"Tv",setup(k){return(s,a)=>{const t=n("router-link");return i(),l("div",_,[e("div",u,[e("div",p,[e("i",{class:"bi bi-arrow-left fs-3 text-dark fw-bold",onClick:a[0]||(a[0]=(...o)=>s.goBack&&s.goBack(...o))})]),f]),e("div",v,[d(e("input",{type:"number",class:"form-control",id:"noHp",placeholder:"ID Pelanggan","onUpdate:modelValue":a[1]||(a[1]=o=>s.idPelanggan=o)},null,512),[[r,s.idPelanggan]])]),e("div",b,[c(t,{class:"btn btn-success",to:{name:"bayar-televisi",params:{idPelanggan:s.idPelanggan?s.idPelanggan:"0"}}},{default:g(()=>[m("Lanjut")]),_:1},8,["to"])])])}}});export{B as default};
