import React from "react";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularRating({ value }) {
    const getColor = (val) => {
        if (val < 50) return "#f44336";
        if (val < 70) return "#ff9800";
        return "#4caf50";
    };

    return (
        <div className="w-8 h-8">
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    textSize: "24px",
                    textColor: "#fff",
                    pathColor: getColor(value),
                    trailColor: "#1e1e1e",
                    backgroundColor: "#0d1117"
                })}
            />
        </div>
    );
}

export default CircularRating;
