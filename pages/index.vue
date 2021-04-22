<template>
  <section class="home">
    <article>
      <div
        class="blog-avatar"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <!-- Template for page title -->
      <h1 class="blog-title">
        {{ $prismic.asText(homepageContent.headline) }}
      </h1>
      <!-- Template for page description -->
      <p class="blog-description">
        {{ $prismic.asText(homepageContent.description) }}
      </p>
      <div class="carousel-wrapper">
        <VueSlickCarousel v-bind="slickOptions" :arrows="true">
          <section class="section">
            <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
              <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
                <div class="style_rootInner__32CX1">
                  <div>
                    <div class="style_title__1jQC3"><b>Short</b></div>
                  </div>
                  <div class="style_action__32sxL">
                    <div class="style_root__2jAzX">
                      <div class="button is-info is-light">
                        Muy pronto
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </section>
          <section class="section">
            <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
              <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
                <div class="style_rootInner__32CX1">
                  <div>
                    <div class="style_title__1jQC3"><b>Short</b></div>
                  </div>
                  <div class="style_action__32sxL">
                    <div class="style_root__2jAzX">
                      <div class="button is-info is-light">
                        Muy pronto
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </section>
          <section class="section">
            <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
              <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
                <div class="style_rootInner__32CX1">
                  <div>
                    <div class="style_title__1jQC3"><b>Short</b></div>
                  </div>
                  <div class="style_action__32sxL">
                    <div class="style_root__2jAzX">
                      <div class="button is-info is-light">
                        Muy pronto
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </section>
          <section class="section">
            <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
              <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
                <div class="style_rootInner__32CX1">
                  <div>
                    <div class="style_title__1jQC3"><b>Short</b></div>
                  </div>
                  <div class="style_action__32sxL">
                    <div class="style_root__2jAzX">
                      <div class="button is-info is-light">
                        Muy pronto
                      </div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </section>
        </VueSlickCarousel>
      </div>
      <!-- Check blog posts exist -->
      <div v-if="posts.length !== 0" class="blog-main">
        <section class="section">
          <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
            <nuxt-link :to="`/faldas`" class="style_root__3iCRH falda__imagen">
              <div class="style_rootInner__32CX1">
                <div>
                  <div class="style_title__1jQC3"><b>Faldas</b></div>
                </div>
                <div class="style_action__32sxL">
                  <div class="style_root__2jAzX">
                    <div class="button is-info is-light">
                      Click para entrar!
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>

        <section class="section">
          <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
            <nuxt-link :to="`/`" class="style_root__3iCRH overol__imagen">
              <div class="style_rootInner__32CX1">
                <div>
                  <div class="style_title__1jQC3"><b>Top</b></div>
                </div>
                <div class="style_action__32sxL">
                  <div class="style_root__2jAzX">
                    <div class="button is-info is-light">
                      Muy pronto
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>

        <section class="section">
          <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
            <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
              <div class="style_rootInner__32CX1">
                <div>
                  <div class="style_title__1jQC3"><b>Short</b></div>
                </div>
                <div class="style_action__32sxL">
                  <div class="style_root__2jAzX">
                    <div class="button is-info is-light">
                      Muy pronto
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>

        <section class="section">
          <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
            <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
              <div class="style_rootInner__32CX1">
                <div>
                  <div class="style_title__1jQC3"><b>Jeans</b></div>
                </div>
                <div class="style_action__32sxL">
                  <div class="style_root__2jAzX">
                    <div class="button is-info is-light">
                      Muy pronto
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>

        <section class="section">
          <div class="style_wrapper__1BeS5 column is-8 is-offset-2">
            <nuxt-link :to="`/`" class="style_root__3iCRH bi__imagen">
              <div class="style_rootInner__32CX1">
                <div>
                  <div class="style_title__1jQC3"><b>Cargan</b></div>
                </div>
                <div class="style_action__32sxL">
                  <div class="style_root__2jAzX">
                    <div class="button is-info is-light">
                      Muy pronto
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </section>
      </div>
      <!-- If no blog posts return message -->
      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</template>

<script>
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  data() {
    return {
      slickOptions: {
        dots: true,
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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
      }
    };
  },
  name: "Home",
  components: {
    BlogWidget
  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle("blog_home")).data;

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        homepageContent,
        posts: blogPosts.results,
        image: homepageContent.image.url
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.carousel-wrapper {
  padding: 40px;
}

.carousel-wrapper .section {
  padding: 1rem 0.5rem;
}

.blog-main .section {
  padding: 1rem 5.5rem;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>

<style lang="sass" scoped>


.home
  max-width: 100%
  margin: auto
  text-align: center
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
  margin: 0
  margin-bottom: 3rem

@media (max-width: 767px)
  .home
    padding: 0 20px
  .blog-main
    padding: 0
    font-size: 18px
</style>
