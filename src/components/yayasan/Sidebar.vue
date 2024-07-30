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
      <router-link class="nav-link text-dark" to="/yayasan-dashboard" active-class="active-link">
        <i class="bi bi-grid text-dark"></i>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link text-dark"
        to="/yayasan-program"
        active-class="active-link"
      >
        <i class="bi bi-currency-exchange text-dark"></i>
        <span>Program Sosial</span>
      </router-link>
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
