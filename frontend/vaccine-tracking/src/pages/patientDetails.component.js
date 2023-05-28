import React from "react";
import PatientRecord from "../components/patientRecord.component";
import Add from "../components/add.component";

const PatientDetails = () => {

    const name = "Meenakshi";
    const age=21;
    const gender="Female";
    const imageUrl="https://lh3.googleusercontent.com/ogw/AOLn63FiWYtTp4YAbuzwJKxQkDC2szP_2ZpGCHV8p9TMVA=s32-c-mo";
    
    return (
        <div className="parent-div">
            <br />
            <div>
            <div className="card w-100">
            <div className="d-flex flex-row card-heading">
                <img src={imageUrl} className="shadow-1-strong me-3 mt-1 card-img" alt="Card" />
                <div>
                    <div className="heading-text ">

                    {name}
                    </div>
                    <div className="content-text ">
                        {age}, {gender}
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
            <Add/>
        </div>)
}

export default PatientDetails;