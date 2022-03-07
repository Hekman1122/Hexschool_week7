<template>
<div class='d-flex justify-content-end'>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent='toPrev'>
          <span aria-hidden="true" >&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key='page +333'
       :class="{ active: pages.current_page === page}">
        <a class="page-link" href="#" @click.prevent='$emit("change-page" , page)'>{{page}}</a>
        </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent='toNex'>
          <span aria-hidden="true" >&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>
<script>
export default {
  props: ['pages'],
  emits: ['change-page'],
  methods: {
    toPrev () {
      if (this.pages.has_pre) {
        this.$emit('change-page', this.pages.current_page - 1)
      }
    },
    toNex () {
      if (this.pages.has_next) {
        this.$emit('change-page', this.pages.current_page + 1)
      }
    }
  }
}
</script>
