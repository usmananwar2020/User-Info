import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';

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
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        alert("Uer has been deleted");
    }
    return (
        <div className="container py-4 ">
            <div className="d-flex flex-row-reverse">
                <Link className="btn btn-primary" to="/">
                    back to Home
                </Link>
            </div>
            <div className="d-flex justify-content-left">
                <h1 >User Id: {id}</h1>
            </div>
                <ul className="list-group w-100">
                    <li className="list-group-item d-flex jutify-content-left"><b>Name :</b> {user.name}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>User name :</b> {user.username}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>Email :</b> {user.email}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>phone :</b> {user.phone}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>Website :</b> {user.website}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>Date Created :</b> {user.dateCreated}</li>
                    <li className="list-group-item d-flex jutify-content-left"><b>Date Modified :</b> {user.dateModified}</li>
                </ul>
        </div >
    )
}

export default View
