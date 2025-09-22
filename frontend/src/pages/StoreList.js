import React, { useEffect, useState } from "react";
import API from "../services/api";

function StoreList(){
  const [stores, setStores] = useState([]);
  useEffect(() => { fetchStores(); }, []);
  async function fetchStores(){
    const res = await API.get("/stores");
    setStores(res.data);
  }

  const submitRating = async (storeId, value) => {
    const token = localStorage.getItem("token");
    if(!token) return alert("Login to rate");
    // decode token for user id only for demo; better: get user id from profile API
    const userId = null; // for quick demo keep as null and backend must use authenticated user
    try {
      await API.post("/ratings", { userId, storeId, rating: value });
      alert("Rated");
      fetchStores();
    } catch (err) { alert("Error"); }
  };

  return (
    <div>
      <h2>Stores</h2>
      {stores.map(s => (
        <div key={s.id} style={{border:"1px solid #ccc", padding:10, margin:10}}>
          <h3>{s.name}</h3>
          <p>{s.address}</p>
          <p>Average rating: {s.avgRating ? parseFloat(s.avgRating).toFixed(1) : "No ratings"}</p>
          <div>
            Rate:
            {[1,2,3,4,5].map(n => <button key={n} onClick={() => submitRating(s.id,n)}>{n}</button>)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreList;
