import { HStack, Icon, Text, StackProps, Box, Flex } from '@chakra-ui/react';
import React, { ElementType } from 'react';
import { ShieldIcon } from '../public/icons/Icon';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="vold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" pt="60px" pb="8">
      <HStack px="60px" spacing="10px">
        <Flex
          direction={['column', 'column', 'row']}
          justify="center"
          alignItems="center"
        >
          <Feature icon={ShieldIcon}>30 days money back Guarantee</Feature>
          <Feature icon={ShieldIcon}>No setup fees 100% hassle-free</Feature>
          <Feature icon={ShieldIcon}>
            No monthly subscription Pay once and fora all
          </Feature>
        </Flex>
      </HStack>
    </Box>
  );
}
