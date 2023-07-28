import axios from "axios";
import { baseURL } from "./httpHelper";

const getUsersService = async () => {
  const res = await axios.get(baseURL + "/users");
  return res.data;
};

const deleteUserService = async (id) => {
  const res = await axios.delete(baseURL + "/users/" + id);
  return res.data;
};

export const userServices = {
  getUsersService,
  deleteUserService,
};
