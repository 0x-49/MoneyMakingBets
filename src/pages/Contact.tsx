import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMail, FiUser } from 'react-icons/fi';

export default function Contact() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
        <Box flex={1}>
          <Heading mb={4}>Get in Touch</Heading>
          <Text fontSize="lg" mb={8} color={useColorModeValue('gray.600', 'gray.300')}>
            Have questions about betting strategies or our tools? We're here to help!
          </Text>
          <Box
            bg={bgColor}
            borderRadius="lg"
            p={8}
            border="1px"
            borderColor={borderColor}
            shadow="sm"
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <FiUser />
                  </InputLeftElement>
                  <Input type="text" placeholder="Your Name" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <FiMail />
                  </InputLeftElement>
                  <Input type="email" placeholder="your@email.com" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                width="full"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>

        <Box flex={1}>
          <Heading mb={4}>Contact Information</Heading>
          <VStack
            spacing={4}
            align="start"
            bg={bgColor}
            p={8}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            shadow="sm"
          >
            <Text fontSize="lg">
              Email: support@bettinganalytics.com
            </Text>
            <Text fontSize="lg">
              Hours: Monday - Friday, 9:00 AM - 5:00 PM GMT
            </Text>
            <Text fontSize="lg">
              Response Time: Within 24 hours
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
