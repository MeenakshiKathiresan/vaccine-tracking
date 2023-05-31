import React, { useState, useEffect } from "react";
import Add from "../components/add.component";
import Phase from "../components/phase.component";
import ProgressBar from "../components/progressBar.component";
import { fetchPatients, addPatientEntry } from "../API services/vaccineServices";



const VaccineDetails = () => {

    const vaccine = {
        "name": "Gardasil",
        "type": "HPV Vaccine",
        "phase": 1,
        "count": 10,
        "createdOn": "Dec 2022"
    }




    const [selectedPatient, setSelectedPatient] = useState('');
    const [patients, setPatients] = useState([]);

    useEffect(() => {

        fetchPatients(setPatients);
    }, []);

    let capacity = 0
    let color = ""
    switch (vaccine.phase) {
        case 1:
            capacity = 30;
            color = "#edc534"
            break;
        case 2:
            capacity = 200;
            color = "#f78736"
            break;
        case 3:
            capacity = 1000;
            color = "#30c97f"
            break;
    }

    const handleSelectPatient = (e) => {
        setSelectedPatient(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        // You can use the selectedPatient value for further processing

        const link = window.location.href;
        const vaccineId = link.slice(link.lastIndexOf("/") + 1);

        const entryData = {
            phase: "1",
            vaccineID: vaccineId,
            patientID: selectedPatient,
        }

        addPatientEntry(
            entryData, () => { console.log("added") })
    };


    return (
        <div className="parent-div">
            <br />

            <div className="card w-100">
                <div className="d-flex flex-row card-heading  justify-content-between">
                    <div className="heading-text">
                        {vaccine.name}
                    </div>
                    <div className="content-text">
                        {vaccine.createdOn}
                    </div>

                </div>

                <div className="card-img-container ">

                </div>
                <div className="card-body sub-heading-text">
                    <div>

                        <div className="d-flex justify-content-between">

                            <div className="p-1">{vaccine.type}</div>
                            <div className="p-1">

                                <div className="tag" style={{ backgroundColor: color }}> Phase {vaccine.phase}</div>
                            </div>
                        </div>
                        <div className="p-1">{vaccine.count} participants</div>
                        {/* <div className="p-1">

                            <ProgressBar progress={(vaccine.count / capacity) * 100} />
                        </div> */}




                    </div>
                </div>

            </div>

            <br /><br />

            <form className="form-inline my-2 my-lg-0 parent-div" onSubmit={handleSubmit}>
                <div className="input-group">
                    <select className="form-control mr-sm-2" value={selectedPatient} onChange={handleSelectPatient}>
                        <option value="">Select Patient</option>
                        {patients.map((patient) => (
                            <option key={patient._id} value={patient._id}>
                                {patient.name}
                            </option>
                        ))}
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </form>
            <br />


            <Phase />
        </div>)
}

export default VaccineDetails;