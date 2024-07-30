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
        <h6 class="fw-bold">Token PLN</h6>
      </div>
    </div>
    <div class="mt-3">
      <input
        type="number"
        class="form-control"
        id="noToken"
        placeholder="Nomor Token"
      />
    </div>
    <div class="row fixed-bottom m-2">
      <router-link class="btn btn-success" to="nominal-token">Lanjut</router-link>
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
