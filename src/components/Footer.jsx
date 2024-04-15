import {
  Section,
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Blockquote,
} from '@radix-ui/themes';
import Logo from '../assets/radishFullLogo.svg';
import '../css/footer.scss';
const Footer = () => {
  return (
    <Section className="footerSection">
      <Container>
        <Grid columns={{ xs: '1', sm: '2' }}>
          <Box align="center">
            <img
              src={Logo}
              style={{
                width: 180,
                margin: 20,
              }}
              alt="website logo"
            />
          </Box>
          <Box m="7">
            <Text as="span">
              Recipe Root, the web app for home cooks. Organize your favorite
              recipes and discover new recipes with the power of AI. Add recipes
              to our cookbook and find unlimited curated dishes.
            </Text>
            <Blockquote size="1">
              Made using React, Radix UI, Recipe Generator API from Zyla API
            </Blockquote>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
export default Footer;
