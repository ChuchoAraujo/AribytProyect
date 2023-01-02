import React, { useContext } from "react";



export const CardUser = ({user}) => {

  return (
    <div className="container text-center p-5">
      <h1 className="p-2">Usuarios</h1>
      <table className="table">
        <thead className="table-success">
          <tr>
            <th scope="col">Id usuario</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        {user.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>Username</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
