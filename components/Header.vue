<template>
  <div>
    <b-jumbotron text-variant="white">
      <template #lead>
        <h1>El estilo <br/> que <br/> necesitas</h1>
      </template>
    </b-jumbotron>
  </div>
</template>

<style scoped>
.jumbotron {
  border-radius: inherit;
  background-image: url("~/static/portada.jpg");
  background-position-x: center;
  background-position-y: center;
  padding: 6rem 1rem;
}
.border {
  border: transparent;
}

.lead {
  text-transform: uppercase;
  text-align: left;
}
</style>
