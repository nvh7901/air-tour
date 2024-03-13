import axiosAPI from "@/api/index";

export const registerAPI = (userRegister) => {
  return axiosAPI.post(`/api/auth/register`, userRegister);
};
