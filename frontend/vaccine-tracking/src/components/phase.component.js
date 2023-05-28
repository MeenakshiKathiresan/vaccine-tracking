import { React, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import PatientEntry from "./patientEntry.component";

const Phase = () => {

    const [isOpen, setIsOpen] = useState(true);

    const colors = ["#ffffff", "#f4f2fa"]

    const handleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    const dummyPatientData = {
        name: "John Doe",
        status: "Active",
        registeredOn: "2023-05-27",
    };
    const numbers = [1, 2, 3, 4, 5];

    return (<div>
        <div className="card phase-box ">
            <div >
                <div className="p-3 border-bottom d-flex justify-content-between">
                    <h6 className="font-weight-bold parent-div ">Phase 1</h6>
                    <button type="button" className="btn" onClick={handleCollapse}>
                        {!isOpen ? (
                            <IoMdArrowDropupCircle />
                        ) : (
                            <IoMdArrowDropdownCircle />
                        )}
                    </button>
                </div>
            </div>

            <div className="border-bottom">
                {isOpen && (

                    <div>
                        {numbers.map((number) => {
                             const curr_color = colors[number % 2];
                             return (
                               <PatientEntry
                                 key={number}
                                 patientData={dummyPatientData}
                                 color={curr_color}
                               />
                             );
                        })}
                    </div>
                )}
            </div>

        </div>

    </div>);
}

export default Phase;