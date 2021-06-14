<template>
  <footer class="footer">
    
     <p>© 2021. Todos los derechos reservados. <br> Desarrollado por Eri Vera</p>
    <a href="https://prismic.io" target="_blank" rel="noopener">
      <!-- <img class="logo" src="../assets/img/prismic-logo.svg" alt="Prismic"> -->
    </a>
  </footer>
</template>

<script>

import SearchForm from '~/components/SearchForm'
export default {
  name: 'FooterPrismic',
  components: {
    SearchForm
  }
}
</script>

<style lang="sass" scoped>
.footer
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  font-size: 17px;
  text-align: center
  border-top: 1px solid #DADADA

</style>