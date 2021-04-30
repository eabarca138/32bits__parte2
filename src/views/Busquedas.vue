<template>
  <div class="about">
    <p>Cantidad de juegos: {{ cantidadJuegos }}</p>

    <label>Busqueda de juegos por código:<input v-model="codigo" type="text"></label>
    
    <ListaFiltro  :juegosFiltrados= "juegosFiltrados" :juegosPorCodigo= "juegosPorCodigo" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ListaFiltro from "@/components/ListaFiltro"

  export default {
    name: "App",
    components: {
        ListaFiltro
    },
    data() {
      return {
        codigo: ""
      }
    },
    computed: {
      ...mapState(["juegos"]),
      ...mapGetters(["juegosFiltrados", "juegosConStock"]),

      cantidadJuegos() {
        return this.juegos.length
      },
      juegosPorCodigo(){
        return !this.codigo ? this.juegosConStock : this.juegosFiltrados(this.codigo)
      }
    },
    }
</script>

<style lang="scss" scoped>
</style>