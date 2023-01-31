import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartText,
  ChartWrapperDesk,
  ChartWrapperTablet,
  ChartWrapperMobile,
} from './ChartComp.styled';
import { useMedia } from 'components/Media/useMedia';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '65%',
};

export const ChartComp = ({ data }) => {
  const media = useMedia();

  return (
    <>
      {media.isDesktop && (
        <ChartWrapperDesk>
          <Doughnut data={data} options={options} />
          <ChartText>₴ 24 000.00</ChartText>
        </ChartWrapperDesk>
      )}
      {media.isTablet && (
        <ChartWrapperTablet>
          <Doughnut data={data} options={options} />
          <ChartText>₴ 24 000.00</ChartText>
        </ChartWrapperTablet>
      )}
      {media.isMobile && (
        <ChartWrapperMobile>
          <Doughnut data={data} options={options} />
          <ChartText>₴ 24 000.00</ChartText>
        </ChartWrapperMobile>
      )}
    </>
  );
};
