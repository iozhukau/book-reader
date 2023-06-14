import React from 'react';

const AddBookContainer = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <i className="fs-1 bi bi-book"></i>

                <h1 className="display-5 fw-bold text-body-emphasis">Add link to your book</h1>

                <div className="col-lg-6 mx-auto">

                    <p className="font-monospace fw-light fst-italic">Support formats: FB2</p>

                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="https://site.example/book" aria-label="Link to book" aria-describedby="button-addon"/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon">Add</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddBookContainer;