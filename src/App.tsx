import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AccountType } from "./components/pages/AccountType";
import { PersonalInfo } from "./components/pages/PersonalInfo";
import ProfileData from "./components/pages/ProfileData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/profil-data" element={<ProfileData />} />
      </Routes>
    </Router>
  );
}

export default App;
