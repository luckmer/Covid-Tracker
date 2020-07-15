import React from "react";
import axios from "axios";
import { Img, Td, Th, Tr, Table } from "./styles";
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
        const { countries } = this.state;
        return (
            <>
                {this.state.loading ? (
                    <h1> Loading...</h1>
                ) : (
                    <Table>
                        <thead>
                            <Td>
                                <Th>confirmed</Th>
                                <Th>Deaths</Th>
                                <Th>population</Th>
                            </Td>
                        </thead>
                        {countries.map((country) => (
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
                    </Table>
                )}
            </>
        );
    }
}
