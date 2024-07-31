import{_ as l,b as c,f as n,g as e,z as i,S as f,e as b,F as _,y as g,i as v,p as y,m as V}from"./index-6e278184.js";import{a as w}from"./axios-21b846bc.js";const $={name:"CardVoucherGame",props:{title:{type:String,required:!0},description:{type:String,required:!0},price:{type:String,required:!0}}},k={class:"card bg-white"},x={class:"card-body"},C={class:"card-title fw-bold"},B={class:"card-description"},S={class:"card-text text-warning"};function G(t,a,r,h,d,s){return c(),n("div",k,[e("div",x,[e("h5",C,i(r.title),1),e("p",B,i(r.description),1),e("p",S,"Rp"+i(r.price),1)])])}const I=l($,[["render",G],["__scopeId","data-v-bf1678e8"]]);const D={components:{CardVoucherGame:I},data(){return{dataVoucherGame:[],brand:""}},methods:{async fetchDataVoucher(){try{const t=new FormData;t.append("brand",this.brand);const a=await w.post("https://apibaba.lumirainternational.com/api/harga/voucher-game",t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataVoucherGame=a.data.data}catch(t){console.error(t)}},goBack(){this.$router.go(-1)},confirmPurchase(t,a){f.fire({title:"Konfirmasi Pembelian",html:`
          <p>Produk yang dipilih: ${t}</p>
          <p>Harga: Rp${a}</p>
        `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then(r=>{r.isConfirmed&&this.$router.push({path:"/bayar-voucher",query:{produk:t,harga:a}})})}},created(){this.brand=this.$route.params.brand,this.fetchDataVoucher()}},p=t=>(y("data-v-59fe38f4"),t=t(),V(),t),P={class:"container-fluid"},q={class:"row mt-3"},F={class:"col-3"},L=p(()=>e("div",{class:"col-9"},[e("h6",{class:"fw-bold"},"Voucher Games")],-1)),z={class:"row mt-3"},N={class:"tab-content"},R=p(()=>e("h6",{class:"ps-3 pt-3",style:{color:"black"}},"Pilih Voucher",-1));function T(t,a,r,h,d,s){const u=b("CardVoucherGame");return c(),n(_,null,[e("div",P,[e("div",q,[e("div",F,[e("i",{class:"bi bi-arrow-left fs-3 text-dark fw-bold",onClick:a[0]||(a[0]=(...o)=>s.goBack&&s.goBack(...o))})]),L]),e("div",z,[e("span",null,i(d.brand),1)])]),e("div",N,[R,(c(!0),n(_,null,g(d.dataVoucherGame,(o,m)=>(c(),n("div",{class:"row p-3",key:m},[v(u,{title:o.product_name,description:o.desc,price:o.price,onClick:A=>s.confirmPurchase(o.product_name,o.price)},null,8,["title","description","price","onClick"])]))),128))])],64)}const K=l(D,[["render",T],["__scopeId","data-v-59fe38f4"]]);export{K as default};