import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import GuestEntry from "./pages/GuestEntry";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/guest" element={<GuestEntry />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;