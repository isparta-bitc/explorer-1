import * as React from 'react';

import {
  Block,
  CoinbaseTransaction,
  MempoolCoinbaseTransaction,
} from '@stacks/stacks-blockchain-api-types';
import { Box } from '@stacks/ui';

import { BtcAnchorBlockCard } from '@components/btc-anchor-card';
import { PageTop } from '@components/page';
import { PagePanes } from '@components/page-panes';
import { TransactionDetails } from '@components/transaction-details';
import { Events } from '@components/tx-events';

const CoinbasePage: React.FC<{
  transaction: CoinbaseTransaction | MempoolCoinbaseTransaction;
  block?: Block;
}> = ({ transaction, block }) => {
  if (!transaction) return null;
  return (
    <>
      <PageTop tx={transaction} />
      <PagePanes fullWidth={transaction.tx_status === 'pending' || !block}>
        <Box>
          <TransactionDetails transaction={transaction} block={block} />
          {'events' in transaction && (
            <Events
              txId={transaction.tx_id}
              mt="extra-loose"
              events={transaction.events}
              event_count={transaction.event_count}
            />
          )}
        </Box>
        {block && <BtcAnchorBlockCard block={block} />}
      </PagePanes>
    </>
  );
};

export default CoinbasePage;
