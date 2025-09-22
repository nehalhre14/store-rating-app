import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if(name.length < 20 || name.length > 60) return alert("Name must be 20-60 chars");
    if(password.length <8 || password.length>16) return alert("Password must be 8-16 chars");
    try{
      await API.post("/auth/signup", { name, email, address, password });
      alert("Signup success. Login now.");
      navigate("/login");
    }catch(err){
      alert(err?.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>
      <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
