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
        <h6 class="fw-bold">Listrik</h6>
      </div>
    </div>
    <router-link to="token-pln" style="text-decoration: none">
      <div class="row mt-3 text-dark">
        <div class="col-6">Token PLN</div>
        <div class="col-6"><p class="float-end">&#62;</p></div>
      </div>
    </router-link>
    <router-link to="tagihan-pln" style="text-decoration: none">
      <div class="row mt-3 text-dark">
        <div class="col-6">Tagihan PLN</div>
        <div class="col-6"><p class="float-end">&#62;</p></div>
      </div>
    </router-link>
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
