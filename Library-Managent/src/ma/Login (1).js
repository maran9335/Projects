import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
function Login() {
    let move = useNavigate();
   const [login,setLogin] = useState({
    username: "",
    password: ""
   })

   function handleChange(e) {
    const { name, value } = e.target;
    setLogin(prevData => ({
        ...prevData,
        [name]: value
    }));
}
 function handleSubmit(){

if(login.username=== 'admin' && login.password==='admin'){
    return move('/form')
}
else{
    alert("Enter the correct Userid and Password")
}


 }

  return (
    
    <div>
    <h2>Admin Login Page </h2>
      <Form>
        <Form.Group className="mb-3" controlId="UserName">
            <Form.Label>USER NAME</Form.Label>
            <Form.Control type="text" placeholder="username" value={login.username} name="username" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control type="text" placeholder="Password" value={login.password} name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant='warning' type='button'onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
  )
}

export default Login
