
import {  Route, Routes } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Doctordashboard from "./pages/Doctordashboard";
import Admindashboard from './pages/Admindashboard'
import ReceptionistDashboard from './pages/ReceptionistDashboard'
import Managedoctor from "./component/Admin/Managedoctor";
import Managereceptionist from "./component/Admin/Managereceptionist";
import Registerapatient from "./component/Receptinist/Registerapatient";
import Header from "./component/Header";
import DisplayContent from "./component/Admin/Displaycontent";
import Reports from "./component/Admin/Reports";
import Displayscreen from "./component/Receptinist/Displayscreen";
import Tokengenerated from "./component/Receptinist/Tokengenerated";






function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" Component={Frontpage}/>
        <Route path="/doctor-login" Component={Doctordashboard}/>
        <Route path="/admin-login" Component={Admindashboard}/>
        <Route path="/receptionist-login" Component={ReceptionistDashboard}/>
        <Route path="/manage-doctor" Component={Managedoctor}/>
        <Route path="/manage-receptionist" Component={Managereceptionist}/>
        <Route path="/register-patient" Component={Registerapatient}/>

      </Routes>
      {/* <Header/>  */}
      {/* <DisplayContent/> */}
      {/* <Reports/> */}
      {/* <Displayscreen/> */}
      {/* <Tokengenerated/> */}
      {/* <Registerapatient/> */}
    
    </>
  );
}

export default App;
