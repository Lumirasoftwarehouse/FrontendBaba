<script setup>
import CardComponent from "../../components/user/CardPulsa.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Voucher</h6>
      </div>
    </div>
    <!-- section 1 -->
    <div class="row mt-3">
      <h6><i class="bi bi-bookmark-x-fill"></i> Voucher Saya</h6>
      <div class="customVoucher mb-3">
        <div class="row mt-3 text-dark" @click="check=true">
            <div class="col-9">
                <h6>Voucher Potongan Rp5.000</h6>
                <span style="font-size: 13px">Berlaku untuk jenis transaksi apapun</span>
            </div>
            <div class="col-3">
                <i class="bi bi-check-lg text-success fs-3 fw-bold" v-if="check"></i>
            </div>
        </div>
      </div>
    </div>
    <div class="row fixed-bottom m-2">
      <button type="button" class="btn btn-success" @click="use=false" v-if="use">Gunakan</button>
      <button type="button" class="btn btn-secondary" disabled v-if="!use">Gunakan</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        use: true,
        check: false
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
.customVoucher {
  border-radius: 10px;
  border: 1px solid grey;
}

h6 {
  color: black;
  font-weight: bold;
}
</style>
