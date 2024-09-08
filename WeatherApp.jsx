import React from 'react';
import {
  Box,
  Heading,
  Image,
  Button,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import SunIcon from './SunIcon.jpg';
import CloudIcon from './CloudIcon.png';
import DuckIcon from './Duck.png';

function WeatherApp() {
  return (
    <Box
      w={{ base: "350px", md: "400px" }}  // Adjust width for mobile screens
      h="700px"  // Set appropriate height
      bg="#A2C9FA"  // Updated back to the old color
      borderRadius="xl"
      boxShadow="lg"
      textAlign="center"
      p={6}
      position="relative"
      mx="auto"  // Center the box horizontally
      overflow="hidden"  // Ensure content stays within the box
    >
      <Heading fontSize="6xl" color="white">
        72°F
      </Heading>

      {/* Clouds */}
      <Image
        src={CloudIcon}
        alt="cloud"
        position="absolute"
        top="10%"
        left="5%"
        boxSize="80px"
      />
      <Image
        src={CloudIcon}
        alt="cloud"
        position="absolute"
        top="10%"
        right="5%"
        boxSize="80px"
      />

      {/* Weather options */}
      <HStack justify="center" mt={8}>
        <Button colorScheme="blue" borderRadius="full" px={4} fontSize="sm">
          By Hour
        </Button>
        <Button colorScheme="blue" borderRadius="full" px={4} fontSize="sm">
          By Week
        </Button>
      </HStack>

      {/* Hourly weather */}
      <HStack spacing={3} justify="center" mt={8}>
        {[
          { time: '8am', temp: '72°', icon: SunIcon },
          { time: '9am', temp: '70°', icon: SunIcon },
          { time: '10am', temp: '65°', icon: SunIcon },
          { time: '11am', temp: '64°', icon: SunIcon },
          { time: '12pm', temp: '66°', icon: CloudIcon }, // Added 12pm
        ].map((item, idx) => (
          <VStack key={idx} bg="white" borderRadius="full" p={2} boxShadow="md" minW="60px">
            <Image src={item.icon} alt="weather" boxSize="40px" />
            <Text fontSize="sm" fontWeight="bold">
              {item.time}
            </Text>
            <Text fontSize="sm">{item.temp}</Text>
          </VStack>
        ))}
      </HStack>

      <Heading size="xl" mt={10} color="black"> {/* Increased font size */}
        New York
      </Heading>

      <VStack spacing={3} mt={8}>
        <Button colorScheme="blue" w="80%" borderRadius="full" fontSize="md" py={2}>
          Your Cities
        </Button>
        <Button colorScheme="blue" w="80%" borderRadius="full" fontSize="md" py={2}>
          + Add City
        </Button>
        <Button colorScheme="blue" w="80%" borderRadius="full" fontSize="md" py={2}>
          See More
        </Button>
      </VStack>

      <Image
        src={DuckIcon}
        alt="duck"
        position="absolute"
        bottom="5%"
        right="5%"
        boxSize="60px"
      />
    </Box>
  );
}

export default WeatherApp;
