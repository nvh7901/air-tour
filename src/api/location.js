import axiosAPI from "@/api/index";

export const getLocationListAPI = (location) => {
  return axiosAPI.get(`/api/locations?location=${location}`);
};
