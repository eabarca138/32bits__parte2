import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: "002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true
      },
      {
        codigo: "004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false
      },
      {
        codigo: "005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true
      },
    ],
    juegosVendidos: []
  },
  getters: {
    juegosConStock: (state) => {
      return state.juegos.filter((juego) => juego.stock > 0)
    },

    juegosFiltrados: (state, getters) => (codigo) => {
        return getters.juegosConStock.filter((juego) => {
        return juego.codigo == codigo;
      });
    },

    sumaTotal(state) {
      return state.juegosVendidos.reduce((acc, x) => acc + x.precio, 0)
    }
  },
  mutations: {
    procesarVenta(state, juego) {
      state.juegos.forEach((x) => {
        if (x.codigo == juego.codigo && x.stock > 0) {
          x.stock--
        }
      })
    },
    registrarVenta(state, payload) {
          state.juegosVendidos.push(payload)
        },
    mensajeVenta() {
      alert('Venta procesada')
    }
  },
  actions: {
    async vender({ commit, state }, juego) {
        try {
          await new Promise((resolve)=>setTimeout(() => {
            state.juegos.forEach((x) =>{
              if (x.codigo == juego.codigo && x.stock > 0) {
              commit("procesarVenta", juego);
             }
           })
            resolve();
        }, 2000)); 

        await new Promise((resolve)=>setTimeout(() => {
          state.juegos.forEach((x) =>{
            if (x.codigo == juego.codigo && x.stock > 0) {
              const juegoVendido = {
                codigo: x.codigo,
                nombre: x.nombre,
                precio: x.precio
              };
               commit('registrarVenta', juegoVendido)
              }
            })
            resolve();
          }, 1000)); 
          
          commit('mensajeVenta')
          
        } catch (error) {
          console.log(error);
        }
    }
  },
  modules: {},
});
