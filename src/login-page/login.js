
import  {  useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }
    
    return (
        <div className = "auth-form-container">
        
        
        <form className = "Login-Form" onSubmit={handleSubmit}>
          <h2>Login page</h2>
  
          <label htmlFor = "email">email</label>
          <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder="123@gmail.com" id="email" name = "email"/>
          <br></br>
          <br></br>
          <br></br>
          <label htmlFor = "password">Password</label>
          <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name = "password"/>    
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Login</button>  
          <br></br>
          <br></br>
        </form>
          <button className = "Link-button" type="submit" onClick = {() => props.setSwitch(0)}>No email available-Register</button>
        </div>
      
    )
  }