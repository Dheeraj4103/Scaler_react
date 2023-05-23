import React, { useState } from "react";
import styles from "./Accordian.module.css"
import PropTypes from "prop-types";

function Accordian({ defaultExpaned, heading, children }) {

    const [isExpanded, setIsExpanded] = useState(defaultExpaned);

    function handleAccordianToggle() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={styles.root}>
            <div className={styles.heading} onClick={handleAccordianToggle}>
                <div className={styles.title}>{heading}</div>
                <div>{ isExpanded ? '-' : '+' }</div>
            </div>
            {isExpanded && <div className={styles.content}>
                {children}
            </div>}
        </div>
    )
}

Accordian.propTypes = {
    defaultExpaned: PropTypes.bool,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Accordian;