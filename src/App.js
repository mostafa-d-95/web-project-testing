
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PROVIDERS } from "./Data";
import Home from "./pages/Home";
import SearchProviders from "./pages/SearchProvider";
import ProviderDashboard from "./pages/ProviderDashboard";
import "./App.css";
import NavBar from "./components/Navbar";



export default function App() {
  const [requests, setRequests] = useState([]);

  const createRequest = (provider, description) => {
    const newReq = {
      id: requests.length + 1,
      providerId: provider.id,
      providerName: provider.companyName,
      city: provider.city,
      profession: provider.profession,
      description,
      status: "pending",
    };
    setRequests((prev) => [...prev, newReq]);
  };

  const updateRequestStatus = (id, newStatus) => {
    setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  return (
      <Router>
        <NavBar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/search"
                element={
                  <SearchProviders providers={PROVIDERS} onRequest={createRequest} />
                }
            />
            <Route
                path="/provider"
                element={
                  <ProviderDashboard
                      providers={PROVIDERS}
                      requests={requests}
                      onUpdateStatus={updateRequestStatus}
                  />
                }
            />
          </Routes>
        </div>
      </Router>
  );
}
