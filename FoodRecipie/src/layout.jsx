import {Outlet} from 'react-router-dom'
import NavBar from './Components/Navbar';





  function Layout() {
    return ( 
        <> 
            <NavBar/>
            <Outlet/>
        </>
     );
  }
  
  export default Layout;