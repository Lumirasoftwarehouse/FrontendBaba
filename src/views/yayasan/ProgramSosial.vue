<script setup>
import Sidebar from "../../components/yayasan/Sidebar.vue";
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
          <h1 class="h3 mb-0 text-gray-800 text-center">Program Sosial</h1>

          <div class="row mt-4">
            <div class="col-12">
              <button
                class="btn btn-success float-end"
                data-toggle="modal"
                data-target="#modalTambahProgram"
              >
                Tambah Program
              </button>
            </div>
          </div>

          <div class="table-responsive">
            <div v-if="!ready" class="preloader"></div>
            <DataTable class="display table table-striped" v-if="ready">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Aksi</th>
                  <th scope="col">Image</th>
                  <th scope="col">Judul</th>
                  <th scope="col">Saldo</th>
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
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modalDetail"
                        @click="setData(item)"
                      >
                        <i class="bi bi-info"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-toggle="modal"
                        data-target="#modalUpdateSosial"
                        @click="setData(item)"
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                      <button type="button" class="btn btn-danger">
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <img
                      :src="`http://127.0.0.1:8000` + item.image"
                      :alt="item.judul"
                      style="max-width: 100px; cursor: pointer"
                      @click="detailBukti(item.image)"
                    />
                  </td>
                  <td>{{ item.judul }}</td>
                  <td>{{ item.saldo ? item.saldo : '0' }}</td>
                  <td>
                    <div
                      class="bg-warning text-white rounded text-center"
                      v-if="item.status == '0'"
                    >
                      Nonaktif
                    </div>
                    <div
                      class="bg-success text-white rounded text-center"
                      v-if="item.status == '1'"
                    >
                      Aktif
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

  <!-- Modal Detail Program Sosial -->
  <div
    class="modal fade"
    id="modalDetail"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalDetailLabel"
    aria-hidden="true"
    ref="modalDetailRef"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDetailLabel">
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
          <!-- Informasi Program Sosial -->
          <div class="row">
            <!-- Gambar -->
            <div class="col-md-4">
              <img
                :src="`http://127.0.0.1:8000` + dataselect.image"
                class="img-fluid rounded"
                alt="Program Sosial Image"
              />
            </div>
            <!-- Detail -->
            <div class="col-md-8">
              <h5 class="modal-title mb-3">Judul: {{ dataselect.judul }}</h5>
              <p class="text-muted mb-3">
                Deskripsi: {{ dataselect.deskripsi }}
              </p>
              <p>Owner: {{ dataselect.owner_name }}</p>
              <p>
                Status:
                <span class="badge badge-success">{{
                  dataselect.status == 1 ? "Aktif" : "Pending"
                }}</span>
              </p>
            </div>
          </div>
          <!-- End Informasi Program Sosial -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Detail Program Sosial -->

  <!-- Modal update -->
  <div
    class="modal fade"
    id="modalTambahProgram"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalTambahProgramLabel"
    aria-hidden="true"
    ref="modalTambahProgramRef"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTambahProgramLabel">
            Tambah Program Sosial
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
          <div class="mb-3">
            <label for="judul" class="form-label">Image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              @change="handleFileTambah"
            />
          </div>
          <div class="mb-3">
            <label for="judul" class="form-label">Judul</label>
            <input
              type="text"
              class="form-control"
              id="judul"
              v-model="formProgram.judul"
            />
          </div>
          <div class="mb-3">
            <label for="deskripsiSosial" class="form-label">Deskripsi</label>
            <textarea
              class="form-control"
              id="deskripsiSosial"
              rows="3"
              v-model="formProgram.deskripsi"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click="tambahProgram()"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end Modal Tambah -->

  <!-- Modal update -->
  <div
    class="modal fade"
    id="modalUpdateSosial"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalUpdateSosialLabel"
    aria-hidden="true"
    ref="modalUpdateSosialRef"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalUpdateSosialLabel">
            Update Program Sosial
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
          <div class="mb-3">
            <label for="judul" class="form-label">Image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              @change="handleFileUpload"
            />
          </div>
          <div class="mb-3">
            <label for="judul" class="form-label">Judul</label>
            <input
              type="text"
              class="form-control"
              id="judul"
              v-model="dataselect.judul"
            />
          </div>
          <div class="mb-3">
            <label for="deskripsiSosial" class="form-label">Deskripsi</label>
            <textarea
              class="form-control"
              id="deskripsiSosial"
              rows="3"
              v-model="dataselect.deskripsi"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="updateSosial()">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end Modal update -->
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);

export default {
  data() {
    return {
      dataSosial: [],
      dataselect: [],
      ready: false,
      formProgram: [],
    };
  },
  methods: {
    setData(item) {
      this.dataselect = item;
    },
    async tambahProgram() {
      try {
        const formData = new FormData();
        formData.append("image", this.formProgram.image);
        formData.append("judul", this.formProgram.judul);
        formData.append("deskripsi", this.formProgram.deskripsi);
        const response = await axios.post(
          `http://127.0.0.1:8000/api/sosial/create-sosial`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.fetchDataSosial();
        Swal.fire({
          icon: "success",
          title: "Request Berhasil",
          text: "Program sosial berhasil diupdate",
        });
        $("#modalTambahProgram").modal("hide");
      } catch (error) {
        console.error(error); // Handle error if any
        Swal.fire({
          icon: "error",
          title: "Request Gagal",
          text: "Pragram sosial gagal diupdate",
        });
        $("#modalTambahProgram").modal("hide");
      }
    },
    async updateSosial() {
      try {
        const formData = new FormData();
        formData.append("image", this.dataselect.image);
        formData.append("judul", this.dataselect.judul);
        formData.append("deskripsi", this.dataselect.deskripsi);
        const response = await axios.post(
          `http://127.0.0.1:8000/api/sosial/update-sosial/${this.dataselect.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.fetchDataSosial();
        Swal.fire({
          icon: "success",
          title: "Request Berhasil",
          text: "Program sosial berhasil diupdate",
        });
        $("#modalUpdateSosial").modal("hide");
      } catch (error) {
        console.error(error); // Handle error if any
        Swal.fire({
          icon: "error",
          title: "Request Gagal",
          text: "Pragram sosial gagal diupdate",
        });
        $("#modalUpdateSosial").modal("hide");
      }
    },

async fetchDataSosial() {
  try {
    this.ready = false;
    const response = await axios.get(`http://127.0.0.1:8000/api/sosial/my-program`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    });

    const data = response.data.data;
    this.dataSosial = Array.isArray(data) ? data : [data];
    this.ready = true;
    console.log('test', this.dataSosial);
  } catch (error) {
    this.ready = true;
    console.error(error);
  }
},

    handleFileUpload(event) {
      // Menggunakan FormData untuk mengirim file
      this.dataselect.image = event.target.files[0];
    },
    handleFileTambah(event) {
      // Menggunakan FormData untuk mengirim file
      this.formProgram.image = event.target.files[0];
    },
  },
  created() {
    this.fetchDataSosial();

  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
