import React from 'react';

import { Container,ToggleLabel, ToggSelector } from './styles';

const Toggle: React.FC = ()=>{
  return(
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log('mudou!')}
      />
      <ToggleLabel>Dark</ToggleLabel>

    </Container>
  );
}
export default Toggle;