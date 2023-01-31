import ErrorImg from 'assets/images/404.png';
import { Img, ErrorDiv, ErrorTitle } from './NotFound.styled';
import { BubleWrapper } from 'components/Navigations/Navigation.styled';

const NotFound = () => {
  return (
    <BubleWrapper>
      <ErrorDiv>
        <Img src={ErrorImg} />
        <ErrorTitle>404</ErrorTitle>
        <p>Something went wrong. We cant find this page</p>
      </ErrorDiv>
    </BubleWrapper>
  );
};
export default NotFound;
