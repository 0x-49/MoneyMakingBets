import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Stats() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Betting Performance Stats</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        <StatBox
          label="Monthly Profit"
          number="£1,200"
          helpText="23% increase"
          type="increase"
        />
        <StatBox
          label="Success Rate"
          number="87%"
          helpText="12% increase"
          type="increase"
        />
        <StatBox
          label="Active Users"
          number="2,500+"
          helpText="30% increase"
          type="increase"
        />
        <StatBox
          label="Average Return"
          number="£500"
          helpText="Per month"
        />
      </SimpleGrid>
    </Container>
  );
}

interface StatBoxProps {
  label: string;
  number: string;
  helpText: string;
  type?: 'increase' | 'decrease';
}

function StatBox({ label, number, helpText, type }: StatBoxProps) {
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
    >
      <Stat>
        <StatLabel fontSize="lg">{label}</StatLabel>
        <StatNumber fontSize="3xl" fontWeight="bold">
          {number}
        </StatNumber>
        <StatHelpText>
          {type && <StatArrow type={type} />}
          {helpText}
        </StatHelpText>
      </Stat>
    </Box>
  );
}
