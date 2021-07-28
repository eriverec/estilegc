<template>
  <section>
    <VueSlickCarousel v-bind="playeraOptions" :arrows="true" class="slider-custom">
      <section v-for="(slice, index) in slices" :key="index">
        <template v-if="slice.slice_type === 'image_with_caption'">
          <image-caption-slice :slice="slice"></image-caption-slice>
        </template>
      </section>
    </VueSlickCarousel>

    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <text-slice :slice="slice"></text-slice>
      </template>
    </section>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
    </section>
  </section>
</template>

<script>
// Imports for all slices
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ImageCaptionSlice = () =>
  import("../components/slices/ImageCaptionSlice.vue");

export default {
  data() {
    return {
      title: "Home",
      playeraOptions: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  props: ["slices"],
  name: "slices-block",
  components: {
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice
  }
};
</script>
