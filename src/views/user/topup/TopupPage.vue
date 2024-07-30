<template>
  <div class="container-fluid">
    <!-- Header -->
    <div class="row mt-3">
      <div class="col-3">
        <i class="bi bi-arrow-left fs-3 text-dark fw-bold" @click="goBack"></i>
      </div>
      <div class="col-9">
        <h6 class="fw-bold">Top-Up</h6>
      </div>
    </div>

    <!-- Penerima -->
    <h6 class="mt-3">Bank Penerima</h6>
    <div class="form-group mt-3">
      <label for="selectBankPenerima">Pilih Bank</label>
      <select class="form-control" id="selectBankPenerima" v-model="selectedBankPenerima" @change="updateReceiverDetails">
        <option v-for="bank in bankPenerima" :key="bank.id" :value="bank">{{ bank.jenis_bank }}</option>
      </select>
    </div>
    <div class="form-group mt-3">
      <label for="accountNamePenerima">Atas Nama</label>
      <input type="text" class="form-control" id="accountNamePenerima" :value="receiverDetails.accountName" readonly />
    </div>
    <div class="form-group mt-3">
      <label for="accountNumberPenerima">Rekening</label>
      <input type="text" class="form-control" id="accountNumberPenerima" :value="receiverDetails.accountNumber" readonly />
    </div>

    <!-- Pengirim -->
    <h6 class="mt-3">Bank Pengirim</h6>
    <div class="form-group mt-3">
      <label for="selectBankPengirim">Pilih Bank</label>
      <select class="form-control" id="selectBankPengirim" v-model="selectedBankPengirim">
        <option v-for="bank in bankPengirim" :key="bank.id" :value="bank">{{ bank.name }}</option>
      </select>
    </div>
    <div class="form-group mt-3">
      <label for="accountNamePengirim">Atas Nama</label>
      <input type="text" class="form-control" id="accountNamePengirim" v-model="senderDetails.accountName" />
    </div>
    <div class="form-group mt-3">
      <label for="accountNumberPengirim">Rekening</label>
      <input type="text" class="form-control" id="accountNumberPengirim" v-model="senderDetails.accountNumber" />
    </div>
    <div class="form-group mt-3">
      <label for="transferAmount">Jumlah Transfer</label>
      <input type="number" class="form-control" id="transferAmount" v-model="senderDetails.transferAmount" />
    </div>
    <div class="form-group mt-3">
      <label for="notes">Catatan</label>
      <textarea class="form-control" id="notes" v-model="senderDetails.notes"></textarea>
    </div>
    <div class="form-group mt-3">
      <label for="transferProof">Bukti Transfer</label>
      <input type="file" class="form-control" id="transferProof" @change="handleFileUpload" />
      <div v-if="transferProof" class="mt-3">
        <img :src="transferProof" alt="Bukti Transfer" class="img-fluid" />
      </div>
    </div>

    <!-- Button -->
    <div class="row mt-3">
      <button type="button" class="btn btn-success w-100" @click="submitTopUp">Submit</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const bankPenerima = ref([]);
    const bankPengirim = ref([
      { id: 1, name: 'Bank C' },
      { id: 2, name: 'Bank D' },
    ]);

    const selectedBankPenerima = ref(null);
    const selectedBankPengirim = ref(null);

    const receiverDetails = reactive({
      accountName: '',
      accountNumber: '',
    });

    const senderDetails = reactive({
      accountName: '',
      accountNumber: '',
      transferAmount: '',
      notes: '',
    });

    const transferProof = ref(null);

    const updateReceiverDetails = () => {
      if (selectedBankPenerima.value) {
        const { atas_nama, nomor_rekening } = selectedBankPenerima.value;
        receiverDetails.accountName = atas_nama;
        receiverDetails.accountNumber = nomor_rekening;
      } else {
        receiverDetails.accountName = '';
        receiverDetails.accountNumber = '';
      }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          transferProof.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const fetchBankPenerima = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/rekening/list`,
          {
            headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            },
          }
        );
        bankPenerima.value = response.data.data;
      } catch (error) {
        console.error(error);
      }
    };

    const goBack = () => {
      router.go(-1);
    };

    const submitTopUp = () => {
      // Logic untuk submit top-up
      console.log('Bank Penerima:', selectedBankPenerima.value);
      console.log('Receiver Details:', receiverDetails);
      console.log('Bank Pengirim:', selectedBankPengirim.value);
      console.log('Sender Details:', senderDetails);
      console.log('Transfer Proof:', transferProof.value);
    };

    onMounted(() => {
      fetchBankPenerima();
    });

    return {
      bankPenerima,
      bankPengirim,
      selectedBankPenerima,
      selectedBankPengirim,
      receiverDetails,
      senderDetails,
      transferProof,
      updateReceiverDetails,
      handleFileUpload,
      goBack,
      submitTopUp,
    };
  },
};
</script>

<style>
.container-fluid {
  max-width: 600px;
  margin: auto;
}
</style>
