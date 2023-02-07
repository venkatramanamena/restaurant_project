import React from 'react'
import { connect } from 'react-redux'
import { removeitem } from './actions'

const Orders = ({list,removeitem}) => {
    console.log(list)
  return (
    <div className='container'>
        <center>
                        <div className='row'>
                        {
                    list.map((items)=>(
                         
                                <div className='col-md-4' style={{margin:'10px 0'}}>
                                    <div className='card' style={{width:'18rem',padding:"7px"}}>
                                        
                                            <img className='card-img-top' src={items.url} alt=''></img>
                                       
                                        <div className='card-body'>
                                        <div className='card-title'>
                                            <h5>{items.name}</h5>
                                        </div>
                                        <div className='card-text'>
                                            Rs.{items.prize}<br/>
                                            <button className='btn btn-danger' onClick={()=>removeitem(items.id)}>remove</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                    ) )
                }
                                
                        </div>
                
                  
    </center>
    </div>
  )
}
const mapStateToProps=state=>({
    list:state.orderreducer
})

export default connect(mapStateToProps,{removeitem})(Orders)






