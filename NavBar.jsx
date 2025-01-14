import { Box, Button, ButtonGroup, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import DuckIcon from './Duck.png'; // Import the Duck image

function Navbar() {
  const isDesktop = useBreakpointValue({
    base: true,
    sm: false,
    md: true,
    lg: true,
  });
  const navigate = useNavigate();

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" p={4}>
      <Flex align="center" width="100%">
        {}
        <img
          src={DuckIcon} // Use the Duck.png image
          width="70px"
          alt="Duck Logo"
          style={{ marginLeft: "30px" }}
          onClick={() => navigate("/")} // Navigate to the home page on click
        />
        {isDesktop ? (
          <Flex justify="flex-start" flex="1" marginLeft="30px">
            <ButtonGroup variant="link" spacing="8">
              <Button key="Home" onClick={() => navigate('/')} variant="ghost">
                Home
              </Button>
              <Button key="Design" onClick={() => navigate('/design')} variant="ghost">
                Design
              </Button>
              <Button key="Weather" onClick={() => navigate('/weather')} variant="ghost">
                Weather
              </Button>
            </ButtonGroup>
          </Flex>
        ) : (
          <IconButton
            alignSelf="center"
            marginLeft="auto"
            marginRight="10px"
            variant="ghost"
            aria-label="Open Menu"
          />
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;