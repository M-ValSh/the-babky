import axios from "axios";

export const fetchCurrency = async () => {

  const instance = axios.create({
    baseURL: 'https://api.monobank.ua/bank/currency'
  });
  const responce = instance.get();

  // const responce = await axios.get(
  //   "https://api.monobank.ua/bank/currency"
  // )
  return responce;
};
