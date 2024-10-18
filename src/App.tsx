import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AccountType } from "./components/pages/AccountType";
import { PersonalInfo } from "./components/pages/PersonalInfo";
import ProfileData from "./components/pages/ProfileData";
import FormSubmitted from "./components/pages/FormSubmitted";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route
          path="/personal-info"
          element={
            <PersonalInfo
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route path="/profile-data" element={<ProfileData />} />
        <Route
          path="/form-submitted"
          element={<FormSubmitted name={name} email={email} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
