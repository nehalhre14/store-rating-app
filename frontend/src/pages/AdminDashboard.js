import React from "react";

function AdminDashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <p>This is a placeholder page.</p>
      <p>Here you can implement:</p>
      <ul>
        <li>View all users</li>
        <li>View all stores</li>
        <li>Apply filters on listings</li>
        <li>See total users, stores, submitted ratings</li>
      </ul>
      <p>Future implementation: Fetch data from <code>/api/users</code> and <code>/api/stores</code></p>
    </div>
  );
}

export default AdminDashboard;
