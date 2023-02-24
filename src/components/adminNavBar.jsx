import '../styles/adminNavBar.css'
import { Link } from 'react-router-dom';
const AdminNavBar = () => {
    return (
        <div className="adminNavBar">
               <div className="nav-contents">
               <div className="adminnav">
                  <h1>Welcome to E-Book Library</h1>
                </div>
                <div className="navlogo">
                <img  src="/images/ebookLogo.png" alt="" />
                    <h1>E-Book Library</h1>
                    <h3>Admin Portal</h3>
                </div>
                <div className="adnavbarlinks">
                    <ul>
                      <li><Link to="/admin/">Dashboard</Link></li>
                      <li><Link to="/admin/add-book">Add Book</Link></li>
                      <li><Link to="/admin/add-user">Add User</Link></li>
                      <li><Link to="/admin/book-list">Book List</Link></li>
                      <li><Link to="/admin/user-list">User List</Link></li>
                      <li><Link to="/">Logout</Link></li>

                    </ul>
                </div>
               </div>
                </div>
      );
}
 
export default AdminNavBar;