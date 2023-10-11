const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${bearerToken}`,
  },
};

export const IMAGE_CDN = "http://image.tmdb.org/t/p/";