import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import CurrentDate from './CurrentDate';
import Button from '@material-ui/core/Button';
function AddUser() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const [date, setDate] = useState('');

    const { name, username, email, phone, website } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const addDate=()=>{
        setUser({
            ...user, ['dateCreated']:date,
            ...user, ['dateModified']:date
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push('/');
    }
    return (
        <div className="container">
            <CurrentDate setDate={setDate} />
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                            required="required"
                        />
                    </div>
                    <Button type="submit" variant="contained" style={{width: '100%', fontSize:'20px'}} color="primary" onClick={()=> addDate()} >Add User</Button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
