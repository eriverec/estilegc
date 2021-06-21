<template>
  <div>
    <div class="outer-container main animate__animated animate__fadeIn">
     <Back/>
      <prismic-image
        v-if="document && document.image"
        :field="document.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />
      <!-- Template for page title -->
      <h2 class="blog-title mt-3">{{ $prismic.asText(document.title) }}</h2>
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
      <FormaPago/>
      </div>

  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";
import Back from "~/components/Back.vue";


export default {
  name: "falda",
  components: {
    SlicesBlock, Back
  },
  
  data() {
    return{
      title:"Artículo"
    }
  },
 head() {
    return {
      title: this.title
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
