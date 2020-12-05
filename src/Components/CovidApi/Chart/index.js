import React, {useEffect, useState} from "react";
import { HorizontalBar } from "react-chartjs-2";
import {Graph,Section,Div,FlagS} from "../../../styles/Chart.style";
import Data from "../main/api";

const Chart = ({data}) => {
    const [state,setState] = useState({
        data:"",
    });
    const [world,setWorld] = useState({
        status: "",
    });

    useEffect(()=>{
        data.map(({cases, todayCases, deaths, todayDeaths,updated,countryInfo })=>{
            let test = {
                cases:cases,
                todayCases:todayCases,
                deaths:deaths,
                todayDeaths:todayDeaths,
                updated:updated,
                countryInfo:countryInfo.flag
            }
            setState(test)
        });

    },[data]);


    useEffect(()=> {
        const data = async ()=> {
            const context = await Data();
            const {cases ,deaths ,updated } = context
            const display ={
                a:cases,
                b:deaths,
                c:updated
            }
            setWorld({ status:display})
        }
        data();
    }, []);

    const {
        cases,todayCases,deaths,todayDeaths,updated,countryInfo
    } = state;

    const {a,b,c}= world.status;

    if (!cases) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    const ss = {
        labels: ["confirmed", "deaths", "todayConfirmed ", "todayDeaths "],
        datasets: [
            {
                label: "All",
                backgroundColor: "#fca311",
                data: [cases, deaths, todayCases, todayDeaths],
            },
            {
                label: "C/D",
                backgroundColor: "#14213d",
                data: [cases, deaths],
            },
            {
                label: "Today ",
                backgroundColor: "#283618",
                data: [todayCases, null, null, todayDeaths],
            },
        ],
    };

    const GraphData = (
        <Section>
            <Div>
                <label>cases : </label>
                {cases}
            </Div>
            <Div>
                <label>Deaths : </label>
                {deaths}
            </Div>
            <Div>
                <label>updated : </label>
                {updated}
            </Div>

        </Section>
    );

    const GlobalData = (
        <Section>
            <Div>
                <label>cases : </label>
                {a}
            </Div>
            <Div>
                <label>Deaths : </label>
                {b}
            </Div>
            <Div>
                <label>updated : </label>
                {c}
            </Div>
        </Section>
    );
    const Flag =(
        <FlagS>
            <img src={countryInfo} alt ={countryInfo}/>
        </FlagS>
    )

    return (
        <Graph>
            <HorizontalBar data ={ss}/>
            {data.length === 1 ? GraphData : GlobalData}
            <section>{data.length === 1 ? Flag : ""}</section>
        </Graph>
    )
};
export default Chart;
