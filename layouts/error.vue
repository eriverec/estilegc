<template>
  <div class="outer-container">
   <Back/>
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" style="text-decoration: underline;">ir al home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'Página no encontrada',
    }
  },
}
</script>