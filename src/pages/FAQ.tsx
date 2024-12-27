import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const faqs = [
  {
    question: "How much can I earn with matched betting?",
    answer: "Based on our user data and case studies, beginners typically earn £300-£500 in their first month. More experienced users report earnings of £1,000+ per month using tools like Outplayed Pro and OddsMonkey."
  },
  {
    question: "Is matched betting legal?",
    answer: "Yes, matched betting is completely legal. It's a mathematical approach to betting that takes advantage of bookmaker promotions. Many financial advisors and media outlets have covered this technique."
  },
  {
    question: "Do I need betting experience?",
    answer: "No prior betting experience is required. Our tools and guides are designed for complete beginners, with step-by-step instructions and video tutorials to help you get started."
  },
  {
    question: "What tools do I need to get started?",
    answer: "We recommend starting with either OddsMonkey or Outplayed Pro. These platforms provide all the necessary tools, calculators, and tutorials to begin your matched betting journey."
  },
  {
    question: "How much time do I need to dedicate?",
    answer: "Most users spend 15-30 minutes per day on matched betting. You can earn a significant income with just a few hours per week, making it perfect for those with busy schedules."
  }
];

export default function FAQ() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Frequently Asked Questions</Heading>
      <Text fontSize="lg" mb={8} color={textColor}>
        Find answers to common questions about betting strategies and tools.
      </Text>
      
      <Accordion allowMultiple>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            border="1px"
            borderColor={borderColor}
            bg={bgColor}
            mb={4}
            borderRadius="lg"
          >
            <h2>
              <AccordionButton py={4}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={textColor}>
                {faq.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
