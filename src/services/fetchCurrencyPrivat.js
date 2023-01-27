export const fetchCurrencyPrivat = async () => {
  const resp = await fetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );
  const data = await resp.json();
  return data;
};
