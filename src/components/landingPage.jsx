import '../styles/landingPage.css'
import { Link } from "react-router-dom";

const LandingPage=()=>{
    return(
        <div className="landingPage">
             <div className="selectLoginType">
                <div className="logos">
                <img className='mylogo' src="images/mylogo.jpg" height="120px" width="150px" alt="" />
                <h1 id="lms">LIBRARY MANAGEMENT SYSTEM</h1>
                </div>
                   <div className="linksimgs">
                   <div id="limg1">
                   <img src="images/admin.jpg" height="250px" width="250px" alt="" />
                   <Link to='/adminLogin'>Admin Login</Link>
                   </div>
                   <div id="limg2">
                   <img src="images/user.jpg" height="250px" width="310px" alt="" />
                   <Link to='/userLogin'>User Login</Link>
                   </div>
                   </div>
            </div>
        </div>
    )
}
export default LandingPage;