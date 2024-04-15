import pb from '../util/pocketbase';
import { Container, Heading, Box, Text, Em } from '@radix-ui/themes';
import {
  HeartIcon,
  HeartFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  MagnifyingGlassIcon,
  MagicWandIcon,
  DrawingPinFilledIcon,
} from '@radix-ui/react-icons';
export default function NoRecipesDisplay() {
  return (
    <Container>
      <Box p="3">
        <Heading as="h2" size="6">
          Hello, {pb.authStore.model.name}. Looks like you haven't saved any
          recipes yet...
        </Heading>
      </Box>
      <Box p="3">
        <Text as="p">
          Add a recipe to your recipe book or use the <MagicWandIcon />{' '}
          <Em>recipe generator</Em> to discover your new favorite.
        </Text>
      </Box>
    </Container>
  );
}
