export const filteritem =( value)=>async dispatch=>{
    dispatch({
        type:"filteritem",
        payload:value
    })
}
export const resetfilter=( )=>async dispatch=>{
    dispatch({
        type:"resetfilter",
       
    })
}
export const additem =( id,name,prize,url)=>async dispatch=>{
    dispatch({
        type:"Addorder",
        payload:{
            id:id,
            name:name,
            prize:prize,
            url:url
        }
    })
}
export const removeitem=( id)=>async dispatch=>{
    dispatch({
        type:"removeorder",
        payload:id
       
    })
}
