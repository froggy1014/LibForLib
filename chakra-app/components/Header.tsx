import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box pb="28" as="section">
      <Box
        color="gray.50"
        bg="purple.600"
        pt="90px"
        pb="198px"
        px="8"
        textAlign={['left', 'left', 'center']}
      >
        <Flex justify="center" align="center" direction="column">
          <Heading
            fontWeight="extrabold"
            fontSize={['3xl', '3xl', '5xl']}
            color="white"
          >
            Simple pricing for your business
          </Heading>
          <Text fontSize={['lg', 'lg', 'xl']} fontWeight="mediym" pt="4">
            {' '}
            Plans that are carefully crafted to suit your business.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
