<template>
<div class='container text-center'>
    <h2>訂單列表</h2>
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">購買人</th>
        <th scope="col">購買時間</th>
        <th scope="col">訂單金額</th>
        <th scope="col">是否付款</th>
        <th scope="col">檢視細節</th>
        <th scope="col">編輯</th>
        </tr>
    </thead>
    <tbody>
        <template v-for='(item,i) in orders' :key = "i">
            <tr>
                <th scope="row">{{item.user.name}}</th>
                <td scope="row">{{new Date(item.create_at*1000).toLocaleDateString()}}</td>
                <td scope="row">{{item.total}}</td>
                <td scope="row">
                    <span v-if="item.is_paid" class='text-success'>已付款</span>
                    <span v-else class='text-danger'>未付款</span>
                </td>
                <td scope="row">
                    <button type='button' class='btn btn-outline-dark' @click="openOrderModal(item)">查看</button>
                </td>
                <td scope="row">
                    <button type='button' class='btn btn-outline-dark' @click='changePaidStatus(item)'>變更狀態</button> /
                    <button type='button' class='btn btn-outline-dark' @click='openDeleModal(item)'>刪除訂單</button>
                </td>
            </tr>
        </template>
    </tbody>
    </table>
    <pagination :pages='pagination' @change-page="getOrders"></pagination>
    <deleteModal :target='temp' ref='delModal' @del-item = "deleteOrder"></deleteModal>
    <orderModal ref='orderModal' :target="temp" @emit-update = 'changePaidStatus'></orderModal>
</div>
</template>
<script>
import pagination from '@/components/paginationComp.vue'
import deleteModal from '@/components/deleteView.vue'
import orderModal from '@/components/orderModal.vue'
export default {
  data () {
    return {
      orders: [],
      pagination: {},
      temp: {}
    }
  },
  components: {
    pagination,
    deleteModal,
    orderModal
  },
  methods: {
    getOrders (page = 1) {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      this.$http.get(`${url}/api/${path}/admin/orders?page=${page}`)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch(err => {
          console.dir(err.response.data)
        })
    },
    openDeleModal (item) {
      this.temp = { ...item }
      const delComp = this.$refs.delModal
      delComp.openModal()
    },
    openOrderModal (item) {
      this.temp = { ...item }
      const orderComp = this.$refs.orderModal
      orderComp.openModal()
    },
    deleteOrder () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      const deleteComp = this.$refs.delModal
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      this.$http.delete(`${url}/api/${path}/admin/order/${this.temp.id}`)
        .then(res => {
          alert('成功將訂單刪除')
          this.getOrders(this.pagination.current_page)
          deleteComp.hideModal()
        })
        .catch(err => {
          console.dir(err.response.data)
          deleteComp.hideModal()
        })
    },
    changePaidStatus (item) {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      const orderComp = this.$refs.orderModal
      const url = `${process.env.VUE_APP_URL}`
      const path = `${process.env.VUE_APP_PATH}`
      const paid = {
        is_paid: !item.is_paid
      }
      this.$http.put(`${url}/api/${path}/admin/order/${item.id}`, { data: paid })
        .then(res => {
          alert('成功修改訂單狀態!')
          this.getOrders(this.pagination.current_page)
          orderComp.hideModal()
        })
        .catch(err => {
          console.dir(err.response.data)
          orderComp.hideModal()
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
