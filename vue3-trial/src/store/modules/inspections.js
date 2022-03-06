/* eslint-disable */ 
import inspectionsUrl from '../../config'
import axios from 'axios'

const inspections = {
  namespaced: true,
  state: {
    users: [],
    inspections: [],
    loading: false,
    error: ''
  },
  mutations: {
    GET_INSPECTIONS_REQUESTED (state) {
      state.loading = true
    },
    GET_INSPECTIONS_SUCCEEDED (state, payload) {
      state.users = payload.users
      state.inspections = payload.inspections,
      state.loading = false
    },
    GET_INSPECTIONS_FAILED (state){
      state.error = 'Error Occurred'
    },
    DELETE_INSPECTION (state, payload){
      state.inspections = state.inspections.filter(inspection => inspection.uuid != payload)
    }
  },
  actions: { 
    getInspections ({ commit }){
      commit('GET_INSPECTIONS_REQUESTED')
      try{
        axios(inspectionsUrl).then((response) => {
          commit('GET_INSPECTIONS_SUCCEEDED', response.data)
        })
      }catch(error){
         commit('GET_INSPECTIONS_FAILED')
      }
    },
    deleteInspection ({ commit }, data){
      commit('DELETE_INSPECTION', data.row.uuid);
    }
  },
  getters: {
    inspectionsLength(state){
      return state.inspections.length;
    }
  }
}

export default inspections;
