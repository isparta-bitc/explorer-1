import React from 'react';

import { Box, BoxProps } from '@stacks/ui';

export function ClarityIcon(props: BoxProps) {
  return (
    <Box as="svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 24C18.5683 24 24 18.5683 24 12C24 5.41974 18.5683 0 11.988 0C5.41974 0 0 5.41974 0 12C0 18.5683 5.4317 24 12 24ZM1.55533 12C1.55533 6.20937 6.20937 1.54337 11.988 1.54337C17.7787 1.54337 22.4447 6.20937 22.4566 12C22.4566 13.4716 22.1575 14.8594 21.6072 16.1276H2.40479C1.85444 14.8594 1.55533 13.4716 1.55533 12ZM12 22.4447C8.24327 22.4447 4.9651 20.4826 3.1346 17.5274H20.8774C19.0349 20.4826 15.7567 22.4447 12 22.4447Z"
        fill="currentColor"
      />
    </Box>
  );
}
