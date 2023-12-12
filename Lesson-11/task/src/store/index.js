import { createStore } from "vuex";
import trip from "./modules/trip.js";
import buses from "./modules/buses.js";
import drivers from "./modules/drivers.js";

export default createStore({
  modules: { trip, buses, drivers },
});
