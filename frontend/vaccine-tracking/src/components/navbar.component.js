import React, {useState} from 'react';
import "../App.css"

const NavBar = () => {

    const [activeTab, setActiveTab] = useState('home')

    const handleOnClick = (tab)=>{
        setActiveTab(tab)
    }

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="parent-div d-flex justify-content-between p-1 w-100">
                    <a className={`navbar-brand ${activeTab === 'home' ? 'active' : ''}`} href="#" onClick = {() => handleOnClick('home')}>Moderna Vaccines</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className= "nav-item">
                                <a className={`nav-link ${activeTab === 'vaccines' ? 'active' : ''}`} href="#" onClick = {() => handleOnClick('vaccines')}>Vaccines </a>
                            </li>
                            <li className= "nav-item">
                                <a className={`nav-link ${activeTab === 'people' ? 'active' : ''}`} href="#" onClick = {() => handleOnClick('people')}>People</a>
                            </li>
                        </ul>
                    </div>
                    
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </nav>


        </div>)
}
export default NavBar;




