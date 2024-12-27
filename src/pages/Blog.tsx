import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How I Made £315 in 30 Days with Matched Betting",
    excerpt: "Discover how a complete beginner turned £8 into £315 in just 30 days using matched betting, and learn the insider tips to replicate this success yourself.",
    date: "December 27, 2024",
    image: "/blog/matched-betting.jpg"
  },
  {
    title: "Outplayed Pro: The Ultimate Betting Tool Review",
    excerpt: "A comprehensive review of how Outplayed Pro's revolutionary software helped users make £1,200 in just one month.",
    date: "December 26, 2024",
    image: "/blog/outplayed-pro.jpg"
  }
];

export default function Blog() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Latest Betting Insights</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {blogPosts.map((post, index) => (
          <Box
            key={index}
            bg={bgColor}
            borderRadius="lg"
            overflow="hidden"
            border="1px"
            borderColor={borderColor}
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <Box height="200px" overflow="hidden">
              <Image
                src={post.image}
                alt={post.title}
                objectFit="cover"
                width="100%"
                height="100%"
                fallbackSrc="https://via.placeholder.com/400x200"
              />
            </Box>
            <VStack align="start" p={6} spacing={3}>
              <Text fontSize="sm" color={textColor}>
                {post.date}
              </Text>
              <Heading size="md">{post.title}</Heading>
              <Text color={textColor}>
                {post.excerpt}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
