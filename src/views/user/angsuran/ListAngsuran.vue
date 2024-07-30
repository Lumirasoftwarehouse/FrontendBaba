<script setup>
import { ref, computed } from "vue";

// Dummy data angsuran
const angsuranList = ref([
  { name: "Angsuran 1" },
  { name: "Angsuran 2" },
  { name: "Angsuran 3" },
  { name: "Angsuran 4" },
]);

const searchQuery = ref("");

const filteredAngsuranList = computed(() => {
  if (!searchQuery.value) {
    return angsuranList.value;
  }
  return angsuranList.value.filter((angsuran) =>
    angsuran.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const goBack = () => {
  window.history.back();
};

const copyKodeProgram = () => {
  // Implementasi fungsi untuk menyalin kode program
};
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
      <div class="col-12">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" style="cursor: pointer">
              <i class="bi bi-search"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="kodeProgram"
            v-model="searchQuery"
            placeholder="Cari angsuran"
          />
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <ul
          class="list-group"
          v-for="(angsuran, index) in filteredAngsuranList"
          :key="index"
        >
          <router-link to="pelanggan-angsuran">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ angsuran.name }}
              <i class="bi bi-chevron-right"></i>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  padding: 20px;
  background-color: #f8f9fa;
}

.list-group-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 15px;
}

.list-group-item i {
  color: #007bff;
}
</style>
