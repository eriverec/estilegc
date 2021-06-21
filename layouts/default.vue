<template>
  <client-only>
    <div>
      <back-to-top text="" visibleoffset="500">
        <b-button pill variant="dark" class="btn-box">
          <b-icon-chevron-up></b-icon-chevron-up>
        </b-button>
      </back-to-top>
      <Nav />
      <Sidebar />
      <Nuxt />
      <Footer-prismic />
    </div>
  </client-only>
</template>

<style scoped>
.btn-box {
  box-shadow: 3px 2px 7px 0px rgb(0 0 0 / 45%), 0 2px 32px 0 rgb(0 0 0 / 16%);
}
.btn-dark:not(:disabled):not(.disabled):active:focus,
.btn-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: none;
}
</style>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";
import Nav from "~/components/Nav.vue";
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: {
    FooterPrismic,
    Nav,
    Header,
    Sidebar
  }
};
</script>
