import React from "react";
import Data from "./api";
import { Chart, Country } from "../../Export";
import { Grid, Left, Right } from "../../GlobalStyle/grid";

class CovidTracker extends React.Component {
    state = {
        data: "",
    };
    async componentDidMount() {
        const data = await Data();
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

export default CovidTracker;
