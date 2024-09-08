import React from 'react';

function Design(props) {
    return (
        <Box
          w="400px"
          h="300px"
          border="1px solid lightgray"
          borderRadius="md"
          p={4}
          textAlign="center"
        >
          {/* Large heading for temperature */}
          <Heading size="2xl" mb={4}>
            72°F
          </Heading>
    
          {/* Time ovals with sun icon */}
          <HStack spacing={4} justify="center" mb={4}>
            {['10am', '11am', '12pm', '1pm', '2pm'].map((time, idx) => (
              <VStack key={idx}>
                <Image
                  src="/sun-icon.png" // Use a sun image (add this image in the public folder or replace the path with a working one)
                  alt="sun"
                  boxSize="40px"
                />
                <Text>{time}</Text>
              </VStack>
            ))}
          </HStack>
    
          {/* Medium heading for city */}
          <Heading size="md" mb={4}>
            New York
          </Heading>
    
          {/* Buttons */}
          <Flex justify="center" mt={4}>
            <Button colorScheme="blue" mr={2}>
              More Details
            </Button>
            <Button colorScheme="blue" mr={2}>
              Your Cities
            </Button>
            <Button colorScheme="blue">
              Add City
            </Button>
          </Flex>
        </Box>
      );
}

export default Design;


