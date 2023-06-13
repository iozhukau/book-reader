import React from 'react';

const ListBookContainer = () => {
    return (
        <>
            <div className="align-items-center justify-content-center m-1">

                <div className="list-group list-group-checkable ">

                    <ListBookItem name={"Second radio"} description={"This option is disabled"}/>
                    <ListBookItem name={"Third radio"} description={"And we end with another snippet of text"}/>
                    <ListBookItem name={"Fourth disabled radio"} description={"Some other text goes here"}/>

                </div>
            </div>
        </>
    )
}

const ListBookItem = ({name, description}) => {
    return (
        <>
            <div className="list-group-item rounded-3 m-1">
                <p className="lead">{name}</p>
                <span className="d-block small">{description}</span>
            </div>
        </>
    );
}

export default ListBookContainer;