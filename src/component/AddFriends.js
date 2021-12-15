import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import { Link, useHistory } from 'react-router-dom';

const AddFriends = (props) => {
    const { push } = useHistory();

    const [newFriend, setFriend] = useState({
        id: Date.now(),
        name: "",
        age: 20,
        email: ""        
    });

    const handleChange = (e) => {
        setFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/friends/`, newFriend)
            .then (resp => {                 
                setFriend(resp.data);
                //	Redirect the user to the friends page.
                push (`/friends/`);
            })
            .catch (err => {
                console.log(err);
            })
    }

    const { name, age, email } = newFriend;
    return(<div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Name</label>
                            <input value={name} onChange={handleChange} name="name" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input value={age} onChange={handleChange} name="age" type="number" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input value={email} onChange={handleChange} name="email" type="text" className="form-control"/>
                        </div>
                        
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add"/>
                        <Link to={`/friends`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default AddFriends;