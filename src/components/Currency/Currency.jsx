import axios from 'axios';

export const Currency = () => {
  const fetchCurrency = async () => {
    // МОНОБАНК Працює
    // const resp = await axios.get(`https://api.monobank.ua/bank/currency`, {
    //   // params: { coursid: '5' },
    //   // headers: {
    //   //   'X-RapidAPI-Key': 'your-rapidapi-key',
    //   //   'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
    //   // },
    // });
    // const data = await resp.json();
    const resp = await axios.get(
      `https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5`,
      {
        // params: { coursid: '5' },
        // headers: {
        //   'X-RapidAPI-Key': 'your-rapidapi-key',
        //   'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
        // },
      }
    );
    console.log(resp);
    return resp;
  };
  fetchCurrency();

  return (
    <div>
      <p>Here should be CURRENCY informer</p>
    </div>
  );
};
