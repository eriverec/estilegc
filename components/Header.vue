<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
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
.jumbotron{
  border-radius: inherit;
}
.border{
  border: transparent;
}

.bg-info {
  background-image: url("~/static/portada.jpg");
  background-position-x: center;
  background-position-y: center;
}
</style>
