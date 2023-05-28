import React from "react";
import VaccineCard from "../components/vaccinecard.component";
import Add from "../components/add.component";

const Vaccines = () => {

    const vaccine = {
        "name": "Gardasil",
        "type": "HPV Vaccine",
        "phase": 1,
        "count": 10,
        "createdOn": "Dec 2022"
    }
    const numbers = [1,2,3,4,5,8,6]
    return (
        <div className="parent-div">
            <br/>
            <div className="row">

                {numbers.map((number) => (
                    <div className="col-sm-3">
                        <VaccineCard vaccine={vaccine} />    </div>
                ))}
            </div>
            <Add />
        </div>)

}

export default Vaccines;