import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passswordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");
  const [loginStatus,setLoginStatus] =useState("");
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passswordReg,
    }).then((response) => {
      console.log(response);
    });
  };
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: passsword,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }
      else{
        setLoginStatus(response.data[0].username);
      }
    });
  };
  return (
    <div className="App">
      <div>
        <h3>Registration</h3>
        <label>Username:-</label>
        <input type="text" onChange={(e) => setUsernameReg(e.target.value)} />
        <br />
        <label>Password:-</label>
        <input type="text" onChange={(e) => setPasswordReg(e.target.value)} />
        <br />
        <button onClick={register}>Register</button>
      </div>
      <div>
        <h3>Login</h3>
        <input type="text" placeholder="enter username" onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={login}>Login</button>
      </div>
      <h2>{loginStatus}</h2>
    </div>
  );
}

export default App;
