import React from "react";
import Add from "../components/add.component";
import Phase from "../components/phase.component";
import ProgressBar from "../components/progressBar.component";

const VaccineDetails = () => {

    const vaccine = {
        "name": "Gardasil",
        "type": "HPV Vaccine",
        "phase": 1,
        "count": 10,
        "createdOn": "Dec 2022"
    }
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

            <Phase />
            <Add/>
        </div>)
}

export default VaccineDetails;