import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box pb="112px" as="section">
      <Box color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198px" px="32px">
        <Flex justify="center" align="center" direction="column">
          <Heading fontWeight="800" fontSize="48px" color="white">
            Simple pricing for your business
          </Heading>
          <Text fontSize="25px" fontWeight="500" pt="16px">
            {' '}
            Plans that are carefully crafted to suit your business.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
