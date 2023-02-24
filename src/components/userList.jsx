import { useEffect, useState } from 'react';
import '../styles/userList.css'
const UserList = () => {
    let [user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
           let response = await fetch(' http://localhost:5000/users') 
           let data = await response.json()
           setUser(data);
        }
        fetchData();
    },[])
    let handleDelete=(id,name)=>{
        setUser(user.filter(x=>x.id!==id))
        alert(` user ${name} has bee removes`)
    }
    return ( 
        <div className="userlist">
            <h1>User List: {user.length}</h1>

            <div className="user_section">
                {user.map(data=>(
                    <div className="user-card">
                        <h2>Name  : {data.name}</h2>
                        <hr />
                        <h3>Age   : {data.age}</h3>
                        <h3>Email : {data.email}</h3>
                        <h3>Ph No : {data.phno}</h3>
                        <button className='btn-delete' onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;