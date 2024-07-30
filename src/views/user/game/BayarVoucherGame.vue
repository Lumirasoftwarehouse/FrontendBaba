<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import PinComponent from "../../../components/user/PinComponent.vue";

const route = useRoute();

const produk = route.query.produk;
const harga = route.query.harga;


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

const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="container-fluid" v-if="!showPinInput">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Bayar Voucher Games</h6>
      </div>
    </div>

    <h6 class="mt-4">Pembelian</h6>
    <div class="row">
        <div class="col-6">
          <span>{{ produk }}</span>
        </div>
        <div class="col-6">
          <span class="float-end">Rp{{ harga }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Voucher</span>
        </div>
        <div class="col-6">
          <span class="float-end">Rp0</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Total</span>
        </div>
        <div class="col-6">
          <span class="float-end">Rp{{ harga }}</span>
        </div>
      </div>
      <hr />

      <!-- section 3 -->
      <span class="text-center">Anda berhak membantu program sosial Baba</span>
      <br/>

      <router-link to="voucher" class="mb-3">
        <div class="row mt-3 text-dark customVoucher mb-3 pt-2" v-if="!voucher">
          <div class="col-9 text-center">Pilih Program Sosial</div>
          <div class="col-3"><p class="float-end">&#62;</p></div>
        </div>

        <div class="row mt-2">
          <span class="text-center" style="font-size: 13px; color: gray"
            >Atau</span
          ><br />
          <span class="text-center" style="font-size: 13px; color: gray"
            >Masukkan kode program sosial yang anda tahu</span
          >
          <input
            type="text"
            class="form-control mt-2"
            id="kodeProgram"
            placeholder="Masukkan kode program"
          />
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
      <span
        >Saldo Baba Anda Saat ini
        <span class="ms-3 fw-bold">Rp500.000</span></span
      >
    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success" @click="showPinInput = true">Bayar</button>
    </div>
  </div>
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

<style scoped>
span {
  font-size: 11px;
}
.customVoucher {
  border-radius: 10px;
  border: 1px solid blue;
}

h6 {
  color: black;
  font-weight: bold;
}
</style>
