import React, { Component } from "react";
import axios from "axios";
import { Chart, Country } from "../../Export";
import { Grid, Left, Right } from "../../GlobalStyle/grid";
//api
const url = "https://corona.lmao.ninja/v2/all";
//Data control
const Data = async () => {
    try {
        const {
            data: { cases, todayCases, deaths, todayDeaths, updated },
        } = await axios.get(url);
        return { cases, todayCases, deaths, todayDeaths, updated };
    } catch (error) {
        return error;
    }
};

export default class CovidTracker extends React.Component {
    state = {
        data: "",
    };
    async componentDidMount() {
        const data = await Data();
        console.log(data);
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
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
}
