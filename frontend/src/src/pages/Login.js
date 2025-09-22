import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      // redirect based on role
      const role = res.data.user.role;
      if(role === "admin") navigate("/admin");
      else if(role === "owner") navigate("/owner");
      else navigate("/");
    }catch(err){
      alert(err?.response?.data?.msg || "Login failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
