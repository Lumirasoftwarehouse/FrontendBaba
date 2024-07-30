<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Riwayat Transaksi</h6>
      </div>
    </div>


    <div class="row mt-3" v-for="(transaction, index) in transactions" :key="index">
      <div class="col-12 mb-3">
        <div class="card shadow-sm customCard">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="left-section">
              <h5 class="card-title mb-1">{{ transaction.bank }}</h5>
              <p class="card-text mb-1 text-muted">{{ transaction.time }}</p>
              <p class="card-text mb-1">{{ transaction.type }}</p>
            </div>
            <div class="right-section">
              <span :class="{'text-success': transaction.amount > 0, 'text-danger': transaction.amount < 0}">
                Rp.{{ transaction.amount }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        { bank: 'Bank ABC', time: '2024-06-18 14:00', type: 'Deposit', amount: 500000 },
        { bank: 'Bank XYZ', time: '2024-06-18 12:00', type: 'Withdrawal', amount: -250000 },
        { bank: 'Bank DEF', time: '2024-06-17 09:00', type: 'Transfer', amount: 300000 },
        // Tambahkan data transaksi lainnya di sini
      ],
    };
  },
   methods: {
    goBack() {
      this.$router.go(-1);
    },
   },
  filters: {
    currency(value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return 'Rp ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
};
</script>

<style scoped>
h5{
    color: black;
}

p{
    color: #757575;
}
.customCard{
    background-color: #DEE5EF;
}

.card {
  border-radius: 10px;
}

.card-body {
  padding: 1rem 1.5rem;
}

.left-section {
  max-width: 60%;
}

.right-section {
  max-width: 40%;
  text-align: right;
}

.text-success {
  color: #28a745 !important;
}

.text-danger {
  color: #dc3545 !important;
}
</style>
