<template>
  <div>
    <section>
      <VueSlickCarousel
        v-bind="sliderUidOptions"
        :arrows="true"
        class="slider-custom"
      >
        <section v-for="(slice, index) in slices" :key="'slider-' + index">
          <template v-if="slice.slice_type === 'image_with_caption'">
            <image-caption-slice :slice="slice"></image-caption-slice>
          </template>
        </section>
      </VueSlickCarousel>
    </section>
    <section>
      <section v-for="(slice, index) in slices" :key="'sliderT-' + index">
        <!-- Text slice template -->
        <template v-if="slice.slice_type === 'text'">
          <!-- Here :slice="slice" passes the data to the component -->
          <text-slice :slice="slice"></text-slice>
        </template>
      </section>
      <section v-for="(slice, index) in slices" :key="'sliderQ-' + index">
        <!-- Text slice template -->
        <template v-if="slice.slice_type === 'quote'">
          <quote-slice :slice="slice"></quote-slice>
        </template>
      </section>
    </section>
  </div>
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
      sliderUidOptions: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
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
