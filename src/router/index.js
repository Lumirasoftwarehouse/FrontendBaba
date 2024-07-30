import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/user/Dashboard.vue')
    },
    {
      path: '/pin',
      name: 'pin',
      component: () => import('../views/Pin.vue')
    },
    {
      path: '/notifikasi',
      name: 'notifikasi',
      component: () => import('../views/user/Notifikasi.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/user/Profile.vue')
    },

    // pulsa
    {
      path: '/pulsa',
      name: 'pulsa',
      component: () => import('../views/user/pulsa/Pulsa.vue')
    },
    {
      path: '/bayar-pulsa',
      name: 'bayar-pulsa',
      component: () => import('../views/user/pulsa/BayarPulsa.vue')
    },
    
    // paket data
    {
      path: '/bayar-paket',
      name: 'bayar-paket',
      component: () => import('../views/user/paketData/BayarPaketData.vue')
    },

    {
      path: '/listrik',
      name: 'listrik',
      component: () => import('../views/user/pln/Listrik.vue')
    },
    {
      path: '/tagihan-pln',
      name: 'tagihan-pln',
      component: () => import('../views/user/pln/TagihanPln.vue')
    },
    {
      path: '/bayar-pln',
      name: 'bayar-pln',
      component: () => import('../views/user/pln/BayarPln.vue')
    },
    {
      path: '/voucher',
      name: 'voucher',
      component: () => import('../views/user/Voucher.vue')
    },
    {
      path: '/token-pln',
      name: 'token-pln',
      component: () => import('../views/user/pln/TokenPln.vue')
    },
    {
      path: '/nominal-token',
      name: 'nominal-token',
      component: () => import('../views/user/pln/NominalToken.vue')
    },
    
    // program sosial
    {
      path: '/program-sosial',
      name: 'program-sosial',
      component: () => import('../views/user/ProgramSosial.vue')
    },
    {
      path: '/list-program',
      name: 'list-program',
      component: () => import('../views/user/program/ListProgram.vue')
    },
    {
      path: '/detail-program',
      name: 'detail-program',
      component: () => import('../views/user/program/DetailProgram.vue')
    },
    
    // transaksi
    {
      path: '/riwayat-transaksi',
      name: 'riwayat-transaksi',
      component: () => import('../views/user/transaksi/RiwayatTransaksi.vue')
    },
    {
      path: '/detail-transaksi',
      name: 'detail-transaksi',
      component: () => import('../views/user/transaksi/DetailTransaksi.vue')
    },
    
    // angsuran
    {
      path: '/list-angsuran',
      name: 'list-angsuran',
      component: () => import('../views/user/angsuran/ListAngsuran.vue')
    },
    {
      path: '/pelanggan-angsuran',
      name: 'pelanggan-angsuran',
      component: () => import('../views/user/angsuran/AngsuranPelanggan.vue')
    },
    {
      path: '/bayar-angsuran',
      name: 'bayar-angsuran',
      component: () => import('../views/user/angsuran/BayarAngsuran.vue')
    },

    // game
    {
      path: '/list-game',
      name: 'list-game',
      component: () => import('../views/user/game/ListGame.vue')
    },
    {
      path: '/list-voucher/:brand',
      name: 'list-voucher',
      component: () => import('../views/user/game/ListVoucher.vue'),
      props: true
    },
    {
      path: '/bayar-voucher',
      name: 'bayar-voucher',
      component: () => import('../views/user/game/BayarVoucherGame.vue')
    },

    // bpjs
    {
      path: '/bpjs',
      name: 'bpjs',
      component: () => import('../views/user/bpjs/Bpjs.vue')
    },
    {
      path: '/bayar-bpjs/:nomorpeserta',
      name: 'bayar-bpjs',
      component: () => import('../views/user/bpjs/BayarBpjs.vue'),
      props: true
    },

    // tv
    {
      path: '/televisi',
      name: 'televisi',
      component: () => import('../views/user/tv/Tv.vue')
    },
    {
      path: '/bayar-televisi/:idPelanggan',
      name: 'bayar-televisi',
      component: () => import('../views/user/tv/BayarTv.vue'),
      props: true
    },
    // topup
    {
      path: '/topup',
      name: 'topup',
      component: () => import('../views/user/topup/TopupPage.vue')
      // component: () => import('../views/user/topup/TopupSaldo.vue')
    },

    // admin
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/admin/Dashboard.vue')
    },
    {
      path: '/admin-sosial',
      name: 'admin-sosial',
      component: () => import('../views/admin/ProgramSosial.vue')
    },
    {
      path: '/admin-transaksi',
      name: 'admin-transaksi',
      component: () => import('../views/admin/ListTransaksi.vue')
    },
    {
      path: '/admin-rekening',
      name: 'admin-rekening',
      component: () => import('../views/admin/Rekening.vue')
    },
    {
      path: '/admin-product',
      name: 'admin-product',
      component: () => import('../views/admin/Product/ListProduct.vue')
    },
    {
      path: '/my-product',
      name: 'my-product',
      component: () => import('../views/admin/Product/MyProduct.vue')
    },

    // yayasan
    {
      path: '/yayasan-dashboard',
      name: 'yayasan-dashboard',
      component: () => import('../views/yayasan/Dashboard.vue')
    },
    {
      path: '/yayasan-program',
      name: 'yayasan-program',
      component: () => import('../views/yayasan/ProgramSosial.vue')
    },

  ]
})

export default router
