<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Variabel reaktif untuk menyimpan data game
const gamesData = ref([]);

// Fungsi untuk mengambil data game dari API
const fetchGame = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/harga/games`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    });
    gamesData.value = response.data.data; // Menyimpan data yang diambil dari API
    console.log('response games: ', response.data.data);
  } catch (error) {
    console.error(error); // Menangani error jika terjadi
  }
};

// Panggil fetchGame saat komponen dimuat
onMounted(fetchGame);

const searchQuery = ref("");

const filteredGamesList = computed(() => {
  // Buat set untuk menyimpan brand unik
  const uniqueBrands = new Set();
  // Filter game berdasarkan query pencarian dan tambahkan brand ke set unik
  return gamesData.value.filter((game) => {
    const matchesSearch = game.brand.toLowerCase().includes(searchQuery.value.toLowerCase());
    const isUnique = !uniqueBrands.has(game.brand.toLowerCase());
    if (matchesSearch && isUnique) {
      uniqueBrands.add(game.brand.toLowerCase());
      return true;
    }
    return false;
  });
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
        <h6 class="fw-bold">Voucher Games</h6>
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
            placeholder="Cari game"
          />
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <ul
          class="list-group"
          v-for="(game, index) in filteredGamesList"
          :key="index"
        >
          <router-link :to="{ name: 'list-voucher', params: { brand: game.brand } }">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ game.brand }}
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
