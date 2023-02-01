import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartText,
  ChartWrapperDesk,
  ChartWrapperTablet,
  ChartWrapperMobile,
} from './ChartComp.styled';
import { useMedia } from 'components/Media/useMedia';

ChartJS.register(ArcElement, Tooltip);

const options = {
  cutout: '65%',
};

export const ChartComp = ({ data, incomeSummary, expenseSummary }) => {
  const media = useMedia();
  const diff = (incomeSummary + expenseSummary)
    .toLocaleString('ua-UK', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(',', '.');

  return (
    <>
      {media.isDesktop && (
        <ChartWrapperDesk>
          <Doughnut data={data} options={options} />
          <ChartText>₴ {diff}</ChartText>
        </ChartWrapperDesk>
      )}
      {media.isTablet && (
        <ChartWrapperTablet>
          <Doughnut data={data} options={options} />
          <ChartText>₴ {diff}</ChartText>
        </ChartWrapperTablet>
      )}
      {media.isMobile && (
        <ChartWrapperMobile>
          <Doughnut data={data} options={options} />
          <ChartText>₴ {diff}</ChartText>
        </ChartWrapperMobile>
      )}
    </>
  );
};
