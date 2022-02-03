
import React,{useRef, useState} from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {

    const emailRef=useRef();
    const passRef=useRef();
    const cnfPassRef=useRef();
    const {signup}= useAuth();
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);
    const history=useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        if(passRef.current.value!==cnfPassRef.current.value)
       return seterror('Passwords do not match');
       if(passRef.current.value.length<6)
       return seterror('Password should be longer than 6 characters')
       try
        {   seterror("")
        setLoading(true);
        await signup(emailRef.current.value,passRef.current.value)
        history.push('/login')
           
        }
        catch{
            seterror('SignUp Failed')
        }
        setLoading(false)
    }



  return (
    <div>
      <Card className="w-50 " style={{ marginLeft:'300px'}} >
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="cnfpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={cnfPassRef}></Form.Control>
            </Form.Group>
            <Button disabled={Loading} className="w-100" type="submit" style={{marginTop:'32px'}}>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-4" style={{ marginLeft:'300px'}}>Already have an Account?<Link to="/LogIn">Log In</Link></div>
    </div>
  );
};

export default SignUp;
