<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-light sidebar sidebar-dark accordion"
    id="accordionSidebar"
    :class="{ toggled: sidebarToggled }"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon mt-2">
        <img src="/img/logo.png" alt="logo" width="140" />
      </div>
    </a>

    <!-- Heading -->
    <div class="sidebar-heading mt-5 text-success">Menu</div>

    <li class="nav-item">
      <router-link
        class="nav-link text-dark"
        to="/"
        active-class="active-link"
      >
        <i class="bi bi-grid text-dark"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link text-dark"
        to="/admin-sosial"
        active-class="active-link"
      >
        <i class="bi bi-currency-exchange text-dark"></i>
        <span>Program Sosial</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link text-dark"
        to="/admin-transaksi"
        active-class="active-link"
      >
        <i class="bi bi-credit-card text-dark"></i>
        <span>Transaksi</span>
      </router-link>
    </li>

      <!-- Beranda -->
  <li class="nav-item">
    <a
      class="nav-link collapsed text-primary"
      href="#"
      data-toggle="collapse"
      data-target="#collapsePagesProduct"
      aria-expanded="true"
      aria-controls="collapsePagesProduct"
    >
              <i class="bi bi-bag-fill text-dark"></i>
      <span>Product</span>
    </a>

    <div
      id="collapsePagesProduct"
      class="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Menu Product</h6>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-product' }"
          >List Product</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'my-product' }"
          >My Product</router-link>
      </div>
    </div>
  </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
};
</script>

<style scoped>
.navbar-nav.bg-light {
  background-color: #f8f9fa !important;
}

.navbar-nav .nav-link.active-link {
  background-color: #e9ecef;
  border-radius: 0.25rem;
}
</style>
