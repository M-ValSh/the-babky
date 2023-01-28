import styled from '@emotion/styled';
// import { useMedia } from 'components/Media/useMedia';
// const media = useMedia();

export const TableWrapperDesc = styled.div(({ theme, bg }) => {
  return ({
    width: '393px',
    height: '331px',
    color: theme.colors.textSecondary,
    margin: "32px 18px",
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
  })
});

export const TR = styled.tr`
  max-width: 393px;
  display: flex;
  justify-content: space-around;
  padding: 0px 16px;
`;

export const THdesc = styled.th(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "700",
  padding: "17px 0",

  width: '393px',
  height: '60px',

}));

export const TableText = styled.td`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0px 4px;
`;