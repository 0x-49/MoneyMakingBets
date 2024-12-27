import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Disclaimer() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Disclaimer</Heading>
          <Text color={textColor}>
            Last updated: December 27, 2024
          </Text>
        </Box>

        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          The information provided on this website is for educational purposes only.
          Betting carries financial risk and may not be suitable for everyone.
        </Alert>

        <Box>
          <Heading size="md" mb={4}>1. No Financial Advice</Heading>
          <Text color={textColor}>
            The content on this website is for informational purposes only and should not be
            considered as financial advice. We recommend consulting with a qualified financial
            advisor before making any investment decisions.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>2. Risk Warning</Heading>
          <Text color={textColor}>
            Betting involves substantial risk of loss and is not suitable for every investor.
            The performance results of any trading or betting strategies discussed on this site
            are not indicative of future results.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>3. Accuracy of Information</Heading>
          <Text color={textColor}>
            While we strive to keep the information up to date and correct, we make no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability or availability of the information contained on this website.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>4. Affiliate Disclosure</Heading>
          <Text color={textColor}>
            This website contains affiliate links. If you click on an affiliate link and make a
            purchase, we will receive a commission. These commissions help support the website
            and allow us to continue providing valuable content.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>5. Responsible Gambling</Heading>
          <Text color={textColor}>
            We promote responsible gambling and strongly encourage users to be aware of their
            local gambling laws and regulations. Never bet with money you cannot afford to lose.
            If you have a gambling problem, please seek help.
          </Text>
        </Box>

        <Alert status="info" borderRadius="md">
          <AlertIcon />
          If you have any questions about this disclaimer, please contact us at legal@bettinganalytics.com
        </Alert>
      </VStack>
    </Container>
  );
}
