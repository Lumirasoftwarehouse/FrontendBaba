<script setup>
import CardPulsa from "../../../components/user/CardPulsa.vue";
import CardPaket from "../../../components/user/CardPaket.vue";
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

// Define reactive variables
const activeTab = ref("pulsa"); // Set default tab to 'pulsa'
const pulsaData = ref([]);
const selectedOperator = ref("Operator"); // Default select value
const operators = ref([]); // List of unique operators
const selectedCard = ref(null); // For tracking the selected card
const selectedCardHarga = ref(null); // For tracking the selected card price
const selectedCardMargin = ref(null); // For tracking the selected card price
const phoneNumber = ref(""); // Phone number input
const buyerSkuCode = ref(""); // SKU code input

// Method to fetch pulsa data
const fetchPulsa = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/product/pulsa-data`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    });
    pulsaData.value = response.data.data; // Store the fetched data

    // Extract unique operators from the fetched data
    const uniqueOperators = new Set(response.data.data.map(item => item.brand.toLowerCase()));
    operators.value = Array.from(uniqueOperators);

    console.log('response pulsa: ', response.data.data);
  } catch (error) {
    console.error(error); // Handle error if any
  }
};

// Method to filter pulsa data based on selected operator
const filteredPulsaData = computed(() => {
  if (selectedOperator.value === "Operator") {
    return pulsaData.value;
  }
  return pulsaData.value.filter(item => item.brand.toLowerCase() === selectedOperator.value.toLowerCase());
});

// Method to navigate back
const goBack = () => {
  router.go(-1);
};

// Method to handle card selection
const selectCard = (pulsa, harga, skuCode, margin) => {
  selectedCard.value = pulsa;
  selectedCardHarga.value = harga;
  selectedCardMargin.value = margin;
  buyerSkuCode.value = skuCode;
};

// Method to show confirmation alert
const showConfirmation = () => {
  if (selectedCard.value && phoneNumber.value && selectedOperator.value !== "Operator") {
    Swal.fire({
      title: 'Konfirmasi Pembelian',
      html: `
        <p>Produk yang dipilih: ${selectedCard.value}</p>
        <p>Harga: Rp${selectedCardHarga.value}</p>
        <p>Operator: ${selectedOperator.value}</p>
        <p>Nomor tujuan: ${phoneNumber.value}</p>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        // Pindah ke halaman pembayaran
        router.push({
          path: '/bayar-pulsa',
          query: {
            produk: selectedCard.value,
            harga: selectedCardHarga.value,
            margin: selectedCardMargin.value,
            operator: selectedOperator.value,
            nomor: phoneNumber.value
          }
        });
      }
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Silakan pilih produk, operator, dan masukkan nomor tujuan.',
      icon: 'error'
    });
  }
};

// Fetch pulsa data when the component is mounted
onMounted(fetchPulsa);
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-black" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Pulsa & Paket Data</h6>
      </div>
    </div>
    <div class="row mt-3">
      <div class="mb-3">
        <select class="form-select" aria-label="Default select example" v-model="selectedOperator">
          <option selected>Operator</option>
          <option v-for="operator in operators" :key="operator" :value="operator">{{ operator }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="noHp" class="form-label">Nomor Handphone</label>
        <input
          type="number"
          class="form-control"
          id="noHp"
          v-model="phoneNumber"
          placeholder="contoh 08372843743"
        />
      </div>
    </div>

    <div class="row mt-3">
      <ul class="nav nav-tabs">
        <div class="col-6">
          <li class="nav-item">
            <a
              class="nav-link text-center"
              :class="{ active: activeTab === 'pulsa' }"
              @click="activeTab = 'pulsa'"
              href="#"
              >Pulsa</a
            >
          </li>
        </div>
        <div class="col-6">
          <li class="nav-item">
            <a
              class="nav-link text-center"
              :class="{ active: activeTab === 'paket' }"
              @click="activeTab = 'paket'"
              href="#"
              >Paket Internet</a
            >
          </li>
        </div>
      </ul>
    </div>

    <div class="row fixed-bottom m-3">
      <button class="btn btn-success" @click="showConfirmation">Beli</button>
    </div>
  </div>

  <div class="tab-content">
    <div v-if="activeTab === 'pulsa'">
      <div class="p-3">
        <!-- Konten untuk Pulsa -->
        <div class="row">
          <div class="col-6" v-for="(item, index) in filteredPulsaData" :key="index">
            <CardPulsa 
              :pulsa="item.product_name" 
              :harga="item.price + item.margin" 
              :margin="item.margin" 
              :buyerSkuCode="item.buyer_sku_code" 
              :isSelected="selectedCard === item.product_name" 
              @select="selectCard"
              v-if="item.category=='Pulsa'"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'paket'">
      <div class="p-3">
        <!-- Konten untuk Paket Internet -->
        <div class="row">
          <div class="col-6" v-for="(item, index) in filteredPulsaData" :key="index">
            <CardPaket 
              :title="item.product_name" 
              :description="item.desc" 
              :price="item.price" 
                            :buyerSkuCode="item.buyer_sku_code" 
              :isSelected="selectedCard === item.product_name" 
              @select="selectCard"
              v-if="item.category=='Data'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.nav-tabs .nav-link {
  cursor: pointer;
}

.card-text {
  color: orange;
}

.nav-tabs .nav-link.active {
  border-color: transparent;
  border-bottom: 3px solid #007bff;
  color: #007bff;
}

.tab-content {
  background-color: #e0e0e0;
  height: 600px;
}
</style>
