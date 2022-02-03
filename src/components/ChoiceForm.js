import React, { useState} from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import { db } from "../firebase";
import "../App.css"

export default function ChoiceForm() {
  const [input, setinput] = useState("");

  function handleSubmit(e){
      e.preventDefault();
      db.collection('goal').add({
          goal:input
      }).then(()=>{
          alert('Goal has been set')
          console.log('Submitted')
      }).catch((error)=>{
        alert(error.message)
        console.log(error)
      });
setinput('')
  }
  return (
    <Container>
      <Card style={{backgroundColor:'#f7f7f7', minHeight:'70vh', 
      maxWidth:'40vw', marginLeft:'-32px', marginTop:'48px', borderStyle:'none'}}>
        <Form onSubmit={handleSubmit}>
        
          <FormGroup className="radio-in">
          <input type="radio"
                 checked={input==='Get Leaner'}
                 value='Get Leaner'
                 onChange={(e)=>{setinput(e.target.value)}}    />
           <label>Get Leaner</label> 
           <br/>     
           <input type="radio"
           checked={input==='Get active again'}
           value='Get active again'
           onChange={(e)=>{setinput(e.target.value)}}    />
     <label>Get active again</label> 
     <br/>    
     <input type="radio"
                 checked={input==='Reduce Pain or injury'}
                 value='Reduce Pain or injury'
                 onChange={(e)=>{setinput(e.target.value)}}    />
           <label>Reduce Pain or injury</label> 
           <br/>     
           <input type="radio"
                 checked={input==='Improve cardio and speed'}
                 value='Improve cardio and speed'
                 onChange={(e)=>{setinput(e.target.value)}}    />
           <label>Improve cardio and speed</label> 
           <br/>     
           <input type="radio"
                 checked={input==='Improve Sports Performance'}
                 value='Improve Sports Performance'
                 onChange={(e)=>{setinput(e.target.value)}}    />
           <label>Improve Sports Performancer</label> 
           <br/>      
           </FormGroup>
          <button className="submit-btn" type='submit'>SUBMIT </button>
        </Form>
      </Card>
    </Container>
  );
}
