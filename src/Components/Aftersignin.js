
import React, { useEffect } from 'react';
import 'react-bootstrap'
import 'bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Container,Card,Button} from 'react-bootstrap'

import {useHistory} from 'react-router-dom'

function Aftersignin(props) {
 
  const {logout,currentUser} =useAuth()
  


const history=useHistory()
  async function signouthandler(e){
    e.preventDefault();
    try{
    await logout
    history.push("/")
  
    }
    catch(error){
      alert('error')
      console.log(error);
    }

  

  }
 
    return (
      <Container className="d-flex  justify-content-center align-items-center m-0 w-100 "  style={{border:"2px solid red",
                                                    minHeight:"100vh", minWidth:"100vw"}} >
    <Card className="d-flex border-green" style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Hey Nurmagemedov!!</Card.Title>
    <Card.Text>
    Whatsup dude!!!!!!jbdjskbsfbsfkbsfsbfdskfbskfsfsdf
    </Card.Text>
    <Button variant="dark" onClick={signouthandler}>Sign Out?</Button>
  </Card.Body>

    </Card>

      </Container>
       
    );}
    


export default Aftersignin;