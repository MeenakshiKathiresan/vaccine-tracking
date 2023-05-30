import React, { useEffect, useState } from "react";
import PatientRecord from "../components/patientRecord.component";
import Add from "../components/add.component";
import {getPatient} from "../API services/patientServices"

const PatientDetails = () => {

    const [patientData, setPatientData] = useState({});

    useEffect(() => {
        const link = window.location.href;
        const patientId = link.slice(link.lastIndexOf("/") + 1);
        getPatient(patientId, setPatientData);
        
      }, []);

    return (
        <div className="parent-div">
            <br />
            <div>
            <div className="card w-100">
            <div className="d-flex flex-row card-heading">
                <img src={patientData.img} className="shadow-1-strong me-3 mt-1 card-img" alt="Card" />
                <div>
                    <div className="heading-text ">

                    {patientData.name}
                    </div>
                    <div className="content-text ">
                        {patientData.age}, {patientData.gender}
                    </div>
                </div>
            </div>

            <div className="card-img-container">

            </div>
            <div className="card-body sub-heading-text ">

                <div>
                    <p>Vaccine:</p>
                    <p>Phase:</p>
                    <p>Blood group: 123 Street</p>
                    <p>Start date: 25th April, 2022</p>
                    <p>Contact: 123-456-7890</p>
                    <p>Allergies: Penicillin, Peanuts, Dust mites, Pollen, Latex, Shellfish, Food additives</p>
                    <p>History: - </p>
                </div>
            </div>
        </div>

            </div>
            <PatientRecord />
            <Add navigateTo="/create/patient-record" />
        </div>)
}

export default PatientDetails;