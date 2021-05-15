import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UserNav from '../../component/nav/UserNav';
import {auth} from '../../firebase'

const Password = () => {
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);


    const  handleSubmit = async(e) => {
        e.preventDefault()
        setloading(true)
        await auth.currentUser.updatePassword(password).then(() => {
            setloading(false)
            toast.success("Password updated")
            setpassword("")
        }).catch((err) => {
            setloading(false)
            toast.error(err.message)
        })
    }






    const passwordUpdate = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Your Password</label>
                <input 
                type="password"
                onChange={e => setpassword(e.target.value)}
                value={password}
                className="form-control"
                placeholder="Enter new password"
                disabled={loading}
                 />
                 <button className="btn btn-primary" disabled={!password || password.length< 6 || loading}>
                     Submit
                 </button>
            </div>
        </form>
    )

    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                   <UserNav />
            </div>
            <div className="col">
                    <h4>
                        Password update
                    </h4>
                    <br />
                    <br />
                    {
                        passwordUpdate()
                    }
            </div>
        </div>
    </div>
    )
}


export default Password