<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Top Up</h6>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <h6 class="text-success fw-bold">Nominal Top Up</h6>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-outline-primary w-100" @click="selectAmount(100000)">
          100rb
        </button>
      </div>
      <div class="col">
        <button class="btn btn-outline-primary w-100" @click="selectAmount(200000)">
          200rb
        </button>
      </div>
      <div class="col">
        <button class="btn btn-outline-primary w-100" @click="selectAmount(300000)">
          300rb
        </button>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <input type="number" class="form-control" v-model="customAmount" placeholder="Nominal Lainnya">
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <h6 class="fw-bold">Kartu Debit</h6>
        <ul class="list-group">
          <li class="list-group-item" v-for="card in debitCards" :key="card.id">{{ card.name }}</li>
        </ul>
      </div>
    </div>

    <div class="row fixed-bottom m-2">
      <router-link class="btn btn-success w-100" :to="{ name: 'NominalToken', params: { amount: selectedAmount || customAmount }}">
        Top Up Sekarang
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedAmount = ref(null);
const customAmount = ref(null);

const debitCards = ref([
  { id: 1, name: 'Debit Card 1' },
  { id: 2, name: 'Debit Card 2' },
  { id: 3, name: 'Debit Card 3' }
]);

const selectAmount = (amount) => {
  selectedAmount.value = amount;
};

const goBack = () => {
  router.go(-1);
};
</script>

<style>
.btn-outline-primary {
  border-radius: 15px;
}
.fixed-bottom {
  margin-bottom: 60px; /* To ensure the button doesn't overlap the content */
}
</style>
