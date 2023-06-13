import React from 'react';
import {Link} from "react-router-dom";

const IndexContainer = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <i className="fs-1 bi bi-book-fill"></i>
                <h1 className="display-5 fw-bold text-body-emphasis">BOOK READER</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Online application for reading books.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="add" className="btn btn-outline-secondary btn-lg px-4">Add new book</Link>
                        <Link to="list" className="btn btn-outline-secondary btn-lg px-4">List books</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexContainer;