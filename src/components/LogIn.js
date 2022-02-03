
import React,{useRef, useState} from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../context/AuthContext";

const LogIn = () => {

    const emailRef=useRef();
    const passRef=useRef();
    const {login}= useAuth();
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);
    const history=useHistory()

    async function handleSubmit(e){
        e.preventDefault();
       
       if(passRef.current.value.length<6)
       return seterror('Password should be longer than 6 characters')
       try
        {   seterror("")
        setLoading(true);
        await login(emailRef.current.value,passRef.current.value)
        history.push('/')
           
        }
        catch{
            seterror('SignIn Failed')
        }
        setLoading(false)
    }



  return (
    <div className="align-items-center" >
      <Card className="w-50 " style={{ marginLeft:'300px'}} >
        <Card.Body>
          <h2 className="text-center mb-4">Welcome Back!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passRef}></Form.Control>
            </Form.Group>
           
            <Button disabled={Loading} style={{marginTop:'32px'}} className="w-100" type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-4" style={{ marginLeft:'300px'}}>Don't have an Account? <Link to="/signup">Signup</Link></div>
    </div>
  );
};

export default LogIn;
