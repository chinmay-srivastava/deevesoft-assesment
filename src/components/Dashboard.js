import React,{useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../context/AuthContext';
import Navigation from './Navigation';
import '../App.css'
import ChoiceForm from './ChoiceForm';



export default function Dashboard() {
    const{currentUser,logout}=useAuth();
    const [error, setError] = useState('');
    const history=useHistory()
    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch  {
            setError('Failed to Logout')
            
        }
    }
  return (<div>
   
<Navigation/>

    <Container >
    <Row><Col xs={5} style={{marginTop:'132px',marginLeft:'32px'}} >
    <h1>Goal</h1>
    <a style={{fontSize:'24px',color:'#727272'}}>Select your primary goal. What do you want to accomplish in the next few years?</a>
    </Col>
    <Col >
    <ChoiceForm/>
    </Col>
  </Row>
    </Container>
    <Button onClick={handleLogout}>Logout</Button>
    </div>)
}
