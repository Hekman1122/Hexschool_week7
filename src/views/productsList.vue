<template>
  <div class="container">
    <h2 class="text-center h3">產品列表</h2>
    <div class='text-end'>
        <button type="button" class="btn btn-outline-success mb-0 mt-1" @click='openUpdateModal'>新增品項</button>
    </div>
    <table class="table text-center table-hover">
      <thead>
        <tr class='fs-5'>
          <th scope="col">產品名稱</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody class='fs-6'>
        <tr v-for=" item in products" :key="item.id">
          <th scope="row">{{item.title}}</th>
          <td>{{item.origin_price}}</td>
          <td>{{item.price}}</td>
          <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button type="button" class="btn btn-outline-dark btn-sm me-2" @click='openEditModal(item)'>修改</button> /
            <button type="button" class="btn btn-outline-success btn-sm ms-2" @click = 'openDeleModal(item)'>刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages='pagination' @change-page="getProducts"></pagination>
    <deleteModal :target='temp' ref='delModal' @del-item = "deleteProduct"></deleteModal>
    <!-- <editModal ref='editModal' :product='temp' :isNew='isNew' @emit-update="updateProduct"></editModal> -->
   <updateModal ref='updateModal' @emit-update="updateProduct"></updateModal>
   <editModal ref='editModal'  @emit-update="updateProduct" :product = 'temp'></editModal>
  </div>
</template>

<script>
import pagination from '@/components/paginationComp.vue'
import deleteModal from '@/components/deleteView.vue'
import updateModal from '@/components/updateModal.vue'
import editModal from '@/components/editModal.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      temp: {},
      isNew: false
    }
  },
  components: {
    pagination,
    deleteModal,
    updateModal,
    editModal
  },
  methods: {
    getProducts (page = 1) {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      this.$http.get(`${url}/api/${path}/admin/products?page=${page}`)
        .then(res => {
          this.products = { ...res.data.products }
          this.pagination = { ...res.data.pagination }
        })
        .catch(err => {
          console.dir(err.response)
        })
    },
    changePage (val) {
      this.page = val
    },
    openDeleModal (item) {
      this.temp = { ...item }
      const delComp = this.$refs.delModal
      delComp.openModal()
    },
    deleteProduct () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      const deleteComp = this.$refs.delModal
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      this.$http.delete(`${url}/api/${path}/admin/product/${this.temp.id}`)
        .then(res => {
          alert('成功將產品刪除')
          this.getProducts()
          deleteComp.hideModal()
        })
        .catch(err => {
          console.dir(err.response.data)
          deleteComp.hideModal()
        })
    },
    openUpdateModal () {
      const editComp = this.$refs.updateModal
      editComp.openModal()
    },
    openEditModal (item) {
      this.temp = { ...item }
      const editComp = this.$refs.editModal
      editComp.openModal()
    },
    updateProduct (sample) {
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      // 接收元件傳出的產品資料
      const product = {
        data: sample
      }
      let site = `${url}/api/${path}/admin/product`
      let method = 'post'
      let editComp = this.$refs.updateModal
      // 加入判斷:新增還是修改
      if (!this.isNew) {
        site = `${url}/api/${path}/admin/product/${sample.id}`
        method = 'put'
        editComp = this.$refs.editModal
      }
      this.$http[method](site, product)
        .then(res => {
          alert('編輯產品成功')
          this.getProducts()
          editComp.hideModal()
        })
        .catch(err => {
          console.dir(err)
          alert('更新產品錯誤，請重新輸入')
          editComp.hideModal()
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
