import React from 'react';
import '../../styles/secondsCounter.css';

const SecondsCounter = ({ uno, dos, tres, cuatro, cinco, seis }) => {
    return (
        <div className="container row">
            <div className="icono col-lg-2 col-sm-12">
                <i className="fa fa-clock text-white"></i>
            </div>
            <div className="seis col text-white">{seis % 10}</div>
            <div className="cinco col text-white">{cinco % 10}</div>
            <div className="cuatro col text-white">{cuatro % 10}</div>
            <div className="tres col text-white">{tres % 10}</div>
            <div className="dos col text-white">{dos % 10}</div>
            <div className="uno col text-white">{uno % 10}</div>
        </div>
    );
};

export default SecondsCounter;
