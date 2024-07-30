<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Detail Program</h6>
      </div>
    </div>

    <!-- detail program -->
    <div class="d-flex flex-column align-items-center mt-3">
      <img src="https://via.placeholder.com/150" alt="detail" width="200" />
      <h6 class="text-center mt-2">Palang Merah Indonesia</h6>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <label for="kodeProgram"
          ><i class="bi bi-link-45deg"></i> Kode Program Berbagi</label
        >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="kodeProgram"
            v-model="kodeProgram"
            disabled
          />
          <div class="input-group-prepend">
            <span
              class="input-group-text"
              @click="copyKodeProgram"
              style="cursor: pointer"
            >
              <i class="bi bi-clipboard text-primary"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <h6 class="fw-bold">Deskripsi</h6>
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo
        ipsam distinctio, maxime recusandae expedita adipisci pariatur quidem
        fugiat esse sunt sapiente voluptates in quis, inventore, quae eligendi.
        Debitis nemo corrupti architecto nihil nam suscipit maxime totam iste
        officia odit qui molestias omnis laudantium, itaque inventore fuga modi
        est voluptatem!</span
      >
    </div>

    <div class="row mt-2" style="margin-bottom: 60px">
      <div class="col-4">
        <img src="https://via.placeholder.com/50" alt="detail" />
      </div>
      <div class="col-4">
        <img src="https://via.placeholder.com/50" alt="detail" />
      </div>
      <div class="col-4">
        <img src="https://via.placeholder.com/50" alt="detail" />
      </div>
    </div>

    <div class="row fixed-bottom m-2">
      <router-link class="btn btn-success" to="list-program">Kembali</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kodeProgram: "PMI009",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    copyKodeProgram() {
      navigator.clipboard
        .writeText(this.kodeProgram)
        .then(() => {
          alert("Kode Program berhasil disalin!");
        })
        .catch((err) => {
          alert("Gagal menyalin Kode Program: ", err);
        });
    },
  },
};
</script>

<style scoped>
</style>
