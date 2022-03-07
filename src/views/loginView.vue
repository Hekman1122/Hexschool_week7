<template>
  <div class="container mt-5 ">
    <form class="row justify-content-center" @submit.prevent = 'login'>
      <div class="col-md-4">
        <h3 class='text-center mb-4 font-weight-normal'>登入頁面</h3>
        <div class="form-floating mb-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            autofocus
            required
            v-model="username"
          />
          <label for="floatingInput">請輸入帳號</label>
        </div>
        <div class="form-floating mb-4">
          <input type="password" class="form-control" id="floatingPassword" required
                v-model='password'
          />
          <label for="floatingPassword">請輸入密碼</label>
        </div>
        <div class='text-end'>
            <button type="submit" class="btn btn-outline-secondary ">送出</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_URL}`
      const username = this.username
      const password = this.password

      const user = {
        username,
        password
      }
      if (this.username || this.password) {
        this.$http
          .post(`${url}/admin/signin`, user)
          .then((res) => {
            const { token, expired } = res.data
            document.cookie = `hexSchool=${token}; expires=${new Date(expired)}`
            this.$router.push('/admin/products')
          })
          .catch((err) => {
            console.dir(err)
            this.username = ''
            this.password = ''
            alert('帳號或密碼錯誤，請重新輸入!!')
          })
      } else {
        alert('請輸入帳號和密碼')
      }
    }
  }
}
</script>
