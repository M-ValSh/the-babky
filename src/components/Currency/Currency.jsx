import axios from 'axios';
// import fakeData from './fakeData.json';

export const Currency = () => {
  const fetchCurrency = async () => {
    //   // МОНОБАНК Працює
    //   // const { data } = await axios.get(`https://api.monobank.ua/bank/currency`);
    //   // const data = await resp.json();
    //   const data = fakeData;

    //   // console.log(data);
    //   const newArr = data.filter(el => {
    //     if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
    //       return el;
    //     }
    //     if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
    //       return el;
    //     }
    //     return null;
    //   });

    //   console.log(newArr);
    // };
    // fetchCurrency();

    // return (
    //   <div>
    //     <p>Here should be CURRENCY informer</p>
    //   </div>
    // );

    const res = await axios.get(
      `https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5`
    );
    console.log(res);
  };
  fetchCurrency();
};

// const res = await fetch(
//   `https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5`,
//   {
//     mode: 'no-cors',
//   }
// ).json();
