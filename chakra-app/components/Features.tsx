import { HStack, Icon, Text, StackProps, Box } from '@chakra-ui/react';
import React from 'react';
import { ShieldIcon, ClipIcon, RewindIcon } from '../public/icons/Icon';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px">
        <Feature icon={ShieldIcon}>30 days money back Guarantee</Feature>
        <Feature icon={ShieldIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={ShieldIcon}>
          No monthly subscription Pay once and fora all
        </Feature>
      </HStack>
    </Box>
  );
}
