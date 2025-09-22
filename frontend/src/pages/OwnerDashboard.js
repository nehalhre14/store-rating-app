import React from "react";

function OwnerDashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Store Owner Dashboard</h2>
      <p>This is a placeholder page.</p>
      <p>Here you can implement:</p>
      <ul>
        <li>View list of users who rated your store</li>
        <li>See average rating of your store</li>
        <li>Update your password</li>
      </ul>
      <p>Future implementation: Fetch data from <code>/api/stores</code> and <code>/api/ratings</code></p>
    </div>
  );
}

export default OwnerDashboard;
