 
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mngadm from "./pages/manageadmin/mngadm";

function App() {
  return (
    <div className="App  ">
      <Router>
        <Navbar/>
       <Mngadm/>

      </Router>
     

   
    </div>
  );
}

export default App;
