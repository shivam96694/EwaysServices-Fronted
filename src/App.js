
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Homepage from '../src/ewaysservices/userinterface/components/screens/HomePage';
import Services from "./ewaysservices/userinterface/components/Services";
import ServiceDetails from '../src/ewaysservices/userinterface/components/screens/ServiceComponent'
import ServicePage from "./ewaysservices/userinterface/components/screens/ServicePage";
import CareersPage from "./ewaysservices/userinterface/components/screens/CarrersPage";
import AboutUsPage from "./ewaysservices/userinterface/components/screens/AboutUsPage";
import ContactComponentsPage from "./ewaysservices/userinterface/components/screens/ContactPage";
import BlogPage from "./ewaysservices/userinterface/components/screens/BlogPage";
import WhoWithUsPage from "./ewaysservices/userinterface/components/screens/WhoWithUsPage";
import AppPage from "./ewaysservices/userinterface/components/screens/AppPage";
import PartnerPage from "./ewaysservices/userinterface/components/screens/PartnerPage";
import LegalPage from "./ewaysservices/userinterface/components/screens/LegalPage";
function App() {
  return (
    <div style={{fontFamily:'Open Sans'}}>
      <Router>
        <Routes>
   <Route element={<Homepage />} path="/"  />
 <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route path="/servicepage/:serviceId" element={<ServicePage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactComponentsPage />} />
<Route path="/blog" element={<BlogPage />} />
<Route path="/team" element={<WhoWithUsPage />} />

<Route path="/partner" element={<PartnerPage />} />
<Route path="/apps" element={<AppPage />} />
<Route path="/legal" element={<LegalPage />} />
               </Routes>
      </Router>

    </div>
  );
}

export default App;
