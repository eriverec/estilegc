<template>
  <div>
    <b-jumbotron text-variant="white">
      <template #header>RAGAZZA</template>

      <template #lead>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </b-jumbotron>
  </div>
</template>

<style scoped>
.jumbotron {
  border-radius: inherit;
  background-image: url("~/static/portada.jpg");
  background-position-x: center;
  background-position-y: center;
}
.border {
  border: transparent;
}

.bg-info {
}
</style>
