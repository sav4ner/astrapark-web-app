import { createStore } from "vuex";
import parkingModule from './modules/parking.module';
import loginModule from './modules/login.module'

export default createStore({
  state: {
    parkingState: parkingModule.state,
    loginState: loginModule.state,
  },
  mutations: {
    
  },
  
  getters:{
    
  },
  actions: {
   
  },
  
  modules: {
    parkingModule,
    loginModule,
  },
});
