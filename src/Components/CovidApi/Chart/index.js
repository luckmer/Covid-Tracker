import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const Chart = ({ data: { cases, todayCases, deaths, todayDeaths } }) => {
    if (!cases) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    const data = {
        labels: ["confirmed", "deaths", "todayConfirmed ", "todayDeaths "],
        datasets: [
            {
                label: "All",
                backgroundColor: "#EE6C4D",
                data: [cases, deaths, todayCases, todayDeaths],
            },
            {
                label: "C/D",
                backgroundColor: "#E0FBFC",
                data: [cases, deaths],
            },
            {
                label: "Today ",
                backgroundColor: "#98C1D9",
                data: [todayCases, null, null, todayDeaths],
            },
        ],
    };

    return (
        <div>
            <HorizontalBar data={data} />
        </div>
    );
};
export default Chart;
