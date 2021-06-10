<template>
  <div>
    <div class="outer-container main">
      <div class="back">
        <nuxt-link to="./">back to list</nuxt-link>
      </div>
      <prismic-image
        v-if="document && document.image"
        :field="document.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta text-danger">
        $ <span class="created-at ">{{ document.precio }}</span>
      </p>
      <div class="listing-content">
        <b-badge variant="success" v-if="(document.stock) === 'Disponible'">
          {{ document.stock }}
        </b-badge>
        <b-badge variant="danger" v-else>
          {{ document.stock }}
        </b-badge>
      </div>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
      <!-- <a class="flotante" href='https://payp.page.link/HYK2' ><img src="~/static/logo-PP.png" alt=""></a> -->

      <div class="outer-container pago">
        <h2>Forma de pago:</h2>´
         <h3>- PayPhone</h3>
        <a class="" href='https://payp.page.link/HYK2' ><img src="~/static/descarga.png" alt="pay" width="180"></a>
         <h3>- Efectivo</h3>
         <img src="~/static/dinero.png" alt="efectivo" width="80">
          <h3>- Tranferencias</h3>
           <img src="~/static/money-transfer.png" alt="efectivo" width="80">
      </div>
  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "falda",
  components: {
    SlicesBlock
  },

  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const falda = (await $prismic.api.getByUID("falda", params.uid)).data;

      // Returns data to be used in template
      return {
        document: falda,
        slices: falda.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(falda.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
