<template>
  <div>
    <div class="outer-container">
      <div class="back">
        <nuxt-link to="../">back to list</nuxt-link>
      </div>
      <prismic-image v-if="document && document.image" :field="document.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw" />
      <!-- Template for page title -->
      <h1 class="blog-title">{{ $prismic.asText(document.title) }}</h1>
      <!-- Template for published date -->
      <p class="blog-post-meta"><span class="created-at">{{ formattedDate }}</span></p>
    </div>
    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices"/>
  </div>
</template>

<script>
//Importing all the slices components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'falda',
  components: {
    SlicesBlock
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const falda = (await $prismic.api.getByUID('falda', params.uid)).data

      // Returns data to be used in template
      return {
        document: falda,
        slices: falda.body,
        formattedDate: Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(falda.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

}
</script>