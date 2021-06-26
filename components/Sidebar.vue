<template>
  <div>
    <b-sidebar id="sidebar-right" title="Menu" backdrop shadow right>
      <template #footer>
        <div class=" text-dark align-items-center px-3 py-2">
          <a href="https://wa.link/nvanws" class="btn btn-light mb-2">
            <img src="~/static/whatsapp.png" alt="" width="25" /> +593 962 704
            731
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
        <Collapse />
      </div>
    </b-sidebar>
  </div>
</template>
