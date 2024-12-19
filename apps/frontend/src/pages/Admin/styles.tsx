import Button from '@mui/material/Button';
import styled from 'styled-components';

export const AdminContainer = styled.div(() => ({
  padding: '24px',
}));

export const HeaderRow = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const ExportCSVButton = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '2%',
}));
