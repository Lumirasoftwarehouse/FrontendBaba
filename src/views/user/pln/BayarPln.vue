<template>
  <div class="container-fluid" v-if="!showPinInput">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Bayar PLN</h6>
      </div>
    </div>
    <h6 class="mt-4">Identitas Pelanggan</h6>
    <div class="row">
      <div class="col-6">
        <span>ID Pelanggan</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ dataTagihan.customer_no }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <span>Nama Pelanggan</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ dataTagihan.customer_name }}</span>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <span>Tarif/Daya</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ dataTagihan.desc.tarif }}</span>
      </div>
    </div>
    <hr />
    <h6>Tagihan</h6>
    <div class="row">
      <div class="col-6">
        <span>Jumlah Tagihan</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ dataTagihan.price }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <span>Biaya Langganan</span>
      </div>
      <div class="col-6">
        <span class="float-end">Rp. 2000</span>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <span>Voucher</span>
      </div>
      <div class="col-6">
        <span class="float-end">Rp. 0</span>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-6">
        <span class="fw-bold">Total</span>
      </div>
      <div class="col-6">
        <span class="float-end fw-bold">Rp. 150000</span>
      </div>
    </div>
    <hr />
    <router-link to="voucher" class="customVoucher mb-3">
      <div class="row mt-3 text-dark" v-if="!voucher">
        <div class="col-9">
          <i class="bi bi-bookmark-x-fill text-primary"></i> Gunakan Voucher
        </div>
        <div class="col-3"><p class="float-end">&#62;</p></div>
      </div>
      <div class="row mt-3 text-dark" v-if="voucher">
        <div class="col-9">
          <i class="bi bi-bookmark-x-fill text-primary"></i> Gunakan Voucher
        </div>
        <div class="col-3">
          <p class="float-end">
            <i class="bi bi-check-circle-fill fs-3 text-success"></i>
          </p>
        </div>
      </div>
    </router-link>
    <h6>Metode Pembayaran</h6>
    <div class="row mt-2 mb-2">
      <div class="col-3 text-center">
        <img
          src="https://via.placeholder.com/50"
          class="rounded-circle img-fluid"
          alt="baba"
        />
      </div>
      <div class="col-9 d-flex align-items-center">
        <h5>SALDO BABA</h5>
      </div>
    </div>
    <p>
      Saldo Baba Anda Saat ini <span class="ms-3 fw-bold">Rp500.000</span>
    </p>
    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success" @click="showPinInput = true">Bayar</button>
    </div>

  </div>
    <!-- Komponen PIN -->
  <PinComponent v-if="showPinInput" @valid-pin="bayarTagihanPln"/>
</template>
<script>
export default {
  data(){
    return{
      showPinInput: false
    }
  }
}
</script>

<script setup>
import { ref } from "vue";
import CardComponent from "../../../components/user/CardPulsa.vue";
import PinComponent from "../../../components/user/PinComponent.vue";
import axios from "axios";
import Swal from "sweetalert2";

const voucher = ref(true);
const dataTagihan = ref([]);
// const showPinInput = ref(false);

const goBack = () => {
  router.go(-1);
};

const cekTagihanPln = async () => {
  try {
    const formData = new FormData();
    formData.append("buyer_sku_code", "pln");
    formData.append("customer_no", "530000000001");
    formData.append("ref_id", "some1d");

    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/digi/bayar-tagihan`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    // Tampilkan alert success
    Swal.fire({
      icon: 'success',
      title: 'Pembayaran berhasil',
      text: 'Anda akan diarahkan ke halaman utama.',
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = '/home';
    });
  } catch (error) {
    console.error(error);

    // Tampilkan alert error
    Swal.fire({
      icon: 'error',
      title: 'Pembayaran gagal',
      text: 'Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.',
    });
  }
};

// const cekTagihanPln = async () => {
//   try {
//     const formData = new FormData();
//     formData.append("buyer_sku_code", "pln");
//     formData.append("customer_no", "530000000001");
//     formData.append("ref_id", "some1d");
//     const response = await axios.post(
//       `${import.meta.env.VITE_API_ENDPOINT}/cek-tagihan`,
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//         },
//       }
//     );
//     dataTagihan.value = response.data.data;
//   } catch (error) {
//     console.error(error); // Handle error if any
//   }
// };

const bayarTagihanPln = async () => {
  try {
    const formData = new FormData();
    formData.append("buyer_sku_code", "pln");
    formData.append("customer_no", "530000000001");
    formData.append("ref_id", "some1d");
    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/bayar-tagihan`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    // this.dataTagihan = response.data.data;
  } catch (error) {
    console.error(error); // Handle error if any
  }
};

cekTagihanPln();
</script>

<style scoped>
.customVoucher {
  border-radius: 10px;
  border: 1px solid blue;
}

h6 {
  color: black;
  font-weight: bold;
}

.pin-component {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
}
</style>
