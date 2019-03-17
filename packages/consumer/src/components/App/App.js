import React from 'react';
import { Spacing } from '@bricks/spacing';
import { Header, Main } from '..';
import tokens from '../../constants/tokens';

const App = () => (
  <>
    <Header />
    <Main>
      <Spacing size={tokens.spacing.large3x}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          nobis voluptates, impedit aliquid cumque nam aut. In, iusto mollitia
          quos, repellat quaerat voluptatem deserunt quam non doloremque ducimus
          distinctio cum!
        </p>
      </Spacing>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        nobis voluptates, impedit aliquid cumque nam aut. In, iusto mollitia
        quos, repellat quaerat voluptatem deserunt quam non doloremque ducimus
        distinctio cum!
      </p>
    </Main>
  </>
);

export default App;
