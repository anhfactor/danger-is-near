import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdLogout, MdAnalytics, MdAccountBalanceWallet, MdAttachMoney } from 'react-icons/md'
import { useRouter } from 'next/router';
import AppContext from './AppContext';
  
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const {  account, config, balance, login, logout } = useContext(AppContext);
  return (
    <>
      <Box  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems='center'
         onClick={() => {
          router.push('/');
        }}>
          <Image
              src='./assets/danger_token.png'
              alt='Logo'
              width="20%"
              height="20%"
              rounded='lg'
            /> 
          <Button
            variant='unstyled'
            marginX='2'
            fontSize='2xl'
            fontWeight='extrabold'
          >
            Danger
          </Button>
        </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} variant='ghost'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button >
              {account.accountId ?
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'./assets/player/player_avatar.png'}
                      />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'./assets/player/player_avatar.png'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{account.accountId}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem onClick={
                        ()=> window.open(`${config.explorerUrl}/accounts/${account.accountId}`, "_blank")
                      }>
                        <Icon as={MdAnalytics} /> &nbsp; Track transactions
                      </MenuItem>
                    <MenuItem onClick={
                        ()=> window.open(`${config.walletUrl}/profile/${account.accountId}`, "_blank")
                      }>
                      <Icon as={MdAccountBalanceWallet} />&nbsp; Balance: {balance.nearBalance} $NEAR
                    </MenuItem>
                    <MenuItem onClick={
                        ()=> window.open(`${config.walletUrl}/profile/${account.accountId}`, "_blank")
                      }>
                      <Icon as={MdAttachMoney} />&nbsp; Token: {balance.tokenBalance} $DANGER
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <Icon as={MdLogout} /> &nbsp; Logout
                    </MenuItem>
                  </MenuList>
                </Menu> 
                : 
                  <Button variant='ghost' onClick={login}>
                    Connect wallet
                  </Button> }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}