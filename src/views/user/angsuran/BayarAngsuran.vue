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
        <h6 class="fw-bold">PT. Angsuran Finance</h6>
      </div>
    </div>
    <div class="row mt-3">
      <div class="row">
        <div class="col-6">
          <span>Nomor Pelanggan</span>
        </div>
        <div class="col-6">
          <span class="float-end">086237462</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Nama Pelanggan</span>
        </div>
        <div class="col-6">
          <span class="float-end">Bagus Untoro</span>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-6">
          <span>Tanggal Jatuh Tempo</span>
        </div>
        <div class="col-6">
          <span class="float-end">10 Januari 2024</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Angsuran Berakhir</span>
        </div>
        <div class="col-6">
          <span class="float-end">10 Desember 2024</span>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-6">
          <span>Angsuran / Bulan</span>
        </div>
        <div class="col-6">
          <span class="float-end">Rp500.000</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <span>Tagihan</span>
        </div>
        <div class="col-6">
          <span class="float-end">Rp1.000.000</span>
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
          <span class="float-end">Rp1.000.000</span>
        </div>
      </div>
      <hr>

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
      <span
        >Saldo Baba Anda Saat ini
        <span class="ms-3 fw-bold">Rp500.000</span></span
      >
    </div>
    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success">Bayar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voucher: true,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
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
