import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  ChartText,
  ChartWrapperDesk,
  ChartWrapperTablet,
  ChartWrapperMobile,
} from './ChartComp.styled';
import { useMedia } from 'components/Media/useMedia';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '65%',
};

export const ChartComp = ({ data }) => {
  const media = useMedia();
  const { selectBalance } = authSelectors;
  const balance = useSelector(selectBalance)
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(',', '.');

  return (
    <>
      {media.isDesktop && (
        <ChartWrapperDesk>
          <Doughnut data={data} options={options} />
          <ChartText>₴ {balance}</ChartText>
        </ChartWrapperDesk>
      )}
      {media.isTablet && (
        <ChartWrapperTablet>
          <Doughnut data={data} options={options} />
          <ChartText>₴ {balance}</ChartText>
        </ChartWrapperTablet>
      )}
      {media.isMobile && (
        <ChartWrapperMobile>
          <Doughnut data={data} options={options} />
          {/* <ChartText>₴ 24 000.00</ChartText> */}
          <ChartText>₴ {balance}</ChartText>
        </ChartWrapperMobile>
      )}
    </>
  );
};
