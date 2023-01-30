import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartText, ChartWrapper } from './ChartComp.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '65%',
};

export const ChartComp = ({ data }) => {
  return (
    <ChartWrapper>
      <Doughnut data={data} options={options} />
      <ChartText>₴ 24 000.00</ChartText>
    </ChartWrapper>
  );
};
