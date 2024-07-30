<script setup>
import Sidebar from "../../components/admin/Sidebar.vue";
import Navbar from "../../components/general/Navbar.vue";
import Footer from "../../components/general/Footer.vue";
import Card from "../../components/general/Card.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <h1 class="h3 mb-0 text-gray-800 text-center">List Transaksi</h1>

          <div class="table-responsive">
            <div v-if="!ready" class="preloader"></div>
            <DataTable class="display table table-striped" v-if="ready">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Aksi</th>
                  <th scope="col">Image</th>
                  <th scope="col">Judul</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataSosial" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button type="button" class="btn btn-primary"
                      data-toggle="modal"
                        data-target="#modalDetail"
                      ><i class="bi bi-info"></i></button>
                      <button type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                    </div>
                  </td>
                  <td>
                    <!-- <img
                        :src="
                          'https://backend.alicornbot.com/storage/' +
                          item.bukti_transfer
                        "
                        alt="Bukti Transfer"
                        style="max-width: 100px; cursor: pointer"
                        @click="detailBukti(item.bukti_transfer)"
                      /> -->
                    {{ item.image }}
                  </td>
                  <td>{{ item.judul }}</td>
                  <td>{{ item.owner_name }}</td>
                  <td>
                    <div
                      class="bg-warning text-white rounded text-center"
                      v-if="item.status == '0'"
                    >
                      Pending
                    </div>
                    <div
                      class="bg-success text-white rounded text-center"
                      v-if="item.status == '1'"
                    >
                      Active
                    </div>
                  </td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>

  <!-- modal detail -->
    <div
    class="modal fade"
    id="modalDetail"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalDetailLabel"
    aria-hidden="true"
    ref="modalDetailRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">
            Detail Program Sosial
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal detail -->
</template>
<script>
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);

export default {
  data() {
    return {
      dataSosial: [],
      ready: false,
    };
  },
  methods: {
    async fetchDataSosial() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/sosial/list-sosial`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.dataSosial = response.data.data;
        this.ready = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchDataSosial();
    // const currentTimeUTC = new Date().toUTCString();
    // console.log("Waktu Sekarang (UTC):", currentTimeUTC);
    // const token = sessionStorage.getItem("token"); // Ambil token dari local storage

    // if (token) {
    //   try {
    //     const [headerBase64, signatureBase64] = token.split(".");
    //     const header = JSON.parse(atob(headerBase64));
    //     const signature = atob(signatureBase64);

    //     const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
    //     const expTimestamp = tokenPayload.exp;

    //     const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

    //     console.log("Waktu Kedaluwarsa (UTC):", expDate.toUTCString()); // Tampilkan waktu kedaluwarsa dalam format UTC

    //     if (new Date() > expDate) {
    //       console.log("Keluar");
    //       sessionStorage.removeItem("token");
    //       this.$router.push("/");
    //     } else {
    //       console.log("Aman");
    //     }
    //     const level = tokenPayload.level; // Ambil level pengguna dari payload
    //     this.user_id = tokenPayload.id;
    //     if (level !== "1") {
    //       this.$router.push("/unauthorized");
    //     } else if (!header || !signature) {
    //       this.$router.push("/");
    //       sessionStorage.removeItem("token");
    //     }
    //     // success
    //     this.getAllDataProject();
    //     // akhir
    //   } catch (error) {
    //     console.error("Error decoding token:", error);
    //     this.$router.push("/"); // Tindakan jika terjadi kesalahan dekode
    //   }
    // } else {
    //   this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    // }
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
