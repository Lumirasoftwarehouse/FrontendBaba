<template>
  <div class="profile-page">
    <div class="container">
      <!-- First Card: Name and Photo -->
      <div class="card mb-4 fixed-top mb-2">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h5 class="card-title">{{ user.name }}</h5>
            </div>
            <div class="col-6">
              <img
                :src="user.photo"
                alt="Profile Photo"
                class="profile-photo float-end"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Second Card: Information -->
      <div class="card mb-4 mt-2">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Email</div>
            <div class="d-flex align-items-center">
              <span>{{ user.email }}</span>
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Pertanyaan Keamanan</div>
            <div class="d-flex align-items-center">
              <span></span>
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Pengaturan PIN</div>
            <div class="d-flex align-items-center">
              <span></span>
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Language</div>
            <div class="d-flex align-items-center">
              <span>{{ user.language }}</span>
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Third Card: Information -->
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Ketentuan Layanan</div>
            <div class="d-flex align-items-center">
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Kebijakan Privasi</div>
            <div class="d-flex align-items-center">
              <span></span>
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Pusat Bantuan</div>
            <div class="d-flex align-items-center">
              <button class="btn btn-link">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <button class="btn btn-light text-danger">Keluar</button>
      </div>
    </div>
  </div>
  <BottomMenu />
</template>

<script>
import BottomMenu from "../../components/user/BottomMenu.vue";

export default {
  components: {
    BottomMenu,
  },
  data() {
    return {
      user: {
        name: "John Doe",
        photo: "https://via.placeholder.com/100",
        email: "johndoe@example.com",
        language: "English",
      },
    };
  },
};
</script>

<style scoped>
.profile-page {
  background-color: #87cefa; /* Sky blue background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 500px;
  width: 100%;
}

.card {
  background-color: #fff; /* White background for cards */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card-body {
  padding: 1rem;
}

.card-title {
  margin: 0;
}

.btn-link {
  color: #007bff;
  font-size: 1.5rem;
}

.bi-chevron-right {
  font-size: 1.25rem;
}
</style>
