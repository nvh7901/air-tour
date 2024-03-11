import axios from "axios";

export const getLocationListAPI = (location) => {
  return axios.get(
    `https://airbnb.cybersoft.edu.vn/api/locations?location=${location}`,
    {
      headers: {
        tokenByClass:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkZDNiN2E2MDQzNjAwMWM0ODU2OGQiLCJlbWFpbCI6Im5nby5odXkudmFuLjIwMDFAZ21haWwuY29tIiwidHlwZSI6IkNMSUVOVCIsImlhdCI6MTcxMDA4NTA1M30.cbtQhSagYX4nnh3FMirLAWm0iosnBvv3sYHBUT7S83s",
      },
    }
  );
};
