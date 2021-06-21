<template>
  <div>
    <b-button block class="mr-2" variant="dark" v-b-modal.pago>
      Forma de Pago
    </b-button>

    <b-modal
      hide-footer
      id="pago"
      title="Forma de Pago"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
    >
      <p class="my-4">
        <strong>Efectivo</strong><br />
        Entregar al repartidor de confianza <br />
        <br />

        <strong>Transferencias y Deposito</strong><br />
        Su producto será entregado cuando la transferencia se haga en efectivo, máximo
        de 72 horas. Escribenos para más información al
        <a
          href="https://wa.link/3lba4v" target="_blank"
          class="btn btn-light mb-2"
        >
          <img src="~/static/whatsapp.png" alt="" width="25" /> +593 978 775 201 </a
        ><br />
        <br />

        <strong>Payphone</strong><br />
        Transfiere el valor del producto dando click al botón<br />

        <a class="" href="https://payp.page.link/HYK2"
          ><img src="~/static/descarga.png" alt="pay" width="140"
        /></a>
      </p>
    </b-modal>
  </div>
</template>

<style scoped></style>

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
