<template>
  <div class="container-fluid">
    <div class="row mt-3 align-items-center">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Notifikasi</h6>
      </div>
    </div>
    <div class="row mt-4">
      <div v-if="loading" class="col-12 text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-if="!loading && notifications.length === 0" class="col-12 text-center">
        <p>Tidak ada notifikasi.</p>
      </div>
      <div v-else v-for="notification in notifications" :key="notification.id" class="col-12 mb-3">
        <div class="notification-card p-3 shadow-sm rounded">
          <div class="d-flex justify-content-between">
            <span class="badge bg-primary">{{ notification.kategori }}</span>
            <small class="text-muted">{{ formatDate(notification.created_at) }}</small>
          </div>
          <h5 class="mt-2">{{ notification.judul }}</h5>
          <p class="text-muted">{{ notification.deskripsi }}</p>
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
      notifications: [],
      loading: true,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async fetchNotifications() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/notifikasi/my-notif`);
        this.notifications = response.data.data;
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.fetchNotifications();
  },
};
</script>

<style scoped>
.notification-card {
  border-left: 5px solid #007bff;
}
.notification-card .badge {
  font-size: 0.8rem;
}
.notification-card h5 {
  font-size: 1.1rem;
}
.notification-card p {
  font-size: 0.9rem;
}
</style>
