import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    parkings:[],
  },
  mutations: {
    setParking: (state, parkings) => (state.parkings = parkings)
  },
  
  getters:{
    
  },
  actions: {
    async fetchParkings({commit}){
      const res = await axios.get('http://sav4ner.pythonanywhere.com/api/v1/lots').then(res=> console.log(res.data)).catch(err=> console.log(err));
      
      commit('setPArking',res.data)
    },
    
  },
  
  modules: {
    
  },
});
