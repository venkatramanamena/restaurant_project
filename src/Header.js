import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import orderreducer from './orderreducer';
const Header = ({count}) => {
  return (
    <div>
        <Navbar bg="dark">
        <Container>
          <Link to='/'><Navbar.Brand href="#home" style={{textDecoration:'none',color:'white'}}>Restaurant</Navbar.Brand></Link>
          <Link to='/order'><button className='btn btn-primary'>Orders  <span style={{background:'white',color:'black',padding:'5px' ,borderRadius:'5px',width:'10px'}}>{count}</span></button></Link>
        </Container>
      </Navbar>
    </div>
  )
}

const mapStateToProps=state=>({
  count:state.orderreducer.length
})

export default connect(mapStateToProps)(Header)
