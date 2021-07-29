<template>

  <nuxt-link :to="link" class="listing-item-container compact">
    <div class="listing-item">
      <prismic-image
      class="lazy"
        v-if="post_top.data && post_top.data.image"
        :field="post_top.data.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />

       <!-- <h2 class="listing-badge now-open">
        ${{ post_top.data.precio }}
      </h2> -->
      <div class="listing-item-content">
        <div v-if="(post_top.data.stock) === 'Disponible'">
          <b-badge variant="success" >
            {{ post_top.data.stock }}
          </b-badge>
          <b-badge variant="light" class="text-dark">
            ${{ post_top.data.precio }}
          </b-badge>
        </div>
        <div  v-else>
          
        <b-badge variant="danger">
          {{ post_top.data.stock }}
        </b-badge>
        <b-badge variant="light" class="text-dark">
            ${{ post_top.data.precio }}
        </b-badge>

        </div>
        <h3>{{ $prismic.asText(post_top.data.title) }}</h3>
        <!-- <span class="created-at">{{ formattedDate }}</span> -->
      </div>
      
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post_top"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "post-top-widget",
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post_top) {
      const textLimit = 300;
      const slices = post_top.data.body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block) {
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    (this.link = LinkResolver(this.post_top)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post_top.data.date)));
  }
};
</script>

<style lang="sass" scoped>
.blog-post
  color: #353535

h2
  margin: 0
</style>
