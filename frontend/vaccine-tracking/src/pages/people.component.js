import React, { useState } from 'react';
import Add from '../components/add.component';
import UserCard from '../components/usercard.component';

const People = () => {

    const [activeTab, setActiveTab] = useState('doctors')

    const handleTabClick = (tab) => {
        console.log(tab)
        setActiveTab(tab)
    }

  const numbers = [1, 2, 3, 4, 5];

    return (

        <div className="parent-div">
            <br />

            <ul className="nav nav-fill tabs">
                <li className="nav-item tab left-rounded">
                    <a className={`nav-link ${activeTab === 'doctors' ? 'active-tab' : ''}`} aria-current="page" href="#" onClick={() => { handleTabClick('doctors') }}>Doctors</a>
                </li>
                <li className="nav-item tab right-rounded">
                    <a className={`nav-link ${activeTab === 'patients' ? 'active-tab' : ''}`} href="#" onClick={() => { handleTabClick('patients') }}>Patients</a>
                </li>
            </ul>

            <br/>
            <div className="row">

            {numbers.map((number) => (
                <div className="col-sm-3">
                    <UserCard name = "Meenakshi" age={21} gender="Female" imageUrl="https://lh3.googleusercontent.com/ogw/AOLn63FiWYtTp4YAbuzwJKxQkDC2szP_2ZpGCHV8p9TMVA=s32-c-mo"/>
                </div>
            ))}
            </div>
            <Add/>
        </div>
    );
};

export default People;
