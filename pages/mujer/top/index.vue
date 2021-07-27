<template>
  <section>
    <div class="outer-container animate__animated animate__fadeIn ">
      <Back />
      <article>
        <section>
          <b-row class="imagen__section">
            <b-col
              v-for="post_top in post_tops"
              :key="post_top.id"
              v-bind:post="post_top"
              cols="12"
              md="6"
              lg="4"
              sm="12"
            >
              <post-top-widget :post_top="post_top"></post-top-widget>
            </b-col>
          </b-row>
        </section>
      </article>
    </div>
  </section>
</template>

<script>

import SlicesBlock from "~/components//SlicesBlock.vue";
const PostTopWidget = () => import("~/components/top/PostTopWidget.vue");


export default {
  components: {
    PostTopWidget,SlicesBlock
    
  },
  data() {
    return {
      title: "Top"
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
      const PostsTop = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post_top"),
        { orderings: "[my.post_top.date desc]" }
      );

      // Returns data to be used in template
      return {
        post_tops: PostsTop.results
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
