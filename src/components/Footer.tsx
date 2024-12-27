import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={8}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Company
            </Text>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/blog">Blog</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Resources
            </Text>
            <Link as={RouterLink} to="/guides">Guides</Link>
            <Link as={RouterLink} to="/strategies">Strategies</Link>
            <Link as={RouterLink} to="/tools">Tools</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Legal
            </Text>
            <Link as={RouterLink} to="/privacy">Privacy</Link>
            <Link as={RouterLink} to="/terms">Terms</Link>
            <Link as={RouterLink} to="/disclaimer">Disclaimer</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Follow Us
            </Text>
            <Link href={'#'} isExternal>YouTube</Link>
            <Link href={'#'} isExternal>Twitter</Link>
            <Link href={'#'} isExternal>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2024 Betting Analytics. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link as={RouterLink} to="/sitemap">Sitemap</Link>
            <Link as={RouterLink} to="/faq">FAQ</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
