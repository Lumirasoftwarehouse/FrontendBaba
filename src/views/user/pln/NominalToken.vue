<script setup>
import { ref } from 'vue';
import CardComponent from "../../../components/user/CardPulsa.vue";

const tokenNominals = ref([
  { id: 1, nominal: 'Rp 50.000' },
  { id: 2, nominal: 'Rp 75.000' },
  { id: 3, nominal: 'Rp 100.000' },
  { id: 4, nominal: 'Rp 125.000' },
  { id: 5, nominal: 'Rp 150.000' },
  { id: 6, nominal: 'Rp 200.000' }
]);
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
    <!-- section 1 -->
    <div class="row mt-3">
      <h5>Pilih Nominal Top Up</h5>
    </div>
    <!-- Token Nominals -->
    <div class="row mt-2">
      <div 
        v-for="token in tokenNominals" 
        :key="token.id" 
        class="col-4 mb-3"
      >
        <div class="customCard">
            <span class="nominalCustom">{{ token.nominal }}</span>
        </div>
      </div>
    </div>

    <!-- nominal lainnya -->
    <div class="row mt-3">
      <label for="nominal">Nominal Lainnya</label>
      <input
        type="number"
        class="form-control"
        id="nominal"
        placeholder="Minimal Rp10.000"
      />
    </div>


    <!-- Navigation Button -->
    <div class="row fixed-bottom m-2">
      <router-link class="btn btn-success" to="bayar-pln">Lanjut</router-link>
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

<style scoped>
.customCard{
    border-radius: 10px;
  border: 1px solid grey;
}
.nominalCustom{
    font-size: 11px;
    padding: 3px 8px 3px 8px;
}
h5 {
  font-weight: bold;
  color: black;
}
.card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
