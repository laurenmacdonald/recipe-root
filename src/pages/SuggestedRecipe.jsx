import React from 'react';
import RecipeList from '../components/RecipeList';
import VerticalNav from '../components/VerticalNav';
import {
  Container,
  Flex,
  Dialog,
  Button,
  Heading,
  Popover,
  Grid,
  Box,
  Text,
  Separator,
  Section,
  Skeleton,
} from '@radix-ui/themes';
import '../css/recipeGenerator.scss';
import AddRecipeForm from '../components/AddRecipeForm';
import SearchBar from '../components/SearchBar';
import { MagicWandIcon } from '@radix-ui/react-icons';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
export default function SuggestedRecipe() {
  return (
    <>
      <Grid
        className="gridContainer"
        p={{ xs: '2', lg: '8' }}
        columns={{ xs: '1', lg: '2' }}
      >
        <Box p="7">
          <Heading as="h1" size="9" className="heading" align="center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z"
                fill="currentColor"
                //fill-rule="evenodd"
                //clip-rule="evenodd"
              ></path>
            </svg>{' '}
            Recipe Generator
          </Heading>
          <Box align="center" p="3">
            <Text>
              Enter a recipe idea into the search bar and complete to recipe
              form! You can include dietary restrictions and specific
              ingredients to generate a personalized recipe.
            </Text>
          </Box>
          <Box align="center" pt="9">
            {' '}
            <SearchBar />
          </Box>
        </Box>
        <Box>
          <Container px="9">
            <Heading as="h2" size="5" className="formTitle">
              Fill out the rest of the details
            </Heading>
          </Container>
          <AddRecipeForm formLocation="recipeGenerator" />
        </Box>
      </Grid>
    </>
  );
}
