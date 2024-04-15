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
  Section,
  Button,
} from '@radix-ui/themes';
import '../css/recipeDetails.scss';
import FavoriteSwitch from './FavoriteSwitch.jsx';
import WantToTrySwitch from './WantToTrySwitch.jsx';
import ListCheck from './InstructionsCheck.jsx';

const RecipeDetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const { selectedRecipe, selectRecipeById } = useRecipeContext();

  useEffect(() => {
    // Load the selected recipe when the component mounts
    selectRecipeById(id);
  }, [id]);
  console.log('useeffect', selectedRecipe);

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
      <Section>
        <Container px={{ xs: '3', md: '5', lg: '9' }}>
          <Grid columns={{ initial: '1', md: '2' }} gap="2">
            <Container align="start" p="8">
              <div></div>
              <Heading as="h1" size="9" className="recipeName">
                {selectedRecipe.RecipeName}
              </Heading>
              <Flex gap="2" pt={{ initial: '8', sm: '5' }} wrap="wrap">
                <CategoryBadge
                  recipe={selectedRecipe}
                  size="3"
                  radius="large"
                />
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
            </Container>
            <Container className="Container" align="start" p="8">
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
              <ListCheck listString={selectedRecipe.Ingredients} />
            </Container>
            <Container className="Container" align="start" p="8">
              <Heading as="h2" size="4">
                Instructions
              </Heading>
              <Separator my="3" size="4" className="separator" />
              <ListCheck listString={selectedRecipe.Instructions} />
            </Container>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default RecipeDetailPage;
