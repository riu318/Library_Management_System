import { Routes,Route } from "react-router-dom";
import UserNavBar from "./userNavBar";
import UserHome from "./userHome";
import BookList from "./bookList";
import ReadBook from "./readBook";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
             <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/book-list' element={<BookList/>} />
            <Route path='/book-list/:id' element={<ReadBook/>} />
        </Routes>
        </div>
     );
}
 
export default UserPortal;