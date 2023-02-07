import React from 'react'
import FoodItems from './FoodItems';

import { connect } from 'react-redux';
import { filteritem } from './actions';
import './App.css';

const Home = ({filteritem,filtername}) => {

    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const items=["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"]
    // const [filter,setFilter] =useState("All Items")
  return (
    <div>
      <center className='home'><h1>Please select your table number</h1>
      {
        numbers.map((num,index)=>
        <button style={{justifyContent:"space-between",margin:'0 5px'}} className='btn btn-outline-primary' key={index}> {num}</button>
        )
      } 
     <div><br/>
     <strong>Filter :</strong>
     <select className='' style={{background:''}} onChange={(e)=>filteritem(e.target.value)}>

      {
        items.map((prod,index)=>
        <option key={index} value={prod}>{prod}</option>
        )
      }
     </select>&nbsp;
     
     </div>

      </center>
      <FoodItems/>
      
    </div>
  )
}

const mapStateToProps=state=>({
  filtername:state
})
export default connect(mapStateToProps,{filteritem})(Home)
