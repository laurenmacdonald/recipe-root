import { Section, Box, Heading, Text, Grid } from '@radix-ui/themes';
import Logo from '../assets/radishFullLogo.svg';
import '../css/footer.scss';
const Footer = () => {
  return (
    <Box className="footerBox" width="100vw" px="9">
      <Grid columns={{ xs: '1', md: '4' }}>
        <Box className="footerSection" p="9">
          <img
            src={Logo}
            style={{
              width: 180,
              margin: 20,
            }}
            alt="website logo"
          />
        </Box>
        <Box p="9">
          <Text m="2" p="2">
            Recipe Root, the web app for home cooks. Organize your favorite
            recipes and discover new recipes with the power of AI. Add recipes
            to our cookbook and find unlimited curated dishes.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
export default Footer;
