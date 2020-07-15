import React from "react";
import axios from "axios";
const url = `https://corona.lmao.ninja/v2/countries`;
export default class Country extends React.Component {
    state = {
        countries: [],
        loading: true,
    };

    componentDidMount() {
        axios.get(url).then((res) => {
            const countries = res.data;
            this.setState({ countries, loading: false });
        });
    }

    render() {
        return (
            <>
                {this.state.loading ? (
                    <div>
                        <h1>loading...</h1>
                    </div>
                ) : (
                    <div>das</div>
                )}
            </>
        );
    }
}
