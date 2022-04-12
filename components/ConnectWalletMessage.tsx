import { useContext } from 'react';
import { Flex, Text, Button, Heading, Center, VStack } from '@chakra-ui/react';

import AppContext from '@components/AppContext';

export  const ConnectWalletMessage = () => {
  // @ts-ignore
  const { login } = useContext(AppContext);

  return (
    <Center height='100vh'>
      <VStack spacing='4'>
        <Heading>Sign In</Heading>
        <Text>
          Please sign in to Near testnet to play the game.
        </Text>
        <Button variant='solid' onClick={login}>
          Connect Wallet
        </Button>
      </VStack>
    </Center>
  );
};

export default ConnectWalletMessage;