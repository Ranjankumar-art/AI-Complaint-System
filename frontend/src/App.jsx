import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintList from "./pages/ComplaintList";
import StatusUpdate from "./pages/StatusUpdate";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add-complaint"
          element={<ComplaintForm />}
        />

        <Route
          path="/complaints"
          element={<ComplaintList />}
        />

        <Route
          path="/status"
          element={<StatusUpdate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;