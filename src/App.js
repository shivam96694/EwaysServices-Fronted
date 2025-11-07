
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Homepage from '../src/ewaysservices/userinterface/components/screens/HomePage';
import Services from "../src/ewaysservices/userinterface/components/screens/Services";
function App() {
  return (
    <div style={{fontFamily:'Open Sans'}}>
      <Router>
        <Routes>
   <Route element={<Homepage />} path="/"  />
 <Route path="/services" element={<Services />} />

               </Routes>
      </Router>

    </div>
  );
}

export default App;
