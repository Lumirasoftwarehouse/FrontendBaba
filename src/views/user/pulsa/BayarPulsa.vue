<script setup>
import { ref } from 'vue';
import CardComponent from "../../../components/user/CardPulsa.vue";
import PinComponent from "../../../components/user/PinComponent.vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const programId = ref(route.query.programId || "");
const produk = route.query.produk;
const harga = route.query.harga;
const margin = route.query.margin;
const operator = route.query.operator;
const nomor = route.query.nomor;
const kodeProgram = ref("");
const showPinInput = ref(false);
const programSosialSelected = ref(false);

const goBack = () => {
  window.history.back();
};

const navigateToProgramSosial = () => {
  router.push({
    path: "/program-sosial",
    query: {
      produk,
      harga,
      margin,
      operator,
      nomor,
      ...(programId.value && { programId: programId.value }),
    },
  });
};

const bayarPulsa = async () => {
  try {
    const formData = new FormData();
    formData.append("buyer_sku_code", "pulsa");
    formData.append("customer_no", "530000000001");
    formData.append("ref_id", "some1d");
    formData.append("harga", harga);
    formData.append("margin", margin);
    if (programId.value) {
      formData.append("program_id", programId.value);
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/bayar-tagihan`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

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
    Swal.fire({
      icon: 'error',
      title: 'Pembayaran gagal',
      text: 'Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.',
    });
  }
};
</script>

<template>
  <div class="container-fluid" v-if="!showPinInput">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-black" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Bayar Pulsa Data</h6>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6">
        <span>Operator</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ operator }}</span>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-6">
        <span>No HP</span>
      </div>
      <div class="col-6">
        <span class="float-end">{{ nomor }}</span>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <span>Pulsa</span>
      </div>
      <div class="col-6">
        <span class="float-end">Rp. {{ harga }}</span>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <span>Voucer</span>
      </div>
      <div class="col-6">
        <span class="float-end">Rp. 0</span>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <span>Total</span>
      </div>
      <div class="col-6">
        <span class="float-end">Rp. {{ harga }}</span>
      </div>
    </div>
    <hr />

    <!-- tawaran program sosial -->
    <div v-if="!programId">
      <span>Anda berhak membantu program sosial BABA</span><br />
      <div class="row">
        <button class="col-12 text-dark btn btn-outline-primary" @click="navigateToProgramSosial">
          Pilih Program Sosial <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <span>Atau</span><br />
      <span>Masukkan kode program sosial yang anda tahu</span>
      <div class="row">
        <input
          type="text"
          class="form-control"
          v-model="kodeProgram"
          placeholder="Masukkan kode program"
        />
      </div>
    </div>

    <!-- card notifikasi jika program sosial sudah dipilih -->
    <div v-if="programId" class="card p-3 shadow-sm mt-3" style="border-radius: 10px;">
      <div class="d-flex align-items-center">
        <div class="me-3">
          <i class="bi bi-patch-check fs-3 text-success"></i>
        </div>
        <div>
          <h5 class="fw-bold">Anda sudah memilih program sosial</h5>
        </div>
      </div>
    </div>

    <div class="row-2">
      <button class="btn btn-success fixed-bottom m-2" @click="showPinInput = true">
        Beli
      </button>
    </div>
  </div>
  <PinComponent v-if="showPinInput" @valid-pin="bayarPulsa"/>
</template>

<script>
export default {
  data() {
    return {
      showPinInput: false,
      programSosialSelected: false
    };
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
