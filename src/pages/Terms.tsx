import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Terms() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Terms of Service</Heading>
          <Text color={textColor}>
            Last updated: December 27, 2024
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>1. Acceptance of Terms</Heading>
          <Text color={textColor}>
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>2. Use License</Heading>
          <Text color={textColor} mb={4}>
            Permission is granted to temporarily access the materials on our website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer
            of title, and under this license you may not:
          </Text>
          <UnorderedList color={textColor} pl={4} spacing={2}>
            <ListItem>Modify or copy the materials</ListItem>
            <ListItem>Use the materials for any commercial purpose</ListItem>
            <ListItem>Transfer the materials to another person</ListItem>
            <ListItem>Attempt to decompile or reverse engineer any software</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading size="md" mb={4}>3. Disclaimer</Heading>
          <Text color={textColor}>
            The materials on our website are provided on an 'as is' basis. We make no warranties,
            expressed or implied, and hereby disclaim and negate all other warranties including,
            without limitation, implied warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or other violation of rights.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>4. Limitations</Heading>
          <Text color={textColor}>
            In no event shall we or our suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use our materials.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>5. Revisions</Heading>
          <Text color={textColor}>
            We may revise these terms of service at any time without notice. By using this website,
            you are agreeing to be bound by the current version of these terms of service.
          </Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>6. Governing Law</Heading>
          <Text color={textColor}>
            These terms and conditions are governed by and construed in accordance with the laws
            of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the
            courts in that location.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
