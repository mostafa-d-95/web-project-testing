import React, {useState} from "react";
import {CITIES, PROFESSIONS} from "../Data";

const SearchProviders = ({providers, onRequest}) => {
    const [city, setCity] = useState("");
    const [profession, setProfession] = useState("");
    const [description, setDescription] = useState("");

    const filtered = providers.filter((p) => {
        const matchCity = city ? p.city === city : true;
        const matchProf = profession ? p.profession === profession : true;
        return matchCity && matchProf;
    });

    const handleRequest = (provider) => {
        if (!description.trim()) {
            alert("Please describe your request first.");
            return;
        }
        onRequest(provider, description.trim());
        alert(`Request sent to ${provider.companyName} .`);
        setDescription("");
    };

    return (
        <div className="card">
            <h1>Find a service provider</h1>
            <p className="subtitle">
                Choose a city  profession.
            </p>

            <div className="form-grid">
                <div>
                    <label>City</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">All cities</option>
                        {CITIES.map((c) => (
                            <option key={c} value={c}>
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Profession</label>
                    <select
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                    >
                        <option value="">All professions</option>
                        {PROFESSIONS.map((p) => (
                            <option key={p} value={p}>
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="description-box">
                <label>Describe your request</label>
                <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Example: My kitchen sink is leaking, need a plumber today."
                />
            </div>

            <h2 style={{marginTop: "16px"}}>
                Providers ({filtered.length})
            </h2>

            {filtered.length === 0 && (
                <p style={{fontSize: "0.9rem"}}>No providers match this filter.</p>
            )}

            <div className="providers-list">
                {filtered.map((p) => (
                    <div key={p.id} className="provider-card">
                        <div className="provider-main">
                            <strong>{p.companyName}</strong>
                            <div className="provider-meta">
                                <div>Contact: {p.name}</div>
                                <div>Email: {p.email}</div>
                                <div>Phone: {p.phone}</div>
                                <div>City: {p.city}</div>
                                <div>Profession: {p.profession}</div>
                            </div>
                        </div>
                        <button
                            className="primary-btn"
                            onClick={() => handleRequest(p)}
                        >
                            Request service from this provider
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SearchProviders;
