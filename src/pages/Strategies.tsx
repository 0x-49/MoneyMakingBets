import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FiTrendingUp, FiDollarSign, FiShield } from 'react-icons/fi';

const strategies = [
  {
    title: "Outplayed Pro Strategy",
    description: "Boost your betting profits by £500 to £1,000 a month with accurate predictions for extra place and two-up outcomes.",
    profit: "£1,200/month",
    difficulty: "Intermediate",
    risk: "Low",
    icon: FiTrendingUp
  },
  {
    title: "OddsMonkey Matched Betting",
    description: "Turn £8 into £315 in just 30 days using proven matched betting techniques. Perfect for beginners!",
    profit: "£315/month",
    difficulty: "Beginner",
    risk: "Very Low",
    icon: FiDollarSign
  },
  {
    title: "Quick Profit Strategy",
    description: "Make £23 in minutes with no risk using our complete beginner's guide to matched betting.",
    profit: "£23+/session",
    difficulty: "Beginner",
    risk: "Minimal",
    icon: FiShield
  }
];

export default function Strategies() {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Betting Strategies</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

interface StrategyCardProps {
  title: string;
  description: string;
  profit: string;
  difficulty: string;
  risk: string;
  icon: any;
}

function StrategyCard({ title, description, profit, difficulty, risk, icon }: StrategyCardProps) {
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
        <Icon as={icon} w={6} h={6} color="green.500" />
        <Heading size="md">{title}</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          {description}
        </Text>
        <HStack spacing={2}>
          <Badge colorScheme="green">Profit: {profit}</Badge>
          <Badge colorScheme="blue">Level: {difficulty}</Badge>
          <Badge colorScheme="purple">Risk: {risk}</Badge>
        </HStack>
      </VStack>
    </Box>
  );
}
