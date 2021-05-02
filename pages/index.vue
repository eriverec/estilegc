<template>
  <client-only>
    <section class="home">
      <article>
        <Header />

        <div>
          <center><h2>ACCESORIOS</h2></center>
        </div>
        <div class="carousel-wrapper">
          <VueSlickCarousel v-bind="slickOptions" :arrows="false">
            <section
              v-for="accesorio in accesorios"
              :key="accesorio.id"
              v-bind:post="accesorio"
              class=""
            >
              <!-- Here :post="post" passes the data to the component -->
              <accesorio-widget :accesorio="accesorio"></accesorio-widget>
            </section>
          </VueSlickCarousel>
        </div>

        <!-- Check blog posts exist -->
        <div class="blog-main">
          <section
            v-for="section in sections"
            :key="section.id"
            v-bind:post="section"
            class="section"
          >
            <!-- Here :post="post" passes the data to the component -->
            <section-widget :section="section"></section-widget>
          </section>
        </div>

        <div>
          <center><h2>ROPA PLAYERA</h2></center>
        </div>
        <div class="carousel-wrapper">
          <VueSlickCarousel v-bind="playeraOptions" :arrows="true">
            <section
              v-for="playera in playeras"
              :key="playera.id"
              v-bind:post="playera"
            >
              <!-- Here :post="post" passes the data to the component -->
              <playera-widget :playera="playera"></playera-widget>
            </section>
          </VueSlickCarousel>
        </div>
      </article>
    </section>
  </client-only>
</template>

<script>
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";
import SectionWidget from "~/components/SectionWidget.vue";
import AccesorioWidget from "~/components/AccesorioWidget.vue";
import PlayeraWidget from "~/components/PlayeraWidget.vue";
import Header from "~/components/Header.vue";

export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
      },
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
  name: "Home",
  components: {
    BlogWidget,
    SectionWidget,
    AccesorioWidget,
    PlayeraWidget,
    Header
  },

  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      //const homepageContent = (await $prismic.api.getSingle('blog_home')).data
      // Query to get posts content to preview
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );

      // Query to get posts content to preview
      const SectionPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "section"),
        { orderings: "[my.section.date desc]" }
      );

      // Query to get posts content to preview
      const AccesorioPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "accesorio"),
        { orderings: "[my.accesorio.date desc]" }
      );

      const PlayeraPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "playera"),
        { orderings: "[my.playera.date desc]" }
      );

      // Returns data to be used in template
      return {
        posts: blogPosts.results,
        sections: SectionPosts.results,
        accesorios: AccesorioPosts.results,
        playeras: PlayeraPosts.results

        //image: SectionPosts.image.url,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
.jumbotron {
  border-radius: inherit;
  background-image: url("~/static/portada.jpg");
  background-position-x: center;
  background-position-y: center;
}
.border {
  border: transparent;
}
</style>

<style lang="sass">


.home
  max-width: 100%
  margin: auto
  .blog-avatar
    height: 140px
    width: 140px
    border-radius: 50%
    background-position: center
    background-size: cover
    margin: 1em auto
  .blog-description
    font-size: 18px
    color: #9A9A9A
    line-height: 30px
    margin-bottom: 3rem
    padding-bottom: 3rem
    font-family: 'Lato', sans-serif
    border-bottom: 1px solid #DADADA

.blog-main
  max-width: 950px
  margin: auto
  text-align: left
  &.single img
    width: 100%
    height: auto
  &.single a
    text-decoration: none
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.8) 75%)
    background-repeat: repeat-x
    background-size: 2px 2px
    background-position: 0 23px

.blog-post
  margin: 80px
  margin-top: 7rem

@media (max-width: 767px)
  .home
  .blog-post
    margin: 30px
    margin-top: 7rem
  .blog-main
    padding: 0
    font-size: 18px
</style>
