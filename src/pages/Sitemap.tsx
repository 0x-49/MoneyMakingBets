import {
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Box,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiHome, FiBarChart2, FiTool, FiBook, FiHelpCircle, FiFileText } from 'react-icons/fi';

interface SitemapSection {
  title: string;
  icon: any;
  links: {
    name: string;
    path: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main",
    icon: FiHome,
    links: [
      { name: "Home", path: "/" },
      { name: "Stats", path: "/stats" },
      { name: "Tools", path: "/tools" },
    ]
  },
  {
    title: "Resources",
    icon: FiBarChart2,
    links: [
      { name: "Strategies", path: "/strategies" },
      { name: "Blog", path: "/blog" },
      { name: "FAQ", path: "/faq" },
    ]
  },
  {
    title: "Support",
    icon: FiHelpCircle,
    links: [
      { name: "Contact", path: "/contact" },
      { name: "About", path: "/about" },
      { name: "Help Center", path: "/help" },
    ]
  },
  {
    title: "Legal",
    icon: FiFileText,
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Disclaimer", path: "/disclaimer" },
    ]
  },
];

export default function Sitemap() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={8}>Sitemap</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {sitemapData.map((section, index) => (
          <Box
            key={index}
            bg={bgColor}
            p={6}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
          >
            <VStack align="start" spacing={4}>
              <Heading size="md" display="flex" alignItems="center">
                <Icon as={section.icon} mr={2} />
                {section.title}
              </Heading>
              <VStack align="start" spacing={2} width="100%">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    as={RouterLink}
                    to={link.path}
                    width="100%"
                    p={2}
                    borderRadius="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: hoverBgColor,
                    }}
                  >
                    <Text>{link.name}</Text>
                  </Link>
                ))}
              </VStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
