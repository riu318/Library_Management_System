import { Routes,Route } from 'react-router-dom';
import AddBook from './addBook';
import AddUser from './addUser';
import AdminHome from './adminHome';
import AdminNavBar from './adminNavBar';
import BookList from './bookList';
import ReadBook from './readBook';
import UserList from './userList';


const AdminPortal= () => {
    return ( 
        <div className="adminPortal">
            <AdminNavBar/>
        <Routes>
            <Route path='/' element={<AdminHome/>} />
            <Route path='/book-list' element={<BookList/>} />
            <Route path='/user-list' element={<UserList/>} />
            <Route path='/book-list/:id' element={<ReadBook  />} />
            <Route path='/add-book' element={<AddBook  />} />
            <Route path='/add-user' element={<AddUser  />} />
        </Routes>
        </div>
     );
}
 
export default AdminPortal;