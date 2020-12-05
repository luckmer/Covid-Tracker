import React,{useState,useEffect} from "react";
import axios from "axios";
import { GraphStyle } from "../../../../styles/styles";
import Chart from "../index";
const url = `https://corona.lmao.ninja/v2/countries`;

const  Country = ()=>  {
    const [state, setState] = useState({
        countries: [],
        loading: true,
    });
    const [filterOption , setFilterOption ]  = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState({
        filterCountry:"",
        filterOptionCountry:""
    });

    useEffect(() =>{
        axios.get(url).then((res) =>{
            const country = res.data;
            setState({ countries: country, loading: false });
        });
    }, []);

    useEffect(() => {
        let filterS = state.countries;
        let filterOption = state.countries;
        if (search.filterOptionCountry) {
            filterOption = filterOption.filter((item) =>
                item.country
                    .toLowerCase()
                    .includes(
                        search.filterOptionCountry
                            .toLowerCase()
                            .trim()
                    ),
            );
        }

        setFilterOption(filterOption)
        setFilteredData(filterS)
    }, [state.countries,search.filterOptionCountry])
    const handleInputChange = (e) =>{
        setSearch({ ...search, [e.target.name]: e.target.value });
    };


    return (
        <section>
            {state.loading ? (
                <h1> Loading...</h1>
            ) : (
                <section>
                    <div>
                        <GraphStyle>
                            <select
                                name = "filterOptionCountry"
                                value = {search.filterOptionCountry}
                                onChange={handleInputChange}
                            >
                                <option value ="">Select </option>
                                {filteredData.map(({country,todayCases })=>(
                                    <option key ={country} value ={country }> {country +":"  + " cases :" +  todayCases }</option>
                                ))}
                            </select>
                            <Chart data ={filterOption} />
                        </GraphStyle>
                    </div>
                </section>
            )}
        </section>
    )
}

export default Country;
