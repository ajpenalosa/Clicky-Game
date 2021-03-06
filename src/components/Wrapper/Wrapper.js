import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className={props.class}>
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    </div>
);

export default Wrapper;
