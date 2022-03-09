import axios from "axios";
import apiKeys from "./api-keys";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// const RAPID_API_KEY = process.env.RAPID_API_KEY;
// console.log("rapid", RAPID_API_KEY);
export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": apiKeys.RAPID_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
