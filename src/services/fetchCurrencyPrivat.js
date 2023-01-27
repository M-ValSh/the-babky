import { bankApi } from 'index';

export const fetchCurrencyPrivat = async () => {
  const resp = await bankApi.get('/pubinfo?json&exchange&coursid=5');
  const data = await resp.json();
  return data;
};
