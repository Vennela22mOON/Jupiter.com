import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import DepartMents from './components/DepartMents';
import Patietns from './components/Patietns';
import KnowledgeCenter from './components/KnowledgeCenter';
import Footer from './components/Footer';
import Investorsrelations from './pages/Investorsrelations';
import InternationaPatients from './pages/InternationaPatients';
import OppointmentForm from './pages/OppointmentForm';
import FindingDoctors from './pages/FindingDoctors';
import HealthCheckUp from './pages/HealthCheckUp';
import SurgerySpecialists from './pages/SurgerySpecialists';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: '200px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SlideShow />
                <DepartMents />
                <Patietns />
                <KnowledgeCenter />
                <Footer />
              </>
            }
          />
          <Route path="/investors-relations" element={<Investorsrelations />} />
          <Route path="/international-patients" element={<InternationaPatients />} />
          <Route path="/form" element={<OppointmentForm />} />
          <Route path="/finding-doctors" element={<FindingDoctors />} />
          <Route path="/health-checkup" element={<HealthCheckUp />} />
          <Route path="/finding-doctor" element={<FindingDoctors />} />
          <Route path="/surgery-specialist" element={<SurgerySpecialists />} />
          <Route path="/health" element={<SurgerySpecialists />} />
          <Route path="/health-c" element={<SurgerySpecialists />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
