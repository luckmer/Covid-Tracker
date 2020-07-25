import axios from "axios";
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
export default Data;
