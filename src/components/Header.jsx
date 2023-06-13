import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom">

                <div className="text-start">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <h1 className="navbar-brand fs-3">BOOK READER</h1>
                    </a>
                </div>

                <div className="text-end">
                    <Link to="add" className="btn px-2"><i className="fs-3 bi bi-plus-circle-fill"></i></Link>
                    <Link to="list" className="btn px-2"><i className="fs-3 bi-collection-fill"></i></Link>
                </div>

            </header>
        </>
    )
}

export default Header;