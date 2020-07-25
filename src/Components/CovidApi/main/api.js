import axios from "axios";
const url = "https://corona.lmao.ninja/v2/all";
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
