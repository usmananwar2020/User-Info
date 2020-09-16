import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function View() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    const loadUser = async () => {
        await axios.get(`http://localhost:3001/users/${id}`)
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            })
            .catch((error) => {
                console.log("error======", error);
            })
    }
    useEffect(() => {
        loadUser();
    }, [])
    return (
        <div className="container py-4 ">
            <div className="d-flex justify-content-left">
                <Link className="btn btn-primary" to="/">
                    back to Home
      </Link></div>
            <div className="d-flex justify-content-left">
                <h1 className="display-4">User Id: {id}</h1>
                <hr />
            </div>
            <div className="d-flex justify-content-left">
                <h3 >
                    <p >Name: {user.name}</p>
                    <p >User name: {user.username}</p>
                    <p >Email: {user.email}</p>
                    <p >Phone: {user.phone}</p>
                    <p >Website: {user.website}</p>
                </h3>
            </div>
        </div >
    )
}

export default View
