<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      fixed="top"
      class="animate__animated animate__fadeInDown"
    >
      <b-navbar-brand to="/">
        <img
          src="@/static/ragazzanew.png"
          class="d-inline-block align-middle logo__gc"
          alt="Kitten"
        />
      </b-navbar-brand>

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <b-navbar-nav to="/">
        <SearchForm />
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="#">Menu</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import SearchForm from "~/components/SearchForm";
export default {
  name: "Navbar",
  components: {
    SearchForm
  }
};
</script>
