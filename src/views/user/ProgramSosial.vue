<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Semua Program Sosial</h6>
      </div>
    </div>

    <div class="row mt-3">
      <label for="program">Cari Program Sosial</label>
      <input
        type="text"
        class="form-control"
        id="program"
        placeholder="Masukkan Kode Program"
        v-model="searchQuery"
        @input="searchProgram"
      />
    </div>
  </div>

  <div class="customContainer">
    <div
      v-for="(program, index) in filteredPrograms"
      :key="index"
      class="card my-3"
    >
      <div class="row g-0">
        <div class="col-4">
          <img
            :src="`http://127.0.0.1:8000` + program.image"
            class="img-fluid rounded-start"
            alt="Program Image"
            height="400"
          />
        </div>
        <div class="col-8">
          <span class="card-title" style="font-size: 15px">
            {{ program.judul }}
          </span><br />
          <span class="card-text" style="font-size: 12px">
            {{ program.deskripsi }}
          </span>
          <button @click="selectProgram(program.id)">Pilih Program</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const searchQuery = ref("");
const programs = ref([]);
const filteredPrograms = ref([]);

const goBack = () => {
  history.back();
};

const fetchPrograms = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/sosial/list-sosial",
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    programs.value = response.data.data;
    filteredPrograms.value = programs.value;
  } catch (error) {
    console.error(error);
  }
};

const searchProgram = () => {
  const query = searchQuery.value.toLowerCase();
  filteredPrograms.value = programs.value.filter(
    (program) =>
      program.judul.toLowerCase().includes(query) ||
      program.deskripsi.toLowerCase().includes(query)
  );
};

const selectProgram = (programId) => {
  router.push({
    path: '/bayar-pulsa',
    query: { ...route.query, programId },
  });
};

fetchPrograms();
</script>

<style scoped>
.customContainer {
  background-color: #e4e4e4;
  padding: 20px;
  margin-top: 30px;
}

.card {
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.img-fluid {
  object-fit: cover;
  height: 100%;
}

.card-body {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
}
</style>
