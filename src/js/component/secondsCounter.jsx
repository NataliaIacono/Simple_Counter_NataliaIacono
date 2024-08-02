import React from 'react';

const SecondsCounter = ({ uno, dos, tres, cuatro, cinco, seis }) => {
    return (
        <div className="container-fluid d-flex justify-content-around d-flex fs-1 mt-5 bg-dark">
            <div className="icon">
                <i className="fa fa-clock text-white"></i>
            </div>
            <div className="seis text-white">{seis % 10}</div>
            <div className="cinco text-white">{cinco % 10}</div>
            <div className="cuatro text-white">{cuatro % 10}</div>
            <div className="tres text-white">{tres % 10}</div>
            <div className="dos text-white">{dos % 10}</div>
            <div className="uno text-white">{uno % 10}</div>
        </div>
    );
};

export default SecondsCounter;
