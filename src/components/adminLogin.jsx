import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'

const Admin=()=>{
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState('')
    let navigate=useNavigate()
    let adminLogin=(e)=>{
        e.preventDefault();
        let data={email,password} //data from input

        //admin validation
        if(email==='admin@gmail.com' && password==='admin'){
            navigate('/admin/')
        }else{
            alert('invalid login credentials')

        }

    }
    let back=()=>{
        navigate('/')
    }
    return(
        <div className="adminlogin">
            <div className="admin_form_container_card">
            <div className="alogos">
               <img className='myalogo' src="images/mylogo.jpg" height="120px" width="150px" alt="" />
               <h1 id="head_a">LOGIN AS ADMIN </h1>
               </div>
                <div className="form_input">
                    <form action="" onSubmit={adminLogin}>
                       <div className="email">
                       <input type="email" value={email} onChange={(x)=>setEmail(x.target.value)} required placeholder="Enter e-mail Address" className="" />
                       </div>
                       <div className="password">
                       <input type="password" value={password} onChange={(x)=>setPassword(x.target.value)} required placeholder="Enter password" className=""/>
                       </div>
                       <button className="adminLoginbutton" onClick={()=>adminLogin()}>Login</button>
                       <button class="backbtn" onClick={()=>back()}>Back</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Admin;