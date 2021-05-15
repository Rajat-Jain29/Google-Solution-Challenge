import React, { useState } from 'react'
import {auth} from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
   


        const [email, setEmail] = useState("")
        const handleSubmit = async(e) => {
           e.preventDefault()
           const config = {
               url: process.env.REACT_APP_REGISTER_REDIRECT_URL ,
               handleCodeInApp: true
           }

           await auth.sendSignInLinkToEmail(email, config)
           toast.success(`Email is sent to ${email}. Click the link to complete your registration`)

        //    save user email in localstroage

        window.localStorage.setItem("emailFor Registertion", email)
           setEmail("")
        }


        const registerForm = () => <form onSubmit={handleSubmit}>
            <input type="email" className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            placeholder="your email" />
            <br />
            <button type="submit" className="btn btn-raised">Register</button>
        </form>
    
      
    return (
        <div>
            <div className="container  p-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4>Register</h4>
                        <ToastContainer />
                        {
                            registerForm()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
