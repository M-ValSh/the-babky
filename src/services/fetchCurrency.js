import axios from "axios";

export const fetchCurrency = async () => {
  const responce = await axios.get(
    "https://api.monobank.ua/bank/currency"
  )
  return responce;
};
