import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Privacy() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Privacy Policy</Heading>
          <Text color={textColor}>
            Last updated: December 27, 2024
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>1. Information We Collect</Heading>
          <Text color={textColor}>
            We collect information that you provide directly to us, including when you create an account,
            make a purchase, or contact us for support. This may include your name, email address,
            and betting preferences.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>2. How We Use Your Information</Heading>
          <Text color={textColor}>
            We use the information we collect to provide and improve our services, process your
            transactions, send you updates and marketing communications (with your consent),
            and ensure the security of your account.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>3. Information Sharing</Heading>
          <Text color={textColor}>
            We do not sell your personal information. We may share your information with trusted
            service providers who assist us in operating our website, conducting our business,
            or serving our users.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>4. Data Security</Heading>
          <Text color={textColor}>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>5. Your Rights</Heading>
          <Text color={textColor}>
            You have the right to access, correct, or delete your personal information. You can also
            object to processing and request data portability. Contact us to exercise these rights.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>6. Contact Us</Heading>
          <Text color={textColor}>
            If you have any questions about this Privacy Policy, please contact us at:
            privacy@bettinganalytics.com
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
