<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Voucher Games</h6>
      </div>
    </div>
    <div class="row mt-3">
      <span>{{brand}}</span>
    </div>
  </div>
  <div class="tab-content">
    <h6 class="ps-3 pt-3" style="color:black">Pilih Voucher</h6>
    <div class="row p-3" v-for="(item, index) in dataVoucherGame" :key="index">
      <CardVoucherGame
        :title="item.product_name"
        :description="item.desc"
        :price="item.price"
        @click="confirmPurchase(item.product_name, item.price)"
      />
    </div>
  </div>
</template>

<script>
import CardVoucherGame from "../../../components/user/CardVoucherGame.vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from 'vue-router';

export default {
  components: {
    CardVoucherGame,
  },
  data() {
    return {
      dataVoucherGame: [],
      brand: "",
    };
  },
  methods: {
    async fetchDataVoucher() {
      try {
        const formData = new FormData();
        formData.append("brand", this.brand);
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/harga/voucher-game`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.dataVoucherGame = response.data.data;
      } catch (error) {
        console.error(error); // Handle error if any
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    confirmPurchase(productName, price) {
      Swal.fire({
        title: 'Konfirmasi Pembelian',
        html: `
          <p>Produk yang dipilih: ${productName}</p>
          <p>Harga: Rp${price}</p>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          // Pindah ke halaman pembayaran dengan data
          this.$router.push({ 
            path: '/bayar-voucher', 
            query: { 
              produk: productName, 
              harga: price, 
            } 
          });
        }
      });
    }
  },
  created() {
    this.brand = this.$route.params.brand;
    this.fetchDataVoucher();
  }
};
</script>

<style scoped>
.tab-content {
  background-color: #e0e0e0;
  height: 600px;
}
.container-fluid {
  padding: 20px;
  background-color: #f8f9fa;
}

.list-group-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 15px;
}

.list-group-item i {
  color: #007bff;
}
</style>
