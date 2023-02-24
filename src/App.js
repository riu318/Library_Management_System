import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AdminPortal from './components/adminPortal';
import Admin from './components/adminLogin';
import LandingPage from './components/landingPage';
import UserLogin from './components/userLogin';
import UserPortal from './components/userPortal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<LandingPage/>}/>
        <Route path='/adminLogin' element={<Admin/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/>
        <Route path='/user/*' element={<UserPortal/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
