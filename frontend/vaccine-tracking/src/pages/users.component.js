import React, { useState } from 'react';

const UserPage = () => {

    const [activeTab, setActiveTab] = useState('doctors')

    const handleTabClick = (tab) => {
        console.log(tab)
        setActiveTab(tab)
    }

    return (

        <div className="parent-div">
            <br/>
            
            <ul className="nav nav-fill tabs">
                <li className="nav-item tab left-rounded">
                    <a className={`nav-link ${activeTab === 'doctors'? 'active-tab': ''}`} aria-current="page" href="#" onClick={()=>{handleTabClick('doctors')}}>Doctors</a>
                </li>
                <li className="nav-item tab right-rounded">
                    <a className= {`nav-link ${activeTab === 'patients'? 'active-tab': ''}`} href="#" onClick={()=>{handleTabClick('patients')}}>Patients</a>
                </li>
            </ul>

{/* 
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">
                                With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default UserPage;
