import React,{useState,useEffect} from "react";
import Data from "./api";
import { Chart, Country } from "../../Export";
import { Grid, Left, Right } from "../../../styles/grid";


const CovidTracker = () =>
{
    const [state, setState] = useState({
        data: "",
    });

    useEffect(()=> {
        const data = async ()=> {
            const data = await Data();
            setState({ data })
        }
        data();
    }, [])
    
        const { data } = state;
        return (
            <Grid>
                <Left>
                    <Chart data={data} />
                </Left>
                <Right>
                    <Country />
                </Right>
            </Grid>
        );
    
}

export default CovidTracker;
