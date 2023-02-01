import styled from '@emotion/styled';
import { Switch, Input, Select, Textarea } from '@chakra-ui/react';

export const ModalCheckbox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}));

export const CheckboxText = styled.span(({ theme, isChecked }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.bold,
  color: '#E0E0E0',

  '&:first-of-type': {
    color: !isChecked && theme.colors.BgBtnGreen,
  },

  '&:last-of-type': {
    color: isChecked && theme.colors.BgBtnRed,
  },
}));

export const ModalForm = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  color: theme.colors.placeholder,
  fontFamily: theme.fonts.secondary,
  fontSize: theme.fontSizes.lg,
}));

export const SelectWrapper = styled.div`
  position: relative;
`;

export const AmountDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    width: 394px;
    flex-direction: row;
    gap: 30px;
  }
`;

export const ModalSlct = styled(Select)(({ theme }) => ({
  width: '280px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderBottom: '1px solid #E0E0E0',

  '& + div': {
    position: 'absolute',
    right: '30px',

    '@media (min-width: 768px)': {
      right: '8px',
    },
  },

  '@media (min-width: 768px)': {
    width: '394px',
  },
}));

export const ModalOpt = styled.option(({ theme }) => ({}));

export const ModalSwitch = styled(Switch)(({ theme }) => ({}));

export const ModalInput = styled(Input)(({ theme }) => ({
  width: '280px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderBottom: '1px solid #E0E0E0',

  '&:first-of-type': {
    fontWeight: theme.fontWeights.bold,
  },

  '@media (min-width: 768px)': {
    width: 'calc((100% - 30px) / 2)',
  },
}));

export const ModalCmnt = styled(Textarea)(({ theme }) => ({
  width: '280px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderBottom: '1px solid #E0E0E0',

  '@media (min-width: 768px)': {
    width: '394px',
  },
}));
