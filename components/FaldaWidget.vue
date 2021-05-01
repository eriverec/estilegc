<template>

  <nuxt-link :to="link" class="listing-item-container compact">
    <div class="listing-item">
      <prismic-image
        v-if="falda.data && falda.data.image"
        :field="falda.data.image"
        sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
      />

       <h2 class="listing-badge now-open">
        ${{ falda.data.precio }}
      </h2>
      <div class="listing-item-content">
        <b-badge variant="success" v-if="(falda.data.stock) === 'Disponible'">
          {{ falda.data.stock }}
        </b-badge>
        <b-badge variant="danger" v-else>
          {{ falda.data.stock }}
        </b-badge>
        <h3>{{ $prismic.asText(falda.data.title) }}</h3>
        <!-- <span class="created-at">{{ formattedDate }}</span> -->
      </div>
      <!-- <p>{{ getFirstParagraph(falda) }}</p> -->
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["falda"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "falda-widget",
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(falda) {
      const textLimit = 300;
      const slices = falda.data.body;
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
    (this.link = LinkResolver(this.falda)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.falda.data.date)));
  }
};
</script>

<style lang="sass" scoped>
.blog-post
  color: #353535

h2
  margin: 0
</style>
