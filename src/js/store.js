
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    solicitudes: [
      {
        lote: '33',
        nombre: 'Matias Pando',
        trabajo:  'Carpintero',
        estado:'Enviado'
      },
      {
        lote: '7',
        nombre: 'Juan Gonzalez',
        trabajo: 'Cadete',
        estado:'Leído'
      },
      {
        lote: '147',
        nombre: '',
        trabajo: 'Jardinero',
        estado:'Autorizado'
      },
    ]
  },
  getters: {
    solicitudes({ state }) {
      return state.solicitudes;
    }
  },
  actions: {
    addSolicitud({ state }, solicitud) {
      state.solicitudes = [...state.solicitudes, solicitud];
    },
  },
})
export default store;
