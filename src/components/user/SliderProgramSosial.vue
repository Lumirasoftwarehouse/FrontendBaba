<template>
  <div class="photo-gallery">
    <div class="gallery-container">
      <div v-for="item in items" :key="item.id" class="gallery-item me-2">
        <img :src="`https://apibaba.lumirainternational.com` + item.image" alt="Photo" class="gallery-photo"/>
        <div class="gallery-text">{{ item.judul }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/sosial/list-sosial`,
            {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              },
            }
          );
        this.items = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style scoped>
.photo-gallery {
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px;
}

.gallery-container {
  display: flex;
  gap: 16px;
}

.gallery-item {
  display: inline-block;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-photo {
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.gallery-text {
  padding: 10px;
  text-align: center;
}
</style>
