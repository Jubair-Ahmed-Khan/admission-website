import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ms-4">
                    {/* website title  */}
                    <a className="navbar-brand text-danger fw-bolder" href="./navbar">Admission Center</a>

                    {/* collapsible menu button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapsible menu  */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./contact">Contact Us</a>
                            </li>
                        </ul>

                        {/* total Budget  */}
                        <p className="d-flex flex-end me-5 mt-2" style={{ fontSize: "20px" }}>
                            <span className="text-success fw-bolder me-2">Total Budget :</span>10000 TK
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;