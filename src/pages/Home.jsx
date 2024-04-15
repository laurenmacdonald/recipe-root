import {
  Heading,
  Box,
  Text,
  Section,
  Container,
  Em,
  Grid,
  AspectRatio,
  Flex,
  Button,
} from '@radix-ui/themes';
import '../css/home.scss';
import { useState, useEffect, useContext } from 'react';
import RadishLogo from '../assets/radishFullLogoCol.png';
import BackgroundImage from '../assets/background.png';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Box className="simpleMainContent">
        <div className="simpleOverlay">
          <Section>
            <Grid px="9" columns={{ initial: '1', md: '2' }} gap="2">
              <Container
                size="2"
                className="Container"
                align="center"
                p={{ xs: '1', sm: '4', lg: '9' }}
              >
                <Box align="center">
                  <img src={RadishLogo} className="radishLogo" />
                  <Heading as="h1" size="7" className="landingHeading">
                    <Em>Organize </Em>your favorite recipes and{' '}
                    <Em>discover</Em> new favorites with the power of AI.
                  </Heading>
                  <Button
                    radius="full"
                    color="jade"
                    variant="classic"
                    size="4"
                    m="3"
                    className="signUpButton"
                  >
                    <NavLink className="signUpLink" to="/signup">
                      Sign Up
                    </NavLink>
                  </Button>
                </Box>
              </Container>
              <Container
                className="imageContainer"
                align="center"
                p={{ xs: '1', sm: '4' }}
              >
                <Box align="center">
                  <AspectRatio ratio={1 / 1}>
                    <img
                      className="homeImage"
                      src="https://images.unsplash.com/photo-1601740982034-56bc80e986ee?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
              </Container>
            </Grid>
          </Section>
        </div>
      </Box>
    </div>
  );
}
