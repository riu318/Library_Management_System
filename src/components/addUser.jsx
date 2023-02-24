import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'

const AddUser = () => {
    let [name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let [phno,setPhno]=useState("")
    
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let userData={name,age,email,phno}
        fetch("http://localhost:5000/users",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('new User Added ')
        navigate('/admin/user-list')
    
    }
    return ( 
        <div className="addUser">
                <h1>Add a User</h1>
            <div className="adduser-formdiv">
                <form action="" className="formadduser" onSubmit={handleSubmit}>
                    <div className="user-name">
                    <label >Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="User Name " required />
                    </div>

                    <div className="user-age" >
                    <label >Age</label>
                        <input type="number"  value={age} onChange={(e)=>setAge(e.target.value)}  placeholder="User Age" required  />
                    </div>

                    <div className="user-email" >
                    <label >Email</label>
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="User Email" required />
                    </div>

                    <div className="user-phno">
                    <label >Ph Number</label>
                        <input type="number" minLength='10' maxLength='10'  value={phno} onChange={(e)=>setPhno(e.target.value)}  placeholder="User Phone Number" required  />
                    </div>
                    <button className="adduser-btn">Add user</button>
                    
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;