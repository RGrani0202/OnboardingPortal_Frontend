import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Headers/Header';
import Footer from './Footers/Footer';
import AdminNavbar from './admincomponents/AdminHomePage/AdminNavbar';
import AdminPage from './admincomponents/AdminHomePage/AdminPage';
import ViewItems from './admincomponents/ViewItem/ViewItems';
import ViewTemplates from './admincomponents/ViewTemplate/ViewTemplates';
import ViewModules from './admincomponents/ViewModule/ViewModules';
import CreateItem from './admincomponents/CreateItems/CreateItem';
import CreateTemplate from './admincomponents/CreateTemplates/CreateTemplate';
import CreateModule from './admincomponents/CreateModules/CreateModule';
import Login from './LoginPage/Login';
import User from './User-Component/User';
import UserTemplate from './User-Component/Usertemplates';
import UserItem from './User-Component/UserItem';
import DeleteItem from './admincomponents/DeleteItemes/DeleteItem';
import DeleteTemplate from './admincomponents/DeleteTemplates/DeleteTemplate';
import DeleteModule from './admincomponents/DeleteModules/DeleteModule';
import UpdateItem from './admincomponents/UpdateItems/UpdateItem';
import UpdateTemplate from './admincomponents/UpdateTemplates/UpdateTemplate';
import UpdateModule from './admincomponents/UpdateModules/UpdateModule';
import Homepage from './HomePage/HomePage';
import SignUp from './HomePage/Signup';

function App() {
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="app">
      <Header paths={loc.pathname} />
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminnavbar" element={<AdminNavbar />} />
        <Route path="/viewmodules" element={<ViewModules />} />
        <Route path="/createitem" element={<CreateItem />} />
        <Route path="/createtemplate" element={<CreateTemplate />} />
        <Route path="/createmodule" element={<CreateModule />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/viewtemplates" element={<ViewTemplates />} />
        <Route path="/userTemplate" element={<UserTemplate />} />
        <Route path="/userItem" element={<UserItem />} />
        <Route path="deleteitem" element={<DeleteItem />} />
        <Route path="deletetemplate" element={<DeleteTemplate />} />
        <Route path="deletemodule" element={<DeleteModule />} />
        <Route path="updateitem" element={<UpdateItem />} />
        <Route path="updatetemplate" element={<UpdateTemplate />} />
        <Route path="updatemodule" element={<UpdateModule />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
