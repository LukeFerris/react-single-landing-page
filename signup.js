import axios from "axios";

export const subscribe = async (request) => {
  if (process.env.REACT_APP_API_URL) {
    await axios.post(process.env.REACT_APP_API_URL + `/createEntry`, request);
  }
};
