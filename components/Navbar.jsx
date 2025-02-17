import Link from 'next/link';
import { Menu, MenuButton, MenuItem, IconButton, Flex, Box, Spacer, MenuList } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsBorderBottom, BsSearch } from 'react-icons/bs';
import { FiKey} from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" BorderBottom="1px" borderColo="gray.100">
      <Box fontSize="3xl" color="gray.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">Realtor</Link> 
      </Box>
      <Spacer />
      <Box>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={< BsSearch/>}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>But Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
            </MenuList>
        </Menu>
      </Box>
    </Flex> 
);

export default Navbar;
