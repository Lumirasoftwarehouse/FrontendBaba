<script setup>
import SliderProgramSosial from "../../components/user/SliderProgramSosial.vue";
import BottomMenu from "../../components/user/BottomMenu.vue";
</script>
<template>
  <div class="box">
    <div class="container">
      <div class="row mt-3">
        <div class="col-4">
          <img src="/img/logo.png" alt="logo baba" height="20" />
        </div>
        <div class="col-8"></div>
      </div>
    </div>
    <div class="menu-utama">
      <div class="container pt-2">
        <div class="row">
          <div class="col-6">
            <span>Total Saldo</span> <br />
            <span>{{ready? formattedDeposit : 'loading...'}}</span>
          </div>
          <div class="col-6">
            <span class="float-end">Baba Points</span>
          </div>
        </div>

        <div class="row mt-4 pb-2">
          <div class="col-3">
            <router-link to="topup">
            <i class="bi bi-cash-stack text-white"></i> <br />
            <span class="text-white">Topup</span>
            </router-link>
          </div>
          <div class="col-3">
            <i class="bi bi-upc-scan"></i><br />
            <span>Bayar</span>
          </div>
          <div class="col-3">
            <router-link to="list-program">
            <i class="bi bi-calendar2-event text-white"></i> <br />
            <span class="text-white">Program</span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="riwayat-transaksi">
              <i class="bi bi-file-earmark-text text-white"></i> <br />
              <span class="text-white">Riwayat</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container menu-kedua card">
      <div class="row">
        <div
          class="col-3 col-md-3"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <MenuItem
            :icon="item.icon"
            :title="item.title"
            :backgroundColor="item.backgroundColor"
            :path="item.path"
          />
        </div>
      </div>
    </div>
    <div class="container mt-4" style="margin-bottom:70px">
      <h6 class="text-black fw-bold">Program Sosial</h6>
      <SliderProgramSosial />
    </div>
    <BottomMenu />
  </div>
</template>

<script>
import MenuItem from "../../components/user/MenuItem.vue";
import axios from "axios";

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        { 
          icon: "fas fa-bolt", 
          title: "Listrik", 
          backgroundColor: "#FF5733",
          path: 'listrik'
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Pulsa",
          backgroundColor: "#33FF57",
          path: 'pulsa'
        },
        {
          icon: "fas fa-credit-card",
          title: "Angsuran",
          backgroundColor: "#3357FF",
          path: 'list-angsuran'
        },
        {
          icon: "fas fa-ticket-alt",
          title: "M-Tix",
          backgroundColor: "#FF33A6",
          path: 'listrik'
        },
        {
          icon: "fas fa-tv",
          title: "TV & Internet",
          backgroundColor: "#A633FF",
          path: 'televisi'
        },
        { 
          icon: "fas fa-gamepad", 
          title: "Games", 
          backgroundColor: "#33FFF2",
          path: 'list-game' 
        },
        {
          icon: "fas fa-briefcase-medical",
          title: "BPJS",
          backgroundColor: "#FF8C33",
          path: 'bpjs'
        },
        {
          icon: "fas fa-ellipsis-h",
          title: "Semua",
          backgroundColor: "#B3FF33",
          path: 'listrik'
        },
      ],
      deposit: '',
      ready: false
    };
  },
  computed: {
    formattedDeposit() {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.deposit);
    },
  },
  methods:{
    async fetchsaldo() {
      this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/saldo/my-saldo`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.deposit = response.data.saldo;
        this.ready = true;
      } catch (error) {
        console.error(error); 
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengambil data saldo.",
          "error"
        );
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
      });
    },
  },
  created(){
    this.fetchsaldo();
  }
};
</script>

<style scoped>
.menu-utama {
  background-color: #008069;
  border-radius: 10px;
  margin: 8px;
  color: white;
  margin-top: 20px;
}
.menu-kedua {
  margin-top: 20px;
  background-color: #fff;
}

span {
  font-size: 13px;
}
</style>
