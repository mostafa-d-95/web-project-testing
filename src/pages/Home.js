import React from "react";
import {Link} from "react-router-dom";

const Home=()=> {
    return (
        <div className="card">
            <h1>Maallem </h1>
            <p className="subtitle">
                at your service </p>

            <div className="home-buttons">
                <div className="role-card">
                    <h2>I’m a customer</h2>
                    <p>Search for service providers by city and profession.</p>
                    <Link className="primary-btn" to="/search">
                        Find a provider
                    </Link>
                </div>

                <div className="role-card">
                    <h2>I’m a service provider</h2>
                    <p>See incoming requests and approve or deny them.</p>
                    <Link className="secondary-btn" to="/provider">
                        Open dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Home;
