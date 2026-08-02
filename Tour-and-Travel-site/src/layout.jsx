import { Outlet } from "react-router-dom";
import NavBar from "./Components/Header/navigationBar";
import Footer from "./Components/Footer/footer";

function Layout() {
    return ( 
<>
<NavBar/>
<Outlet/>
<Footer/>


</>


     );
}

export default Layout;