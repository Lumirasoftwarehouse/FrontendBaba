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
        <h6 class="fw-bold">Detail Transaksi</h6>
      </div>
    </div>
    <hr />

    <!-- title -->
    <div class="row">
      <div class="col-8">
        <h6>Top Up</h6>
        <span>Bank BCA</span>
      </div>
      <div class="col-4">
        <h6 class="text-success">
          Berhasil <i class="bi bi-patch-check-fill"></i>
        </h6>
      </div>
    </div>
    <hr />

    <!-- Transaksi -->
    <h6>Detail Transaksi</h6>
    <div class="row">
      <div class="col-8">
        <span>Nominal</span>
      </div>
      <div class="col-4">
        <span>Rp.500.000</span>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <span>Biaya Admin</span>
      </div>
      <div class="col-4">
        <span>Rp.0</span>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <h6>Total</h6>
      </div>
      <div class="col-4">
        <span>Rp.500.000</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
