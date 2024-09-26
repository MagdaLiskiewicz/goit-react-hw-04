import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "y8M3SrSEPV9YY08HLFmeiokFNGaqU88-aj9IGjjbMKk";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query,
      page,
      client_id: accessKey,
    },
  });
  return response.data.results;
};
