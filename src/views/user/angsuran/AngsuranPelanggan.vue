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
        <h6 class="fw-bold">Angsuran</h6>
      </div>
    </div>
    <hr />

    <div class="row mt-3">
      <h5>PT. Angsuran Finance</h5>
      <label for="nomorPelanggan">Nomor Pelanggan</label>
      <input
            type="text"
            class="form-control"
            id="nomorPelanggan"
            placeholder="Contoh 12345678"
          />
    </div>
    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success">Lanjut</button>
    </div>
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