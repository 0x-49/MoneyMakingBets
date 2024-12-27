import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Image,
  List,
  ListItem,
  ListIcon,
  Icon,
} from '@chakra-ui/react';
import { FiCheckCircle, FiTrendingUp, FiShield, FiDollarSign } from 'react-icons/fi';
import VideoGallery from '../components/VideoGallery';

export default function Home() {
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={12}>
        {/* Hero Section */}
        <Box textAlign="center" py={10} px={6}>
          <Heading
            as="h1"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            mb={6}
          >
            Turn Betting Knowledge Into{' '}
            <Text as={'span'} color={'green.400'}>
              Guaranteed Profits
            </Text>
          </Heading>
          <Text color={textColor} fontSize="xl" maxW={'3xl'} mx="auto">
            Discover proven strategies, expert tools, and risk-free methods to maximize your betting profits. 
            Join thousands of successful bettors who are already making £500-£1,000+ monthly.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
            mt={8}
          >
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Start Making Money Today
            </Button>
            <Text fontSize={'sm'} color={textColor}>
              No gambling or sports knowledge required
            </Text>
          </Stack>
        </Box>

        {/* Benefits Section */}
        <Box py={8} width="100%">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Why Choose MoneyMakingBets?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={FiCheckCircle} w={10} h={10} color="green.400" mb={4} />
              <Heading as="h3" size="md" mb={2}>Risk-Free Methods</Heading>
              <Text color={textColor}>Proven strategies that guarantee profits without gambling risks</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={FiTrendingUp} w={10} h={10} color="green.400" mb={4} />
              <Heading as="h3" size="md" mb={2}>Expert Tools</Heading>
              <Text color={textColor}>Access professional betting software and analytics</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={FiShield} w={10} h={10} color="green.400" mb={4} />
              <Heading as="h3" size="md" mb={2}>100% Legal</Heading>
              <Text color={textColor}>All strategies are completely legal and tax-free in the UK</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={FiDollarSign} w={10} h={10} color="green.400" mb={4} />
              <Heading as="h3" size="md" mb={2}>Real Results</Heading>
              <Text color={textColor}>Our members make £500-£1,000+ monthly consistently</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Featured Strategies Section */}
        <Box py={8} width="100%">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Featured Betting Strategies
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box bg={bgColor} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={4}>Matched Betting</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Risk-free profits from bookmaker offers
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Perfect for beginners
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Make £500-£1000 monthly
                </ListItem>
              </List>
            </Box>
            <Box bg={bgColor} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
              <Heading as="h3" size="md" mb={4}>Arbitrage Betting</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Profit from bookmaker price differences
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Advanced software tools
                </ListItem>
                <ListItem>
                  <ListIcon as={FiCheckCircle} color="green.400" />
                  Scale to £2000+ monthly
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Video Gallery */}
        <Box py={8} width="100%">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Expert Betting Tutorials
          </Heading>
          <VideoGallery />
        </Box>

        {/* Call to Action */}
        <Box py={8} width="100%" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Start Making Money?
          </Heading>
          <Text color={textColor} fontSize="xl" mb={6}>
            Join thousands of successful bettors who are already profiting from our strategies
          </Text>
          <Button
            colorScheme={'green'}
            bg={'green.400'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            size="lg"
          >
            Get Started Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
