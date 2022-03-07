<template>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref='modal'
  >
    <div class="modal-dialog modal-xl  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" >詳細訂單資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <div class='row d-flex justify-content-center mb-3'>
                <div class='col-4'>
                    <h4 class='text-center text-success'>訂購人資訊</h4>
                    <ul class="list-group text-start" v-if="temp.user">
                        <li class="list-group-item"><span class='fw-bold me-3'>姓名 : </span> {{temp.user.name }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>電話 : </span> {{temp.user.tel }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>地址 : </span> {{temp.user.address }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>信箱 : </span> {{temp.user.email }}</li>
                    </ul>
                </div>
                <div class='col-4'>
                    <h4 class='text-center text-success'>訂單狀態</h4>
                    <ul class="list-group text-start">
                        <li class="list-group-item"><span class='fw-bold me-3'>訂單編號: </span> {{temp.id }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>下定日期: </span>{{new Date(temp.created_date *1000).toLocaleDateString() }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>訂單金額: </span>{{temp.total }}</li>
                        <li class="list-group-item"><span class='fw-bold me-3'>付款狀態:</span>
                          <span v-if='temp.is_paid' class='text-success'>已付款</span>
                          <span v-else class='text-danger'>未付款</span>
                        </li>
                    </ul>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">產品品名</th>
                    <th scope="col">產品單價</th>
                    <th scope="col">訂購數量</th>
                    <th scope="col">總價</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in temp.products" :key='item.id'>
                         <tr>
                            <th scope="row">{{item.product.title}}</th>
                            <td scope="row">{{item.product.price}}</td>
                            <td scope="row">{{item.qty}} {{item.product.unit}}</td>
                            <td scope="row">{{item.total}}元</td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <h5 class='text-end'> <span class='text-success fw-bold me-3'>訂單總金額 : </span> {{temp.total}}元</h5>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('emit-update',temp)">變更訂單狀態</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: '',
      temp: {}
    }
  },
  props: {
    target: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    target () {
      this.temp = { ...this.target }
    }
  },
  emits: ['emit-update'],
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
