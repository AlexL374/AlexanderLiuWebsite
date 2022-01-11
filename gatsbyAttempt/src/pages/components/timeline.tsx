import * as React from "react"
import './timeline.css';
//import {Date}

type TimelineProps = {

};

// Timeline will contain a dot/content to replace dot, connecter line to next dot (can be prop to decided whether or not to have this)
// and the content itself to the right or left (also decided by a prop) 
function Timeline() {
    return (
        <div className="timeline-container">
            <p className="content-title">hey</p>
            <div className="timeline-connector"></div>
            <p className="">after</p>
        </div>
    );
}

export default Timeline;