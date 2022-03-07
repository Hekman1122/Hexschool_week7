<template>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref='modal'
  >
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">產品編輯頁面</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <div class='row'>
                <div class='col-6'>
                    <div>
                        <label for="title" class="form-label">產品標題</label>
                        <input type="text" id="title" v-model='singleProduct.title' class="form-control">
                    </div>
                    <div>
                        <label for="category" class="form-label">產品類型</label>
                        <input type="text" id="category" v-model='singleProduct.category' class="form-control">
                    </div>
                    <div>
                        <label for="origin_price" class="form-label">產品原價</label>
                        <input type="number" id='origin_price' v-model.number='singleProduct.origin_price' class="form-control">
                    </div>
                    <div>
                        <label for="price" class="form-label">產品售價</label>
                        <input type="number" id="price" v-model.number='singleProduct.price' class="form-control">
                    </div>
                    <div>
                        <label for="unit" class="form-label">產品單位</label>
                        <input type="text" id="unit" v-model='singleProduct.unit' class="form-control">
                    </div>
                    <div>
                        <label for="description" class="form-label">產品描述</label>
                        <input type="text" id="description" v-model='singleProduct.description' class="form-control">
                    </div>
                    <div>
                        <label for="content" class="form-label">產品內容</label>
                        <input type="text" id="content" v-model='singleProduct.content' class="form-control">
                    </div>
                </div>
                <div class='col-6'>
                    <div>
                        <label for="is_enabled" class="form-label">產品是否上架</label>
                        <input type="number" id="is_enabled" v-model.number='singleProduct.is_enabled' class="form-control">
                    </div>
                    <div>
                        <label for="num" class="form-label">產品數量</label>
                        <input type="number" id="num" v-model.number='singleProduct.num' class="form-control">
                    </div>
                    <div>
                        <label for="calorie" class="form-label">產品熱量</label>
                        <input type="text" id="calorie" v-model='singleProduct.calorie' class="form-control">
                    </div>
                    <div>
                        <label for="imageUrl" class="form-label">產品圖片主網址</label>
                        <input type="text" id="imageUrl" v-model='singleProduct.imageUrl' class="form-control">
                    </div>
                    <div>
                        <label for="imageUrl1" class="form-label">產品圖片網址1</label>
                        <input type="text" id="imageUrl1" v-model='singleProduct.imagesUrl[0]' class="form-control">
                    </div>
                    <div>
                        <label for="imageUrl2" class="form-label">產品圖片網址2</label>
                        <input type="text" id="imageUrl2" v-model='singleProduct.imagesUrl[1]' class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click='send'>送出</button>
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
      singleProduct: {
        imagesUrl: []
      }
    }
  },
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      this.singleProduct = this.product
      if (!this.singleProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
      if (!this.singleProduct.imageUrl) {
        this.singleProduct.imageUrl = ''
      }
    }
  },
  emits: ['emit-update'],
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    send () {
      this.$emit('emit-update', this.singleProduct)
      setTimeout(() => {
        this.singleProduct = { imagesUrl: [] }
      }, 4000)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
