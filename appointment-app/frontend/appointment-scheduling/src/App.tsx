
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/Landing';
import { HomePage } from "./components/DashBoard/HomePage";
import TherapistList from "./components/TherapistCard/TherapistCard";
import AboutMe from "./components/Booking/AboutMe";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/therapist" element={<TherapistList></TherapistList>}></Route>
        <Route path="/doctorInfo" element={<AboutMe></AboutMe>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
