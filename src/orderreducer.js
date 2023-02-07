const initialstate=[]

export default function orderreducer(state=initialstate,action){
    const {type,payload}=action;
    switch(type){
        case 'Addorder' :
            return [...state,payload]
        case 'removeorder':
            return state.filter(orderitem=>orderitem.id!==payload)

            default :
            return state
    }
}
