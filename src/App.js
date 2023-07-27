import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
