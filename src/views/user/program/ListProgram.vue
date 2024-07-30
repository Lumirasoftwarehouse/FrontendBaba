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
      <router-link to="detail-program" style="text-decoration: none">
        <div class="row g-0">
          <div class="col-4">
            <img
              :src="`https://apibaba.lumirainternational.com` + program.image"
              class="img-fluid rounded-start"
              alt="Program Image"
              height="400"
            />
          </div>
          <div class="col-8">
            <span class="card-title" style="font-size: 15px">
              {{ program.judul }} </span
            ><br />
            <span class="card-text" style="font-size: 12px">
              {{ program.deskripsi }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      programs: [],
      searchQuery: "",
      filteredPrograms: [],
    };
  },
  methods: {
    goBack() {
      history.back();
    },
    async fetchPrograms() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/sosial/list-sosial",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.programs = response.data.data;
        this.filteredPrograms = this.programs;
      } catch (error) {
        console.error(error);
      }
    },
    searchProgram() {
      const query = this.searchQuery.toLowerCase();
      this.filteredPrograms = this.programs.filter(
        (program) =>
          program.judul.toLowerCase().includes(query) ||
          program.deskripsi.toLowerCase().includes(query)
      );
    },
  },
  created() {
    this.fetchPrograms();
  },
};
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
