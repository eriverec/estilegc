<template>
  <div>
    <b-sidebar
      id="sidebar-right"
      title="Menu"
      backdrop
      shadow
      right 
    >
      <template #footer>
        <div class=" text-dark align-items-center px-3 py-2">
          <a
            href="https://api.whatsapp.com/send?phone=978775201&text=Quiero%20este%20producto"
            class="btn btn-light mb-2"
          >
            <img src="~/static/whatsapp.png" alt="" width="25" /> +593 978 775 201
          </a>
          <a
          target="blank"
            class="btn btn-light mb-2"
            href="https://www.instagram.com/ragazzastile.ec/"
          >
            <img src="~/static/instagram.png" alt="" width="25" />
            @ragazzastile.ec
          </a>
        </div>
      </template>
      <div class="px-3 py-2">
        <SearchForm />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
