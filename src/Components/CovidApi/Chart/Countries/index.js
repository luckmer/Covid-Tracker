import React,{useState,useEffect} from "react";
import axios from "axios";
import { Img, Td, Th, Tr, Input, Div } from "../../../../styles/styles";
const url = `https://corona.lmao.ninja/v2/countries`;


function Country()
{
    const [state, setState] = useState({
        countries: [],
        loading: true,
    });
    const [filteredData, setFilteredData] = useState([]); 
    const [search, setSearch] = useState({
        filterCountry:"",
    });

    useEffect(() =>{
        axios.get(url).then((res) =>{
            const country = res.data;
            setState({ countries: country, loading: false });
        });
    }, []);

    useEffect(() => {
        let filterS = state.countries;
        if (search.filterCountry) {
            filterS = filterS.filter((item) =>
                item.country
                    .toLowerCase()
                    .includes(
                        search.filterCountry
                            .toLowerCase()
                            .trim()
                    ),
            );
        };
        setFilteredData(filterS)
    }, [search.filterCountry,state.countries])

    const handleInputChange = (e) =>{
            setSearch({ ...search, [e.target.name]: e.target.value });
        };
        
        return (
            <>
                {state.loading ? (
                    <h1> Loading...</h1>
                ) : (
                    <table>
                        <thead>
                            <Div>
                                <Input
                                    placeholder="Search"
                                        value={search.filterCountry}
                                        name="filterCountry"
                                    onChange={handleInputChange}
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
    )
}

export default Country;
