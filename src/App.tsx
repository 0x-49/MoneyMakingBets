import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Strategies from './pages/Strategies';
import Tools from './pages/Tools';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navigation />
          <Container maxW="container.xl" flex="1" py={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
