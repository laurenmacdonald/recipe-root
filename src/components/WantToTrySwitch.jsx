import { Flex, Switch } from '@radix-ui/themes';
import { useRecipeContext } from '../contexts/RecipeContext.jsx';

const WantToTrySwitch = ({ id }) => {
  const { selectedRecipe, updateWantToTry } = useRecipeContext();
  const handleSwitchChange = () => {
    const updatedData = { WantToTry: !selectedRecipe.WantToTry };
    updateWantToTry(id, updatedData);
  };

  return (
    <Flex gap="2">
      <Switch
        size="1"
        radius="full"
        checked={selectedRecipe.WantToTry}
        onCheckedChange={() => handleSwitchChange()}
      />
      Want To Try
    </Flex>
  );
};

export default WantToTrySwitch;
