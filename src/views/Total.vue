<template>
  <div class="m-5">
    <section>
      <h2>Ventas registradas</h2>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col-2">Código</th>
            <th scope="col-5">Nombre</th>
            <th scope="col-5">Precio</th>
          </tr>
        </thead>
        <tbody v-if="juegosVendidos.length > 0">
          <tr v-for="(vendido, i) in juegosVendidos" :key="i">
            <td>{{ vendido.codigo }}</td>
            <td>{{ vendido.nombre }}</td>
            <td>{{ vendido.precio }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr class="col-12">
            <td>No hay ventas registradas</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
        <p>Monto total de ventas: ${{sumaTotal}}</p>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["juegosVendidos"]),
    ...mapGetters(["sumaTotal"])
  }
};
</script>

<style lang="scss" scoped></style>
