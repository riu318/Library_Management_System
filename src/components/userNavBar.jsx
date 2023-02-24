import { Link } from "react-router-dom";
import '../styles/userNavBar.css'
const UserNavBar = () => {
    return ( 
        <div className="userNavBar">
            <div className="usernav">
                  <h1>Welcome to E-Book Library</h1>
                </div>
        <div className="usnavbar">
            <div className="usnavlogo">
            <img  src="/images/ebookLogo.png" alt="" />
                    <h1>E-Book Library</h1>
            </div>
            <div className="usnavbarlinks">
                <ul>
                  <li><Link to="/user/">Dashboard</Link></li>
                  <li><Link to="/user/book-list">Book List</Link></li>
                  <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
     );
}
 
export default UserNavBar;