const initialstate=
{filtername:"All Items"}

export default function filterreducer(state=initialstate,action){
    const {type,payload}=action;
    switch(type){
        case 'filteritem' :
            return {...state,filtername:payload}
        case 'resetfilter':
            return {...state,filtername:"All Items"}

            default :
            return state
    }
}
