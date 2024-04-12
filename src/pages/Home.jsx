import {
  Flex,
  Heading,
  Card,
  Text,
  Button,
  Code,
  Grid,
  Box,
  Section,
  Container,
} from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

import RadishLogo from '../assets/radishFullLogoCol.png';
import '../css/home.scss';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Grid
      className="homeGrid"
      p={{ xs: '2', lg: '8' }}
      columns={{ xs: '1', lg: '2' }}
      height="100vh"
      display="inline-grid"
    >
      <Box>
        <img src={RadishLogo} alt="Radish Logo" className="radishLogo" />
      </Box>
      <Box align="center">
        <Heading as="h1" size={{ xs: '3', lg: '8' }} m={{ xs: '4', lg: '9' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Heading>
        <Button variant="classic" color="teal" size="4" radius="full">
          Sign Up
        </Button>
      </Box>
    </Grid>
  );
}
