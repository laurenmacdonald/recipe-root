import React from 'react';
import RecipeList from '../components/RecipeList';
import VerticalNav from '../components/VerticalNav';
import { Flex } from '@radix-ui/themes';
import '../css/recipebook.scss';
export default function RecipeBook() {
  return (
    <>
      <Flex direction="row" className="recipeBookFlex" width="auto">
        <VerticalNav />
        <RecipeList />
      </Flex>
    </>
  );
}
