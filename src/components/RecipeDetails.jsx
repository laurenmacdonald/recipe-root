import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext.jsx';
import TagBadge from './TagBadge.jsx';
import CategoryBadge from './CategoryBadge.jsx';
import {
  Grid,
  Container,
  Heading,
  AspectRatio,
  Flex,
  Text,
  Separator,
} from '@radix-ui/themes';
import '../css/recipeDetails.scss';
import FavoriteSwitch from './FavoriteSwitch.jsx';
import WantToTrySwitch from './WantToTrySwitch.jsx';

const RecipeDetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const { selectedRecipe, selectRecipeById } = useRecipeContext();

  useEffect(() => {
    // Load the selected recipe when the component mounts
    selectRecipeById(id);
  }, [id]);
  console.log(selectedRecipe);

  const imgURL = () => {
    if (!selectedRecipe) {
      return ''; // Return an empty string if selectedRecipe is not available
    }
    return `http://127.0.0.1:8090/api/files/recipe/${selectedRecipe.id}/${selectedRecipe.Image}`;
  };

  if (!selectedRecipe) {
    return <div>Error loading recipe.</div>;
  }
  return (
    <>
      <Grid px="9" columns={{ initial: '1', md: '2' }} gap="2">
        <Flex
          className="recipeNameContainer"
          px="8"
          pt={{ initial: '5', sm: '9' }}
          justify="center"
          direction="column"
        >
          <Heading as="h1" size="9" className="recipeName">
            {selectedRecipe.RecipeName}
          </Heading>
          <Flex gap="2" pt={{ initial: '8', sm: '5' }}>
            <CategoryBadge recipe={selectedRecipe} size="3" radius="large" />
            <TagBadge recipe={selectedRecipe} size="3" radius="large" />
          </Flex>
          <Flex direction="row" gap="5" mt="5">
            <Text as="label" size="2">
              <FavoriteSwitch id={selectedRecipe.id} />
            </Text>

            <Text as="label" size="2">
              <WantToTrySwitch id={selectedRecipe.id} />
            </Text>
          </Flex>
        </Flex>
        <Container className="Container" align="center" p="8">
          <AspectRatio ratio={3 / 2}>
            <img
              className="Image"
              src={imgURL()}
              alt={selectedRecipe.RecipeName}
            />
          </AspectRatio>
        </Container>
        <Container align="start" p="8">
          <div></div>
          <Heading as="h2" size="4">
            Ingredients
          </Heading>
          <Separator my="3" size="4" className="separator" />
          <div>
            <pre className="listFormat">{selectedRecipe.Ingredients}</pre>
          </div>
        </Container>
        <Container className="Container" align="start" p="8">
          <Heading as="h2" size="4">
            Instructions
          </Heading>
          <Separator my="3" size="4" className="separator" />
          <div>
            <pre className="listFormat">{selectedRecipe.Instructions}</pre>
          </div>
        </Container>
      </Grid>
    </>
  );
};

export default RecipeDetailPage;
