import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Icon,
  StackProps,
  Stack,
} from '@chakra-ui/react';
import { CheckIcon } from '../public/icons/Icon';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={['left', 'left', 'center']}>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-64"
        bg="white"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box
            bg="#F0EAFB"
            p="60px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text fontSize="24px" fontWeight="extrabold">
              Primium PRO
            </Text>
            <Heading as="h3" fontSize={['5xl', '5xl', '6xl']}>
              $329
            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
              billded just once
            </Text>
            <Button colorScheme="purple" size="lg" w="40" mt="6">
              Get Stated
            </Button>
          </Box>
          <Box p="60px" fontSize="lg">
            <Text textAlign="left">
              Access these features when you get this pricing pacakge for your
              buusiness
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
