import { fetchData } from "../fetchData";

const authenticate_api = async (email: string, password: string) => {
  return fetchData("api/login", "POST", JSON.stringify({ email, password }));
};

const register_api = async (email: string, password: string) => {
  return fetchData("api/signup", "POST", JSON.stringify({ email, password }));
};

export const authApi = {
  register: register_api,
  authenticate: authenticate_api,
};
