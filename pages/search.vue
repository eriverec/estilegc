<template>
  <section>
    <div class="outer-container animate__animated animate__fadeIn ">
      <Back/>
      <div class="mb-3">
        <strong>Resultados para:</strong>
        {{ searchterm }}
      </div>

      <article>
        <!-- Template for blog posts -->
        <section>
          <b-row v-if="result.length > 0" class="imagen__section">
            <b-col
              v-for="falda in result"
              :key="falda.id"
              cols="12"
              md="6"
              lg="4"
              sm="12"
            >
              <GridPost :falda="falda" />
            </b-col>
          </b-row>
          <div v-else class="text-xl font-semibold">Lo siento, no hay resultado</div>
        </section>

        <div class="text-center loadmore">
          <b-button
           variant="outline-primary"
            @click="loadMoreResults()"
            v-if="result.length % 1 === 0 && !nonewposts"
          >
            Cargar más resultados
          </b-button>
          <div
            v-else
            variant="outline-primary"
          >
            ¡Llegaste al fondo!
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import GridPost from "~/components/GridPost.vue";
import SearchForm from "~/components/SearchForm.vue";

export default {
  name: "Search",
  components: {
    GridPost,
    SearchForm
  },
  head(){
    return{
      title: this.title
    }
  },

   data() {
    return {
      title:"Búsqueda",
      currentpage: 1, //original
      nonewposts: false
    }
  },

  async asyncData({ $prismic, error, query }) {
    try {
      // Query for keyword
      const searchresult = await $prismic.api.query(
        [
          $prismic.predicates.any("document.type", ["falda", "post_falda"]),
          $prismic.predicates.fulltext("document", query.search)
        ],
        { orderings: "[my.falda.date desc]", pageSize: 1 } //custom pageSize: 9
      );

      // Returns data to be used in template
      return {
        result: searchresult.results,
        searchterm: query.search
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found 2" });
    }
  },
  methods: {
    async loadMoreResults() {
      try {
        // Query other page for search
        const searchresult = await this.$prismic.api.query(
          [
            this.$prismic.predicates.any('document.type', ["falda", "post_falda"]),
            this.$prismic.predicates.fulltext('document', this.searchterm)
          ],
          {
            orderings: '[document.first_publication_date desc]',
            pageSize: 1,  //custom pageSize: 9
            page: this.currentpage + 1 //original
          }
        )
        if (searchresult.results.length > 0) {
          // Merge with the other posts
          this.result = this.result.concat(searchresult.results)
        } else {
          // No more new posts
          this.nonewposts = true
        }
        // Save current page
        this.currentpage++
      } catch (e) {
        console.error(e)
      }
    }
  }
};
</script>
