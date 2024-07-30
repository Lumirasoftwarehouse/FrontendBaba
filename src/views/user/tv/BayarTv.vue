<script setup>
import CardComponent from "../../../components/user/CardPulsa.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Bayar Televisi</h6>
      </div>
    </div>
      <h6>Identitas Pelanggan</h6>
      <div class="row">
        <div class="col-6">
          <span>Nomor Peserta</span>
        </div>
        <div class="col-6">
          <span class="float-end">{{ dataTagihan.customer_no }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Nama Peserta</span>
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
          <span class="float-end">{{ dataTagihan.desc.detail[0]["periode"] }}</span>
        </div>
      </div>
      <hr />

      <!-- section 2 -->
      <h6>Tagihan</h6>
      <div class="row">
        <div class="col-6">
          <span>Jumlah Tagihan</span>
        </div>
        <div class="col-6">
          <span class="float-end">{{ formatRupiah(dataTagihan.price) }}</span>
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
          <span class="float-end fw-bold">{{formatRupiah(dataTagihan.selling_price)}}</span>
        </div>
      </div>
      <hr />

    <div class="row mt-3">
      <!-- section 3 -->
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
    </div>

    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success">Bayar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      voucher: true,
      dataTagihan: [],
    };
  },
  methods: {
    formatRupiah(nominal) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(nominal);
    },
    async tagihanTv() {
      try {
        const formData = new FormData();
        formData.append("buyer_sku_code", "tv");
        formData.append("customer_no", this.$route.params.idPelanggan);
        formData.append("ref_id", "some1d");
        const response = await axios.post(
          "https://digiflaz.keuanganfpti.com/api/cek-tagihan",
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.dataTagihan = response.data.data;
      } catch (error) {
        console.error(error); // Handle error if any
      }
    },
    async bayarTagihanPln() {
      try {
        const formData = new FormData();
        formData.append("buyer_sku_code", "pln");
        formData.append("customer_no", "530000000001");
        formData.append("ref_id", "some1d");
        const response = await axios.post(
          "https://digiflaz.keuanganfpti.com/api/bayar-tagihan",
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
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.tagihanTv();
    // this.bayarTagihanPln();
  },
};
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
</style>
