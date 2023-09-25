import {
  Button,
  Drawer,
  DrawerBody,
  Image,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GiBarracksTent, GiOnTarget } from 'react-icons/gi';
import { RiContactsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import navlogo from '../Assets/Logos/logo.png'
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sessionVariable, setSessionVariable] = useState(false);
  useEffect(() => {
    const storedSessionVariable = sessionStorage.getItem('isUserLoggedIn');
    if (storedSessionVariable) {
      setSessionVariable(storedSessionVariable);
    }
  }, []);
  const user = {
    role: "admin"
  }
  const logOutHandler = () => {
    console.log('Logout');
    onClose();
  }


  return (
    <>
      <Button
        colorScheme={'orange'}
        position="fixed"
        top={'6'}
        left="6"
        width="12"
        height="12"
        rounded="full"
        onClick={onOpen}
        zIndex={'10'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(10px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'} letterSpacing={'2px'}>
            <HStack>
              <Image src={navlogo} />
              <Text> PUNJAB GHAR GHAR ROZGAR</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'6'} alignItems="flex-start">
              <Link onClick={onClose} to="/">
                <Button leftIcon={<FaHome />} variant="ghost">Home</Button>
              </Link>
              <Link onClick={onClose} to="/jobs">
                <Button leftIcon={<BsBriefcaseFill />} variant="ghost">Jobs</Button>
              </Link>
              <Link onClick={onClose} to="/courses">
                <Button leftIcon={<FaLaptopCode />} variant="ghost">Courses</Button>
              </Link>
              <Link onClick={onClose} to="/events">
                <Button leftIcon={<GiBarracksTent />} variant="ghost">Events</Button>
              </Link>
              <Link onClick={onClose} to="/contact">
                <Button leftIcon={<RiContactsFill />} variant="ghost">Contact Us</Button>
              </Link>
              <Link onClick={onClose} to="/mission">
                <Button leftIcon={<GiOnTarget />} variant="ghost">Our Mission</Button>
              </Link>
              <HStack
                justifyContent={'space-evenly'}
                position={"absolute"}
                bottom={['10rem','2rem']}
                width="80%"
              >
                {sessionVariable ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'orange'}>Profile</Button>
                        </Link>
                        <Button variant={'ghost'} colorScheme={'orange'} onClick={logOutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant='ghost' >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            DashBoard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'orange'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'orange'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
