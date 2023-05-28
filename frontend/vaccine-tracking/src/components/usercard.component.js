import React, { useState } from "react";

const UserCard = ({ name, age, gender, imageUrl }) => {
    return (


        <div className="card">
            <div className="d-flex flex-row card-heading">
                <img src={imageUrl} className="shadow-1-strong me-3 mt-1 card-img" alt="Card" />
                <div>
                    {name}
                    <br />
                    <div className="small">
                        {age}, {gender}
                    </div>
                </div>
            </div>

            <div className="card-img-container">

            </div>
            <div className="card-body">

                <div>
                    <p>Vaccine:</p>
                    <p>Phase:</p>
                    <p>Blood group: 123 Street</p>
                    <p>Start date: 25th April, 2022</p>
                    <p>Contact: 123-456-7890</p>
                </div>
            </div>
        </div>



    );
};

export default UserCard;