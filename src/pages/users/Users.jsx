import React from "react";
import "./users.css";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="users">
      <div className="container">
        <div className="user_wrapper">
          <div className="user_info">
            <h1>User Table</h1>
            <h3>
              Name: {users.firstname} {users.lastname}
            </h3>
            <p>Email: {users.email}</p>
            <p>Password: {users.password}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
