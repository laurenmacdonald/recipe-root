import { Heading, Flex, Grid, Separator, Box, Switch } from '@radix-ui/themes';
import { useRecipeContext } from '../contexts/RecipeContext.jsx';
const FavoriteSwitch = ({ id }) => {
  const { selectedRecipe, updateFavorite } = useRecipeContext();
  const handleSwitchChange = () => {
    const updatedFavoriteData = { Favorite: !selectedRecipe.Favorite }; // Toggle the Favorite field value
    updateFavorite(id, updatedFavoriteData); // Update Firestore document with the new Favorite value
  };

  return (
    <Flex gap="2">
      <Switch
        size="1"
        radius="full"
        checked={selectedRecipe.Favorite}
        onCheckedChange={() => handleSwitchChange()}
      />
      Favorite
    </Flex>
  );
};

export default FavoriteSwitch;
