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
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-256px"
      bg="white"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
    >
      <Flex>
        <Box
          bg="#F0EAFB"
          p="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontSize="24px" fontWeight="800">
            Primium PRO
          </Text>
          <Heading as="h3" fontSize="60px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
            billded just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Stated
          </Button>
        </Box>
        <Box p="60px" fontSize="18px">
          <Text textAlign="left">
            Access these features when you get this pricing pacakge for your
            buusiness
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
