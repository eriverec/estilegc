<template>
  <div>
    <b-button variant="outline-primary">
      TOP
    </b-button>
  </div>
</template>


<script>
export default {
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>