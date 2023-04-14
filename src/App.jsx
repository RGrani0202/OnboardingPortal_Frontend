import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './Footer/Footer';
import AdminNavbar from './admincomponents/AdminHomePage/AdminNavbar';
import AdminPage from './admincomponents/AdminHomePage/AdminPage';
import ViewItems from './admincomponents/ViewItem/ViewItems';
import ViewTemplates from './admincomponents/ViewTemplate/ViewTemplates';
import ViewModules from './admincomponents/ViewModule/ViewModules';
import CreateItem from './admincomponents/CreateItem/CreateItem';
import CreateTemplate from './admincomponents/CreateTemplate/CreateTemplate';
import CreateModule from './admincomponents/CreateModule/CreateModule';
import Login from './LoginPage/Login';
import User from './User-Component/User';
import UserTemplate from './User-Component/Usertemplates';
import UserItem from './User-Component/UserItem';
import DeleteItem from './admincomponents/DeleteItems/DeleteItem';
import DeleteTemplate from './admincomponents/DeleteTemplate/DeleteTemplate';
import DeleteModule from './admincomponents/DeleteModule/DeleteModule';
import UpdateItem from './admincomponents/UpdateItem/UpdateItem';
import UpdateTemplate from './admincomponents/UpdateTemplate/UpdateTemplate';
import UpdateModule from './admincomponents/UpdateModule/UpdateModule';
import Register from './admincomponents/SignUp/Register';
import SimpleModal from './admincomponents/ModalComponent/SimpleModal';
import Header from './HeaderComponent/Header';

function App() {
  const loc=useLocation();
  console.log(loc);
  return (
    <div className="app">
  <Header/>
      <Routes>
        <Route path='/' element={<AdminPage/>} />
        {/* <Route index element={<Login/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<SimpleModal />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/adminnavbar" element={<AdminNavbar />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/viewtemplates" element={<ViewTemplates/>} />
        <Route path="/viewmodules" element={<ViewModules />} />
        <Route path="/createitem" element={<CreateItem/>}/>
        <Route path="/createtemplate" element={<CreateTemplate/>} />
        <Route path="/createmodule" element={<CreateModule/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/userTemplate" element={<UserTemplate/>} />
        <Route path="/userItem" element={<UserItem/>} />
        <Route path="deleteitem" element={<DeleteItem/>} />
        <Route path="deletetemplate" element={<DeleteTemplate/>} />
        <Route path="deletemodule" element={<DeleteModule/>} />
        <Route path="updateitem"  element={<UpdateItem/>} />
        <Route path="updatetemplate" element={<UpdateTemplate/>} />
        <Route path="updatemodule" element={<UpdateModule/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
