import filterreducer from "./filterreducer";
import orderreducer from "./orderreducer";
import { combineReducers } from "redux";


const reducer=combineReducers(
    {
        filterreducer:filterreducer,
        orderreducer:orderreducer

    }
)
export default reducer