<template>
  <div>
    <b-button
      class="mr-2"
      squared
      variant="outline-secondary"
      v-b-modal.modal-1
    >
      <img src="~/static/mail.png" alt="de" /> Contáctanos
    </b-button>
    <b-button class="ml-2" squared variant="outline-secondary" v-b-modal.envio>
      <img src="~/static/delivery.png" alt="de" /> Envío
    </b-button>

    <b-modal
      hide-footer
      id="modal-1"
      title="Contáctanos"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
    >
      <p class="my-4">
        Gracias por visitar Ragazza Stile. <br /><br />
        Para consultas de servicio al cliente, envíenos un correo electrónico a <strong><a href="mailto:name@email.com">ragazzastile@gmail.com</a></strong> 
      </p>
    </b-modal>

    <b-modal
      hide-footer
      id="envio"
      title="Envío"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
    >
      <p class="my-4">
        El tiempo normal de procesamiento de pedidos es de 72 horas durante los
        días hábiles (de lunes a viernes).
      </p>
    </b-modal>
  </div>
</template>

<style scoped>
.btn-outline-secondary:hover {
  color: initial;
  background-color: #ebc1cb;
  border-color: #e894a8;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active,
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: initial;
  background-color: initial;
  border-color: initial;
}

.btn-outline-secondary {
  color: initial;
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark"
    };
  }
};
</script>
