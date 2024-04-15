import React from 'react';
import FavoritesList from '../components/FavoritesList';
import VerticalNav from '../components/VerticalNav';
import { Flex } from '@radix-ui/themes';
export default function Favorites() {
  return (
    <>
      <Flex direction="row" className="recipeBookFlex" width="auto">
        <VerticalNav />
        <FavoritesList />
      </Flex>
    </>
  );
}
