import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let userLogin=()=>{
        navigate('/user/')
    }
    let back=()=>{
        navigate('/')
    }
    return ( 
        <div className="userlogin">
              <div className="form_container_card">
               <div className="ulogos">
               <img className='myulogo' src="images/mylogo.jpg" height="120px" width="150px" alt="" />
               <h1 id="head1">LOGIN AS USER</h1>
               </div>
                <div className="form_input">
                    <form action="" onSubmit={userLogin}>
                       <div className="email">
                       <input type="email" required placeholder="Email Address" className="" />
                       </div>
                       
                       <div className="password">
                       <input type="password"  required placeholder="Password" className=""/>
                       </div>
                       <button className="loginbutton">Login</button>
                       <button className="backbutton" onClick={()=>back()}>Back</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;