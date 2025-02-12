function Home() {
    return (
        <div className="container mb-5">
            <div className="row py-3">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">
                            <img src="It_planteLogo.png" alt="Logo" style={{ height: '50px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Services</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Home;
    