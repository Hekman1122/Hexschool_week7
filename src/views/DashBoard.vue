<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">H&H</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to='/admin/products'>產品頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/admin/orders'>訂單</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="signOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view class='mt-2'></router-view>
</template>

<script>
export default {
  data () {
    return {
      checkState: false
    }
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_URL}`
        this.$http
          .post(`${url}/api/user/check`)
          .then((res) => {
            this.checkState = true
          })
          .catch((error) => {
            alert('請先登入')
            console.log(error.data.message)
            this.$router.push('/')
          })
      } else {
        alert('尚未登入')
        this.$router.push('/')
      }
    },
    signOut () {
      document.cookie = 'hexSchool=;expires=;'
      alert('用戶已登出')
      this.$router.push('/')
    }
  }
}
</script>
