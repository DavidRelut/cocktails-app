import axios from "axios";
import { API_BASE_URL } from "./baseURL";
import { ICocktailListModel } from "./models";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getRandomCocktail = async (): Promise<ICocktailListModel> => {
  const response = await axiosInstance.get("random.php");
  return response.data?.drinks;
};
