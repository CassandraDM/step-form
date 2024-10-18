import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AccountType } from "./components/pages/AccountType";
import { PersonalInfo } from "./components/pages/PersonalInfo";
import ProfileData from "./components/pages/ProfileData";
import FormSubmitted from "./components/pages/FormSubmitted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/profile-data" element={<ProfileData />} />
        <Route path="/form-submitted" element={<FormSubmitted />} />
      </Routes>
    </Router>
  );
}

export default App;
