import  {  useState } from "react";
import { useNavigate } from "react-router-dom";
import './../App.css';

export const Login = (props) => {
    const navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }
    
    return (
        <div className = "back-form-ground">
        <div className="auth-form-container">
        <form className = "Login-Form" onSubmit={handleSubmit}>
          <h2 className="login-heading">Login page</h2>
  
          <label htmlFor = "email" className="elements-heading">Email</label>
          <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder="123@gmail.com" id="email" name = "email"/>
          <br></br>
          <br></br>
          <br></br>
          <label htmlFor = "password" className="elements-heading">Password</label>
          <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name = "password"/>    
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Login</button>  
          <br></br>
          <br></br>
        </form>
          <button className = "Link-button" type="submit" onClick = {() => navigate("/register")}>No email available-Register</button>
        </div>
        </div>
    )
  }