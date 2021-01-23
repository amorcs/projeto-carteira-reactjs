import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;

`;

export const ToggleLabel = styled.span`
  color: ${props=> props.theme.colors.white};
`;

export const ToggSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  })
)<ReactSwitchProps>`
  margin: 0 7px 
`;

