import React,{useState,useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  

function signin(e){
    e.preventDefault()
 
  let data = {email,password}
           
        axios.post("/user/login",data).then((response)=>{
          console.log(response)
          if(response.status===201)
          {
            navigate("/");

          }
        }).catch((e)=>{
          console.log(e)
        })
        
        }
  return (
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        
      }}
    >
    
       <Form  onSubmit={signin}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
        id="inputPassword5" placeholder='password'
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>       


       
        
    
      <Button type="submit" 
       
      style={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
        ,padding:15,backgroundColor:'black',marginLeft:50,
          borderColor:'white',marginTop:40,paddingLeft:80,paddingRight:80}}>Login</Button>
    
  
    </Form>
                
    </div>
  );
}
