<template>
  <client-only>
    <div>
      <Nav />
      <nuxt />
      <footer-prismic />
    </div>
  </client-only>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";
import Nav from "~/components/Nav.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    FooterPrismic,
    Nav,
    Header
  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  }
};
</script>
