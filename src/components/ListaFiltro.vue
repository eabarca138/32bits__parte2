<template>
  <div>
    <ul v-if="juegosFiltrados">
      <li v-bind:style="{ backgroundColor: juego.color }" v-for="(juego, i) in juegosPorCodigo" :key="i">
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaFiltro",
  props: {
    juegosFiltrados: {Array},
    juegosPorCodigo: {Array}
  },
};
</script>

<style lang="scss" scoped></style>
