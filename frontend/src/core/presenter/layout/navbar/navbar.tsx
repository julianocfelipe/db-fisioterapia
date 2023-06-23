import { Box, useBreakpointValue } from '@chakra-ui/react';
import NavbarDesktop from './navbar_desktop';
import NavbarMobile from './navbar_mobile';

const Navbar: React.FC = () => {
  const usingMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return <Box>{usingMobile ? <NavbarMobile /> : <NavbarDesktop />}</Box>;
};

export default Navbar;
