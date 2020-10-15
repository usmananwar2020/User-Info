import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();

  }, [])

  const loadUsers = async () => {
    await axios
      .get("http://localhost:3001/users")
      .then(res => {
        setUser(res.data.reverse());
      })
      .catch(error => {
        console.log(error)
      })
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
    alert("Uer has been deleted");
  }
  return (
    <div className="container-fluid">
      <div className="py-4">
        <h1>HOME</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date Created </th>
              <th scope="col">Date Modified </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((user, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dateCreated}</td>
                  <td>{user.dateModified}</td>
                  <td>
                      <Link style={{textDecoration: 'none'}} to={`./viewUser/${user.id}`}><Button variant="contained" color="primary">View</Button></Link>
                      <Link style={{textDecoration: 'none'}} to={`./EditUser/${user.id}`}> <Button variant="contained">Edit</Button></Link>
                      <Link style={{textDecoration: 'none'}} onClick={() => deleteUser(user.id)}> <Button variant="contained" color="secondary">Delete</Button></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>


      </div>

    </div>
  )
}

export default Home
