<template>
  <client-only>
    <div>
      <back-to-top text="" visibleoffset="500">
        <b-button pill variant="dark">
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

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";
import Nav from "~/components/Nav.vue";
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Totop from "~/components/Totop.vue";

export default {
  components: {
    FooterPrismic,
    Nav,
    Header,
    Sidebar,
    Totop
  },
  head() {
    return {
      title: "Ragazza Stile"
    };
  }
};
</script>
