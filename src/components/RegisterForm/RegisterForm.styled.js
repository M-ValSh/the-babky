import styled from '@emotion/styled';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';
// import Frame from '../../img/illustrations/Frame.svg';

export const LoginFormPage = styled.div(({ theme }) => ({
  margin: '0',
  display: 'Flex',
  gap: '38px',
  backgroundColor: theme.colors.mainBgUnderColor,
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundImage: `url(${pink_ellipse}), url(${purple_ellipse})`,
  backgroundPosition: 'top -150px right -150px, bottom -150px left -150px',
}));

export const Illustration = styled.img(({ theme }) => ({
  width: '435px',
  display: 'block',
  // width: '100%',
  // height: '420px',
  // height: '420px',
}));

export const IllustrationWrapper = styled.div(({ theme }) => ({
  marginTop: '150px',
  marginLeft: '76px',
  // width: '440px',
  // width: '550px',
  // paddingTop: '150px',
  // paddingLeft: '76px',

  // background: `url(${Frame})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  // backgroundSize: 'contain',
  // paddingBottom: '78px',
}));

export const FormWrapper = styled.div(({ theme }) => ({
  //   marginLeft: '32px',
  display: 'block',
  width: '100%',
  //   marginLeft: 'auto',
  //   justifyContent: 'center',
  //   width: '435px',
  //   height: '420px',

  backgroundColor: theme.colors.mainBgLighter,
  backdropFilter: 'blur(25px)',
  //   blur: '25px',
}));

export const IllustrationDesc = styled.p(({ theme }) => ({
  marginTop: '28px',
  padding: 0,
  textAlign: 'center',
  fontFamily: theme.fonts.main,
  fontSize: '30px',
  lineHeight: '45px',
  color: theme.colors.textMain,
  fontWeight: 400,
}));

export const FormBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  margin: '136px 91px 116px 107px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '40px 61px 62px 61px',

  width: '532px',
  height: '616px',

  alignItems: 'center',
  //   justifyContent: 'center',
  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,
  //   borderRadius: '20px',
  borderRadius: theme.radii.currency,
}));
