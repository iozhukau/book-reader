import React, {useState} from 'react';

const ReaderBookContainer = () => {
    const [currentPage, updateCurrentPage] = useState(42);
    const maxPage = 333;

    return (
        <>
            <ReaderBookStatus currentPage={currentPage} maxPage={maxPage} chapter={"chapter of the book"}/>
            <ReaderBookText text={"text ".repeat(1000)}/>
        </>
    )
}

const ReaderBookStatus = ({currentPage, maxPage, chapter}) => {
    return (
        <>
            <div className="container">

                <div className="text-center row align-items-center justify-content-center">
                    <p className="font-monospace p-0 m-0">{currentPage} / {maxPage}</p>
                    <input type="range" className="p-0 m-0" min="1" step="1" max={maxPage} value={currentPage} disabled/>
                </div>

                <div>
                    <p className="text-center font-monospace fw-bold">{chapter}</p>
                </div>

            </div>
        </>
    );
}

const ReaderBookText = ({text}) => {
    return (
        <>
            <div className="container">

                <section className="col align-items-center justify-content-centerr">

                    <div className="text-center">
                        {text}
                    </div>

                </section>
            </div>
        </>
    )
}

export default ReaderBookContainer;