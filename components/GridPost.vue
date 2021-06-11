<template>
  <section>
    <nuxt-link :to="LinkGetter(falda)" class="listing-item-container compact">
      <div class="listing-item">
        <prismic-image
          v-if="falda.data && falda.data.image"
          :field="falda.data.image"
          sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw"
        />

        <div class="listing-item-content">
          <div v-if="falda.data.stock === 'Disponible'">
            <b-badge variant="success">
              {{ falda.data.stock }}
            </b-badge>
            <b-badge variant="light" class="text-dark">
              ${{ falda.data.precio }}
            </b-badge>
          </div>
          <div v-else>
            <b-badge variant="danger">
              {{ falda.data.stock }}
            </b-badge>
            <b-badge variant="light" class="text-dark">
              ${{ falda.data.precio }}
            </b-badge>
          </div>
          <h3>{{ $prismic.asText(falda.data.title) }}</h3>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import ResponsiveImg from "~/components/ResponsiveImg";
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  name: "GridPost",
  components: {
    ResponsiveImg
  },
  props: {
    falda: {
      type: Object,
      default: null
    },
    imgsize: {
      type: String,
      default: "100vw"
    }
  },
  methods: {
    LinkGetter(post) {
      return LinkResolver(post);
    }
  }
};
</script>
