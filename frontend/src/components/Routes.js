import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import City from "../pages/City";
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

function RoutesManager (){
    return(
        <Routes>
            <Route path= "/" element= {<Home />} />
            <Route path= "/signup" element= {<SignUp />} />
            <Route path= "/signin" element= {<SignIn />} />
            <Route path = "/cities" element= {<Cities />} />
            <Route path = "/city/:id" element={<City />} />
        </Routes>
    )
}
export default RoutesManager