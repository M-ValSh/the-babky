import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartText, ChartWrapper } from './ChartComp.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '65%',
};

const initialData = {
  labels: ['No trasactions'],
  datasets: [
    {
      label: '# of Votes',
      data: [1],
      backgroundColor: ['#a6a6a6'],
      borderColor: ['transparent'],
    },
  ],
};

const data = {
  datasets: [
    {
      data: [12, 12, 12, 12, 12, 12],
      backgroundColor: [
        'rgba(255, 99, 132,1)',
        'rgba(54, 162, 235,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const ChartComp = () => {
  return (
    <ChartWrapper>
      {data.datasets[0].data.length > 0 ? (
        <Doughnut data={data} options={options} />
      ) : (
        <Doughnut data={initialData} />
      )}
      {data.datasets[0].data.length > 0 && <ChartText>₴ 24 000.00</ChartText>}
    </ChartWrapper>
  );
};
