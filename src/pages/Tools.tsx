import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiExternalLink, FiTool, FiBarChart2, FiDatabase } from 'react-icons/fi';

const tools = [
  {
    title: "Outplayed Pro",
    description: "Revolutionary betting software with price boost tracker and accurate predictions for extra place and two-up outcomes.",
    features: ["Price Boost Tracker", "Extra Place Predictions", "Two-Up Outcomes"],
    link: "https://www.outplayed.com/pro",
    icon: FiTool
  },
  {
    title: "OddsMonkey",
    description: "Complete matched betting platform for beginners and experienced users alike.",
    features: ["Odds Matcher", "Profit Tracker", "Training Guides"],
    link: "https://www.oddsmonkey.com/affiliates/affiliate.php?id=66228",
    icon: FiBarChart2
  },
  {
    title: "Betting Calculator",
    description: "Advanced calculator for various betting types and strategies.",
    features: ["Multiple Bet Types", "Profit Calculator", "Risk Assessment"],
    link: "#",
    icon: FiDatabase
  }
];

export default function Tools() {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Betting Tools</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

interface ToolCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: any;
}

function ToolCard({ title, description, features, link, icon }: ToolCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'md',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      <VStack align="start" spacing={4}>
        <Icon as={icon} w={6} h={6} color="blue.500" />
        <Heading size="md">{title}</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          {description}
        </Text>
        <VStack align="start" spacing={2}>
          {features.map((feature, index) => (
            <HStack key={index}>
              <Icon as={FiExternalLink} w={4} h={4} color="green.500" />
              <Text>{feature}</Text>
            </HStack>
          ))}
        </VStack>
        <Link href={link} isExternal width="100%">
          <Button colorScheme="blue" width="100%">
            Try Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
