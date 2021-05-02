<template>
  <div class="animate__animated animate__fadeIn">
    <b-jumbotron>
      <template #lead >
        <div id="container ">
          Tenemos
          <div id="flip">
            <div class=""><div>Blusas</div></div>
            <div><div>Top</div></div>
            <div><div>Jeans</div></div>
          </div>
          y mas!
        </div>
      </template>
    </b-jumbotron>
  </div>
</template>

<style scoped>
.jumbotron {
  border-radius: inherit;
  background-image: url("~/static/jakob-owens-830Ck0a1vSI-unsplash.jpg");
  background-position-x: center;
  background-position-y: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 9rem 1rem;
}
.border {
  border: transparent;
}

.lead {
  text-transform: uppercase;
  text-align: center;
  font-size: 2.25rem;
  font-weight: bold;
}
</style>
