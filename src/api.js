import axios from "axios";

const ACCESS_KEY = 'Ne-IfSMqxN66_C7rR-OL9vdgzXJTkt7BXvPQroeFV00';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 20,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data;
};