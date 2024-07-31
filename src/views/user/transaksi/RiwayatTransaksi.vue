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
      <div class="col-12 mb-3" v-if="transaction.judul">
        <div class="card shadow-sm customCard">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="left-section">
              <h5 class="card-title mb-1">{{ transaction.judul }}</h5>
              <p class="card-text mb-1 text-muted">{{ formatDate(transaction.created_at) }}</p>
              <p class="card-text mb-1">{{ getType(transaction.jenis) }}</p>
            </div>
            <div class="right-section">
              <span :class="{'text-success': transaction.nominal > 0, 'text-danger': transaction.nominal < 0}">
                Rp.{{ formatCurrency(transaction.nominal) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      transactions: [],
    };
  },
  methods: {
    async fetchTransactions() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/saldo/histori-transaksi`, {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token'),
          },
        });
        this.transactions = response.data.data;
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    formatCurrency(value) {
      let val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    },
    getType(jenis) {
      switch(jenis) {
        case '0':
          return 'Pengeluaran';
        case '1':
          return 'Pemasukan';
        default:
          return 'Unknown';
      }
    }
  },
  async mounted() {
    await this.fetchTransactions();
  }
};
</script>

<style scoped>
h5 {
  color: black;
}

p {
  color: #757575;
}

.customCard {
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
