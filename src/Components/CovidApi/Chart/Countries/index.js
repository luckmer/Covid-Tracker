import React from "react";
import axios from "axios";
import { Img, Td, Th, Tr, Input, Div } from "./styles";
const url = `https://corona.lmao.ninja/v2/countries`;
export default class Country extends React.Component {
    state = {
        Find: "",
        countries: [],
        filteredData: [],
        loading: true,
    };

    handleInputChange = (e) => {
        let Find = e.target.value;
        this.setState((S) => {
            const filteredData = S.countries.filter((i) => {
                return i.country.toLowerCase().includes(Find.toLowerCase());
            });
            return {
                Find,
                filteredData,
            };
        });
    };

    componentDidMount() {
        axios.get(url).then((res) => {
            const countries = res.data;
            this.setState({ countries, loading: false });
        });
    }

    render() {
        const { filteredData } = this.state;
        return (
            <>
                {this.state.loading ? (
                    <h1> Loading...</h1>
                ) : (
                    <table>
                        <thead>
                            <Div>
                                <Input
                                    placeholder="Search"
                                    value={this.state.Find}
                                    onChange={this.handleInputChange}
                                />
                            </Div>
                            <Td>
                                <Th>confirmed</Th>
                                <Th>Deaths</Th>
                                <Th>population</Th>
                            </Td>
                        </thead>
                        {filteredData.map((country) => (
                            <div key={country.country}>
                                <thead>
                                    <Tr>{country.country}</Tr>
                                </thead>
                                <tbody>
                                    <td>
                                        <td>
                                            <Img
                                                src={country.countryInfo.flag}
                                            />
                                        </td>
                                        <Td>
                                            <Th>{country.cases}</Th>
                                            <Th>{country.deaths}</Th>
                                            <Th>{country.population}</Th>
                                        </Td>
                                    </td>
                                </tbody>
                            </div>
                        ))}
                    </table>
                )}
            </>
        );
    }
}
