import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
