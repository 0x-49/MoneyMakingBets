import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  useColorModeValue,
  Text,
  VStack,
  Tag,
  HStack,
} from '@chakra-ui/react';
import VideoPlayer from './VideoPlayer';
import { videos } from '../data/videos';

interface Video {
  software: string;
  title: string;
  youtubeUrl: string;
  description: string;
  affiliateLink: string;
  videoNumber: number;
}

function getVideoIdFromUrl(url: string): string {
  const regex = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

export default function VideoGallery() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const getColorScheme = (software: string) => {
    switch(software.toLowerCase()) {
      case 'outplayed':
        return 'green';
      case 'oddsjam':
        return 'blue';
      case 'oddsmonkey':
        return 'purple';
      default:
        return 'gray';
    }
  };

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
      {videos.map((video, index) => (
        <Box
          key={index}
          bg={bgColor}
          borderRadius="lg"
          overflow="hidden"
          border="1px"
          borderColor={borderColor}
        >
          <VideoPlayer
            videoId={getVideoIdFromUrl(video.youtubeUrl)}
            title={video.title}
          />
          <VStack p={4} align="stretch" spacing={4}>
            <HStack>
              <Tag colorScheme={getColorScheme(video.software)} size="md">
                {video.software}
              </Tag>
              <Tag colorScheme="gray" size="md">Video #{video.videoNumber}</Tag>
            </HStack>
            <Heading as="h3" size="md">
              {video.title}
            </Heading>
            <Text color={textColor}>
              {video.description}
            </Text>
            <Button
              as="a"
              href={video.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme={getColorScheme(video.software)}
              width="100%"
            >
              Try {video.software} Now
            </Button>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
