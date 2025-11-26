import React from "react";
import { PROVIDERS } from "../Data";

const ProviderDashboard=({ requests, onUpdateStatus })=> {
    const currentProviderId = 1;
    const me = PROVIDERS.find((p) => p.id === currentProviderId);

    const myRequests = requests.filter(
        (r) => r.providerId === currentProviderId
    );

    return (
        <div className="card">
            <h1>Provider dashboard</h1>
            <p className="subtitle">
                    dashboard for <strong>{me.companyName}</strong> in{" "}
                {me.city}, profession: {me.profession}.
            </p>

            {myRequests.length === 0 ? (
                <p style={{ fontSize: "0.9rem" }}>
                    You have no requests yet. Ask someone to send a request from the
                    "Find provider" page.
                </p>
            ) : (
                <div className="providers-list">
                    {myRequests.map((r) => (
                        <div key={r.id} className="provider-card">
                            <div className="provider-main">
                                <strong>Request #{r.id}</strong>
                                <div className="provider-meta">
                                    <div>City: {r.city}</div>
                                    <div>Profession: {r.profession}</div>
                                    <div>Description: {r.description}</div>
                                    <div>Status: {r.status}</div>
                                </div>
                            </div>
                            <div className="button-row">
                                <button
                                    className="primary-btn"
                                    onClick={() => onUpdateStatus(r.id, "approved")}
                                    disabled={r.status === "approved"}
                                >
                                    Approve
                                </button>
                                <button
                                    className="secondary-btn"
                                    onClick={() => onUpdateStatus(r.id, "denied")}
                                    disabled={r.status === "denied"}
                                >
                                    Deny
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default ProviderDashboard;