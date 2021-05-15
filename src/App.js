import React, { useEffect } from 'react'
import './App.css';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './component/nav/Header';
import Home from './pages/Home' 
import Complateregister from './pages/auth/RegisterComplate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Switch, Route } from 'react-router-dom';
import Forgot from './pages/auth/Forgot'
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import History from './pages/user/History';
import UserRouters from './component/routes/UserRoutes';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import Profile from './pages/user/Profile';
import Ngo from './pages/user/Ngo';

function App() {

     const dispatch = useDispatch();
     
     useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged(async (user) => {
               if(user) {
                    const idTokenResult = user.getIdTokenResult()
                    const id = (await idTokenResult).token
                    currentUser(id).then(tan => {
                         
                         dispatch({
                              type: "LOGGED_IN_USER",
                              payload: {
                                  name: tan.data.name,
                                   email: tan.data.email,
                                   picture: tan.data.picture,
                                   role: tan.data.role,
                                   token:  idTokenResult.token
                              }
                         })
                    }).catch(err => err)
                    
               }
          })
          
          return () => unsubscribe()
     }, [])


     const currentUser = async(authtoken) => {
          return await axios.post(`${process.env.REACT_APP_API}/current-user`, {} , {
              headers: {
                  authtoken
              }
          })
      }


  return (
    

    <div >
    <Header />
     <ToastContainer />
       <Switch>
       <UserRouters exact path="/user/history">
              <History />
         </UserRouters>
         <UserRouters exact path="/user/Ngo">
              <Ngo />
         </UserRouters>
         <UserRouters exact path="/user/Profile">
              <Profile />
         </UserRouters>
       <UserRouters exact path="/user/password">
              <Password />
         </UserRouters>
       <UserRouters exact path="/user/wishlist">
              <Wishlist />
         </UserRouters>
       <Route exact path="/forget/password">
              <Forgot />
         </Route>
       <Route exact path="/register/complete">
              <Complateregister />
         </Route>
         <Route exact path="/login">
              <Login />
         </Route>
         <Route exact path ="/register">
              <Register />
         </Route>
         <Route exact path="/">
              <Home />
         </Route>
       </Switch>
    
    </div>
  );
}

export default App;
