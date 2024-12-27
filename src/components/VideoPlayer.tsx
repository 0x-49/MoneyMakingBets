import {
  Box,
  AspectRatio,
  useColorModeValue,
} from '@chakra-ui/react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export default function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
        style={{ borderRadius: '8px' }}
      />
    </AspectRatio>
  );
}
