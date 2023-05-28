import React from "react";
import ProgressBar from "./progressBar.component.js";

const VaccineCard = ({ vaccine }) => {

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

        <div className="card">
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

                        <div className="tag" style={{backgroundColor:color}}> Phase {vaccine.phase}</div>
                        </div>
                    </div>
                    <div className="p-1">{vaccine.count} participants</div>
                    <div className="p-1">

                        <ProgressBar progress={(vaccine.count / capacity) * 100} />
                    </div>




                </div>
            </div>

        </div>)
}

export default VaccineCard;