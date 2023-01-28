import styled from '@emotion/styled';

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

export const TRDesc = styled.tr`
  max-width: 393px;
  display: flex;
  justify-content: space-around;
  padding: 0px 16px;
`;

export const THDesc = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: "18px",
  fontWeight: "700",
  padding: "17px 0",

  width: '131px',
  height: '60px',

}));

export const TableTextDesc = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: "center",
  fontWeight: "400",
  fontSize: "16px",
  padding: "20px 0px 4px",
}));

// ============================
// FOR TABLET
// ============================
export const TableWrapperTablet = styled.div(({ theme, bg }) => {
  return ({
    width: '336px',
    height: '182px',
    color: theme.colors.textSecondary,
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
    margin: "62px 18px",
  })
});

export const TRTablet = styled.tr`
  max-width: 336px;
  display: flex;
  justify-content: space-around;
`;

export const THTablet = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: "18px",
  lineHeight: "1.5",
  fontWeight: "700",
  padding: "11px 0",

  width: '112px',
}));

export const TableTextTablet = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: "center",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "1.5",
  padding: "16px 0px 4px",
}));

// ============================
// FOR MOBILE
// ============================
export const TableWrapperMobile = styled.div(({ theme, bg }) => {
  return ({
    width: '280px',
    height: '174px',
    color: theme.colors.textSecondary,
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
    margin: "142px 18px",
  })
});

export const TRMobile = styled.tr`
  max-width: 280px;
`;

export const THMobile = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: "18px",
  lineHeight: "1.5",
  fontWeight: "700",
  padding: "0px 0px 0px 15px",

  width: '93px',
  height: '50px',

}));

export const TableTextMobile = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "1.5",
  padding: "12px 0px 0px 5px",
}));