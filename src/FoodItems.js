import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { additem } from './actions';
const FoodItems = ({filtername,additem}) => {
    const [clonedata,setCloneData]=useState([])
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
        .then(response=>response.json())
        .then(json=>{
            setData(json.items)
            setCloneData(json.items)
        })
    },[])
   useEffect(()=>{

        if(filtername!=="All Items"){
            let modifydata=clonedata.filter(item=>item.category===filtername)
            setData(modifydata)
        }
        else{
            setData(clonedata)
        }
    
    },[filtername])
   
  return (
<div>
    <center>
    <div className='container'>
        <div className='row'>
            {
                data.map((item)=>
                <div className='col-md-4' style={{margin:'10px 0'}}>
                    <div className='card' style={{width:'18rem',padding:"7px"}}>
                        
                            <img className='card-img-top' src={item.url} alt=''></img>
                       
                        <div className='card-body'>
                        <div className='card-title'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='card-text'>
                            Rs.{item.prize}
                        </div>
                        <button className='btn btn-primary' key={item.id} onClick={()=>additem(item.id,item.name,item.prize,item.url)}>Order</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>

    </div>
    </center>
</div>
  )
}
const mapStateToProps=state=>({
    filtername:state.filterreducer.filtername,

})

export default connect(mapStateToProps,{additem})(FoodItems)
