<template>
  <div class="accordion mt-4" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          class="text-left"
          block
          v-b-toggle.accordion-1
          variant="light"
        >
          Mujer
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text>
            <nuxt-link to="/">
              <b-icon-circle-fill
                font-scale="0.5"
                animation="fade"
              ></b-icon-circle-fill>
              {{ top }}</nuxt-link
            >
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-2 variant="light"
          >Fragancias</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <nuxt-link to="/falda">
              <b-icon-circle-fill
                font-scale="0.5"
                animation="fade"
              ></b-icon-circle-fill>
              {{ splash }}</nuxt-link
            >
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button class="text-left" block v-b-toggle.accordion-3 variant="light"
          >Skincare</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <nuxt-link to="/">
              <b-icon-circle-fill
                font-scale="0.5"
                animation="fade"
              ></b-icon-circle-fill>
              {{ skincare }}</nuxt-link
            >
          </b-card-text>
        </b-card-body>
        
      </b-collapse>
    </b-card>
  </div>
</template>

<style scoped>
.card {
  border: none;
}

.card-body {
  padding: 10px 33px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.card-body a:hover {
  color: #e894a8;
  text-decoration: none;
  font-weight: 600;
}

.card-header {
  border-bottom: none;
}

.card-header button {
  font-weight: bold;
  text-transform: uppercase;
}

.b-icon.bi {
  vertical-align: middle;
}
</style>

<script>
export default {
  data() {
    return {
      top: `Top`,
      splash: `Splash `,
      skincare: `The Ordinary `
    };
  }
};
</script>
