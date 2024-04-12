import { useEffect, useMemo } from 'react';
import {
  Container,
  Heading,
  Flex,
  Dialog,
  Button,
  Popover,
  Text,
} from '@radix-ui/themes';
import '../css/recipeList.scss';
import AddRecipeForm from './AddRecipeForm.jsx';
import FilterContent from './FilterContent.jsx';
import RecipeCard from './RecipeCard.jsx';
import { useRecipeContext } from '../contexts/RecipeContext.jsx';
import { useParams } from 'react-router-dom';

export default function RecipeList() {
  const { recipeData, loading, loadRecipeItems, filterTags, filterCategory } =
    useRecipeContext();

  useEffect(() => {
    loadRecipeItems();
  }, []);
  const { want, favorite } = useParams();

  const tagsToMatch = filterTags;
  const categoryToMatch = filterCategory;

  function filterRecipes(
    tagsToMatch,
    categoryToMatch,
    favoriteParams,
    wantToTryParams
  ) {
    return recipeData.filter((recipe) => {
      const matchesTags =
        tagsToMatch.length === 0 ||
        recipe.Tags.some((tag) => tagsToMatch.includes(tag));
      const matchesCategory =
        categoryToMatch === '' || recipe.Category === categoryToMatch;
      const favorites =
        favoriteParams === 'favorite' ? recipe.Favorite === true : true;
      const wantToTryRecipes =
        wantToTryParams === 'want' ? recipe.WantToTry === true : true;
      return matchesTags && matchesCategory && favorites && wantToTryRecipes;
    });
  }

  let filteredData = useMemo(
    () => filterRecipes(tagsToMatch, categoryToMatch, favorite, want),
    [tagsToMatch, categoryToMatch, favorite, want, recipeData]
  );

  const imgURLS = filteredData.map(
    (recipe) =>
      `http://127.0.0.1:8090/api/files/recipe/${recipe.id}/${recipe.Image}`
  );

  function refreshPage() {
    window.location.reload(false);
  }

  const listRecipeItems = (
    <Flex className="recipeListFlex" gap="5" wrap="wrap">
      {filteredData && filteredData.length ? (
        <RecipeCard data={filteredData} imgURLS={imgURLS} />
      ) : (
        <Text>There are no recipes that match the filters you provided!</Text>
      )}
    </Flex>
  );

  return (
    <Container className="recipeContainer">
      <Flex className="recipeList" direction="column" py="7" gap="3">
        <Flex direction="row" justify="between">
          <Heading as="h1" size="6" p="9" className="recipeTitle">
            Your Recipes
          </Heading>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button mr="8">Add Recipe</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Heading as="h1" size="5" className="formTitle">
                Add a New Recipe
              </Heading>
              <AddRecipeForm />
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" onClick={refreshPage}>
                    Close
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
        <Container>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline" size="2" radius="full">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
                    fill="currentColor"
                    //fill-rule="evenodd"
                    //clip-rule="evenodd"
                  ></path>
                </svg>
                Filters
              </Button>
            </Popover.Trigger>
            <Popover.Content maxWidth="auto">
              <FilterContent />
            </Popover.Content>
          </Popover.Root>
        </Container>
        {loading ? <Heading as="h6">Loading...</Heading> : listRecipeItems}
      </Flex>
    </Container>
  );
}
