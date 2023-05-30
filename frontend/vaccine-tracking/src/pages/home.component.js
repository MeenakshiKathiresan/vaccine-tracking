import React from "react"
import {
    AiFillQuestionCircle,
    AiFillDownCircle,
    AiFillUpCircle,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import "../App.css"

const Home = () => {

    return (
<div className="parent-div">
    <br/>
        <div className="dashboard">
            <div className="metric posts">
                <p className="metric-number">90</p>
                <p className="metric-text">
                    <span>

                        <AiFillQuestionCircle /> Posts
                    </span>
                </p>
            </div>
            <div className="metric answers">
                <div className="side"></div>
                <p className="metric-number">90</p>
                <p className="metric-text">
                    <span>
                        <FaCommentAlt /> Answers
                    </span>
                </p>
            </div>
            <div className="metric upvotes">
                <p className="metric-number">45</p>
                <p className="metric-text">
                    <span>
                        <AiFillUpCircle /> Upvotes
                    </span>
                </p>
            </div>
            <div className="metric downvotes">
                <p className="metric-number">23</p>
                <p className="metric-text">
                    <span>
                        <AiFillDownCircle /> Downvotes
                    </span>
                </p>
            </div>
            </div>
        </div>
    );
}

export default Home