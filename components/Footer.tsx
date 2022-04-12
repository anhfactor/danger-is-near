import {
    Box,
    Container,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  export default function LargeWithNewsletter() {
    return (
      <Box
      
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          
        </Container>
      </Box>
    );
  }