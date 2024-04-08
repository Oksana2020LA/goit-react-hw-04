import axios from "axios";

const API_KEY = "Ne-IfSMqxN66_C7rR-OL9vdgzXJTkt7BXvPQroeFV00";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const requestImages = async (query, page) => {
  const { data } = await axios.get("search/photos", {
    params: {
      query: query,
      page: page,
    },
  });

  return data;
};