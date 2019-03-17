import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'sandbox/components';
import tokensSandbox from 'sandbox/constants/tokens';
import TokensProvider, { TokensConsumer } from './TokensProvider';

storiesOf('Components/Tokens Provider', module)
  .add('Tokens provided (by the Bricks consumer)', () => (
    <pre>{JSON.stringify(tokensSandbox, null, 2)}</pre>
  ))
  .add('Tokens consumed (by the Bricks lib)', () => (
    <TokensProvider tokens={tokensSandbox}>
      <div className="sandbox-layout-flexrow">
        <TokensConsumer>
          {tokens =>
            Object.keys(tokens).map(item => (
              <Table heading={item} key={item}>
                <TableHead>
                  <TableRow>
                    <TableCell type="h">Name</TableCell>
                    <TableCell type="h">Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(tokens[item]).map(subitem => (
                    <TableRow key={subitem}>
                      <TableCell>
                        <code>{subitem}</code>
                      </TableCell>
                      <TableCell>{tokens[item][subitem]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ))
          }
        </TokensConsumer>
      </div>
    </TokensProvider>
  ));
