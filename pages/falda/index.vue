<template>
  <section>
    <div class="outer-container animate__animated animate__fadeIn ">
      <Back />
      <article>
        <section>
          <b-row class="imagen__section">
            <b-col
              v-for="falda in faldas"
              :key="falda.id"
              v-bind:post="falda"
              cols="12"
              md="6"
              lg="4"
              sm="12"
            >
              <falda-widget :falda="falda"></falda-widget>
            </b-col>
          </b-row>
        </section>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Falda"
    };
  },

  head() {
    return {
      title: this.title
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get posts content to preview
      const FaldaPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "falda"),
        { orderings: "[my.falda.date desc]" }
      );

      // Returns data to be used in template
      return {
        faldas: FaldaPosts.results
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
