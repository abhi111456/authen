import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import LoginAndLogout from './components/LoginAndLogout';
import Login from './components/Login';
function App() {
  return (
    <>
   <BrowserRouter>
     <Routes>
            <Route path='/' element={<LoginAndLogout/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
