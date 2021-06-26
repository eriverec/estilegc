<template>
  <section>
    <div class="outer-container animate__animated animate__fadeIn ">
      <Back />
      <article>
        <section>
          <b-row class="imagen__section">
            <b-col
              v-for="post_skin_care in post_skin_cares"
              :key="post_skin_care.id"
              v-bind:post="post_skin_care"
              cols="12"
              md="6"
              lg="4"
              sm="12"
            >
              <the-ordinary-widget :post_skin_care="post_skin_care"></the-ordinary-widget>
            </b-col>
          </b-row>
        </section>
      </article>
    </div>
  </section>
</template>

<script>

import SlicesBlock from "~/components//SlicesBlock.vue";
const TheOrdinaryWidget = () => import("~/components/skin-care/TheOrdinaryWidget.vue");


export default {
  components: {
    TheOrdinaryWidget,
    
  },
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
      const PostscPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post_skin_care"),
        { orderings: "[my.post_skin_care.date desc]" }
      );

      // Returns data to be used in template
      return {
        post_skin_cares: PostscPosts.results
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
