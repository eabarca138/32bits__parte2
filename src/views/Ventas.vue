<template>
    <section>
        <p>Cantidad de juegos con stock: {{cantidadJuegosStock}}</p>

        <ul v-if="juegosConStock" class="text-start">
            <li v-for="(juego, i) in juegosConStock" :key="i" class="mb-2">
                {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }} | <button class="btn btn-info" @click="vender(juego)">vender</button>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['juegosConStock']),

            cantidadJuegosStock() {
                return this.juegosConStock.length
            }
        },
        methods: {
            ...mapActions(['vender'])
        },
    }
</script>

<style lang="scss" scoped>

</style>