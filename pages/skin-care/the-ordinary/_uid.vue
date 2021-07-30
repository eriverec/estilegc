<template>
  <div>
    <div class="outer-container main animate__animated animate__fadeIn">
      <Back />
      <prismic-image
        class="img-principal"
        v-if="document && document.image"
        :field="document.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />

      <div class="img-slider">
        <slices-block :slices="slices" />
      </div>
      <!-- Template for page title -->
      <h3 class="blog-title mt-3">{{ $prismic.asText(document.title) }}</h3>

      <b-row class="w-340 ">
        <b-col
          ><p class="blog-post-meta text-dark">
            $ <span class="created-at ">{{ document.precio }}</span>
          </p></b-col
        >
        <b-col>
          <div class="listing-content">
            <b-badge variant="success" v-if="document.stock === 'Disponible'">
              {{ document.stock }}
            </b-badge>
            <b-badge variant="danger" v-else>
              {{ document.stock }}
            </b-badge>
          </div></b-col
        >
        <b-col
          ><div>
            <a
              :href="
                'https://api.whatsapp.com/send?phone=+593962704731&text=Hola!%20quiero%20hacer%20el%20pedido%20de%3A https://ragazzastile.com' +
                  this.$route.fullPath +
                  ' '
              "
              target="_blank"
              class="btn btn-light mb-2"
            >
              <img class="img-ws" src="~/static/whatsapp2.png" alt="ws" />
            </a></div
        ></b-col>
      </b-row>
      <prismic-rich-text :field="document.texto" class="mt-4" />
      <div class=" pago">
        <FormaPago />
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container.main .img-ws {
  width: 25px !important;
}
.w-340 {
  width: 340px;
}

@media (max-width: 600px) {
  .w-340 {
    margin: auto;
    text-align: center;
  }
}
</style>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";
import Back from "~/components/Back.vue";

export default {
  name: "falda",
  components: {
    SlicesBlock,
    Back
  },

  data() {
    return {
      //title: [$prismic.asText(document.title)]
    };
  },
  head() {
    return {
      title: this.$prismic.asText(this.document.title)
    };
  },

  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post_skin_care = (
        await $prismic.api.getByUID("post_skin_care", params.uid)
      ).data;

      // Returns data to be used in template
      return {
        document: post_skin_care,
        slices: post_skin_care.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post_skin_care.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
