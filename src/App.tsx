import { Route, Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/fillinfofirst" element={<FillInfoFirst />} />
        <Route path="/fillinfosecond" element={<FillInfoSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
