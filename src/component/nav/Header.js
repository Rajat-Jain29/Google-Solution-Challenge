import React, { useState } from 'react'
import { Menu } from 'antd';
import { SettingOutlined, HomeOutlined,  UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import firebase from 'firebase'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
function Header() {
    const { SubMenu } = Menu;
    const [current, setcurrent] = useState("Home")
    let dispatch = useDispatch();
    const history = useHistory(); 
    let {user} = useSelector((state) => ({...state}))
   
    const handleClick = e => {
        setcurrent(e.key)
        
       
    }

    const logout = () => {
      firebase.auth().signOut()
      dispatch({
        type : "LOGOUT",
        payload: null
      });
      history.push("/login")
    }
      
 
    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to="/">
             Home
          </Link>
        </Menu.Item>
       {
         !user && (
          <Menu.Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">
              register
          </Link>
        </Menu.Item>
         )
       }
       {
         !user && (
          <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">
              Login
          </Link>
        </Menu.Item>
         )
       }
       
       
       {
         user && (
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.name} className="float-right">
         
         {/* <Menu.Item key="setting:1">Option 1</Menu.Item>
         <Menu.Item key="setting:2">Option 2</Menu.Item> */}
         <Menu.Item onClick={logout} icon={<LogoutOutlined /> } >Logout</Menu.Item>
      
      
     </SubMenu>
         )
       }
        
      </Menu> 
        </div>
    )
}

export default Header
