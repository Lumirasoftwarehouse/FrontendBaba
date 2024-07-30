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
        <h6 class="fw-bold">BPJS</h6>
      </div>
    </div>
    <div class="mt-3">
      <input
        type="number"
        class="form-control"
        id="noHp"
        placeholder="Nomor peserta"
        v-model="nomorPeserta"
      />
    </div>
    <div class="row fixed-bottom m-2">
        <!-- :to="{ name: 'list-voucher', params: { brand: game.brand } }" -->
      <router-link class="btn btn-success" :to="{ name: 'bayar-bpjs', params: { nomorpeserta: nomorPeserta? nomorPeserta : '0' } }">Lanjut</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        nomorPeserta: ''
    };
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
