import axios from "axios";

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
