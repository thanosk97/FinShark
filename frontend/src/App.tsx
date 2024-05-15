import { Outlet } from 'react-router';
import './App.css';
import "react-toastify/dist/ReactTostify.css";
import Navbar from './Components/Navbar/Navbar';
import { Toast, ToastContainer } from 'react-toastify/dist/components';
import { UserProvider } from './Context/useAuth';


function App() {
  
  return (
    <>
      <UserProvider>
          <Navbar />
          <Outlet />
          <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
