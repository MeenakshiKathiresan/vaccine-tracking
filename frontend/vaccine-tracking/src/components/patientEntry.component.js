import React from "react";
import { BiEdit } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"

const PatientEntry = ({ patientData, color }) => {
    return (
        <div style={{ backgroundColor: color }}>
            <div className="parent-div justify-content-between d-flex patient-entry-box">

                <div>
                    {patientData.name}
                </div>

                <div>
                    {patientData.status}
                </div>

                <div>
                    {patientData.registeredOn}
                </div>

                <div>
                    <BiEdit />
                    <RiDeleteBin6Line />
                </div>

                <div>
                    <button className="btn btn-primary rounded-pill"> Download PDF</button>
                </div>
            </div>

        </div>)
}

export default PatientEntry;