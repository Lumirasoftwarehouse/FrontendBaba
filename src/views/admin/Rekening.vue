<script setup>
import Sidebar from "../../components/admin/Sidebar.vue";
import Navbar from "../../components/general/Navbar.vue";
import Footer from "../../components/general/Footer.vue";
import Card from "../../components/general/Card.vue";
import { ref } from "vue";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import Swal from "sweetalert2";

DataTable.use(DataTablesCore);

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
          <h1 class="h3 mb-0 text-gray-800 text-center">Rekening</h1>

          <button
            type="button"
            class="btn btn-success mb-4 float-end"
            data-toggle="modal"
            data-target="#modalCreate"
          >
            Add Rekening
          </button>

          <div class="table-responsive">
            <div v-if="!ready" class="text-center">Loading...</div>
            <DataTable class="display table table-striped" v-if="ready">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Aksi</th>
                  <th scope="col">Jenis Bank</th>
                  <th scope="col">Atas Nama</th>
                  <th scope="col">Nomor Rekening</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataRekenings" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-toggle="modal"
                        data-target="#modalEdit"
                        @click="setDataUpdate(item)"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="confirmDelete(item)"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                  <td>{{ item.jenis_bank }}</td>
                  <td>{{ item.atas_nama }}</td>
                  <td>{{ item.nomor_rekening }}</td>
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

  <!-- Create Modal -->
  <div
    class="modal fade"
    id="modalCreate"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalCreateLabel"
    aria-hidden="true"
    ref="modalCreateRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalCreateLabel">Add Rekening</h5>
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
          <div class="form-group">
            <label for="jenis_bank">Jenis Bank</label>
            <input
              type="text"
              class="form-control"
              id="jenis_bank"
              v-model="newRekening.jenis_bank"
            />
          </div>
          <div class="form-group">
            <label for="atas_nama">Atas Nama</label>
            <input
              type="text"
              class="form-control"
              id="atas_nama"
              v-model="newRekening.atas_nama"
            />
          </div>
          <div class="form-group">
            <label for="nomor_rekening">Nomor Rekening</label>
            <input
              type="text"
              class="form-control"
              id="nomor_rekening"
              v-model="newRekening.nomor_rekening"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="createRekening">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div
    class="modal fade"
    id="modalEdit"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalEditLabel"
    aria-hidden="true"
    ref="modalEditRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditLabel">Edit Rekening</h5>
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
          <div class="form-group">
            <label for="edit_jenis_bank">Jenis Bank</label>
            <input
              type="text"
              class="form-control"
              id="edit_jenis_bank"
              v-model="selectedRekening.jenis_bank"
            />
          </div>
          <div class="form-group">
            <label for="edit_atas_nama">Atas Nama</label>
            <input
              type="text"
              class="form-control"
              id="edit_atas_nama"
              v-model="selectedRekening.atas_nama"
            />
          </div>
          <div class="form-group">
            <label for="edit_nomor_rekening">Nomor Rekening</label>
            <input
              type="text"
              class="form-control"
              id="edit_nomor_rekening"
              v-model="selectedRekening.nomor_rekening"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="updateRekening">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataRekenings: [],
      selectedRekening: [],
      newRekening: {
        jenis_bank: "",
        atas_nama: "",
        nomor_rekening: "",
      },
      ready: false,
    };
  },
  methods: {
    setDataUpdate(selected) {
      this.selectedRekening = selected;
    },
    async fetchDataRekening() {
      try {
        this.ready = false;
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/rekening/list`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.dataRekenings = response.data.data;
        this.ready = true;
      } catch (error) {
        console.error(error);
      }
    },
    async createRekening() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/rekening/create`,
          this.newRekening,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.fetchDataRekening();
        Swal.fire("Success", "Rekening created successfully!", "success");
        this.newRekening = {
          jenis_bank: "",
          atas_nama: "",
          nomor_rekening: "",
        };
        $("#modalCreate").modal("hide");
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Failed to create rekening", "error");
        $("#modalCreate").modal("hide");
      }
    },
    async updateRekening() {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/rekening/update/${this.selectedRekening.id}`,
          this.selectedRekening,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.fetchDataRekening();
        Swal.fire("Success", "Rekening updated successfully!", "success");
        $("#modalEdit").modal("hide");
        this.selectedRekening = null;
      } catch (error) {
        console.error(error);
        $("#modalEdit").modal("hide");
        Swal.fire("Error", "Failed to update rekening", "error");
      }
    },
    confirmDelete(rekening) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteRekening(rekening);
        }
      });
    },
    async deleteRekening(rekening) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/rekening/delete/${rekening.id}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.fetchDataRekening();
        Swal.fire("Deleted!", "Rekening has been deleted.", "success");
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Failed to delete rekening", "error");
      }
    },
  },
  created() {
    this.fetchDataRekening();
  },
};
</script>

<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
