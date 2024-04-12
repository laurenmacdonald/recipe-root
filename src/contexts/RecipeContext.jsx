import React, { createContext, useState, useContext } from 'react';
import pb from '../util/pocketbase.js';

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]); // full recipe data set (matches userId)
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // returns 1 recipe record (for RecipeDetails)
  const [categoryList, setCategoryList] = useState([]); // list of categories from database
  const [tagList, setTagList] = useState([]); // list of tags from database
  const [filterTags, setFilterTags] = useState([]); // tags from FilterContent
  const [filterCategory, setFilterCategory] = useState(''); // category from FilterContent
  const [selectedTags, setSelectedTags] = useState([]); // selected tags for filter
  const [selectedCategory, setSelectedCategory] = useState(''); // selected category for filter

  // Get all recipes from database associated with userID, sorted by most recently created.
  const loadRecipeItems = async () => {
    try {
      const userID = pb.authStore.model.id;
      setLoading(true);
      const response = await pb.collection('Recipe').getFullList(30, {
        sort: '-created',
        filter: `user = "${userID}"`,
        expand: 'Category, Tags',
      });
      setRecipeData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all categories from database
  const loadCategories = async () => {
    try {
      const categoryResponse = await pb.collection('Categories').getFullList();
      setLoading(true);
      setCategoryList(categoryResponse);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  // Get all tags from database
  const loadTags = async () => {
    try {
      const tagResponse = await pb.collection('Tags').getFullList();
      setLoading(true);
      setTagList(tagResponse);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Get one recipe from full recipe data set for RecipeDetails page
  const selectRecipeById = (id) => {
    const recipe = recipeData.find((recipe) => recipe.id === id);
    setSelectedRecipe(recipe);
  };

  // Update the favorite boolean
  const updateFavorite = async (id, data) => {
    try {
      await pb.collection('Recipe').update(id, data);
    } catch (error) {
      console.log(error);
    }
    // Once the update is successful, update the selectedRecipe state
    setSelectedRecipe((prevState) => ({
      ...prevState,
      Favorite: data.Favorite,
    }));
  };
  // Update the want to try boolean
  const updateWantToTry = async (id, data) => {
    try {
      await pb.collection('Recipe').update(id, data);
    } catch (error) {
      console.log(error);
    }
    // Once the update is successful, update the selectedRecipe state
    setSelectedRecipe((prevState) => ({
      ...prevState,
      WantToTry: data.WantToTry,
    }));
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeData,
        loading,
        selectedRecipe,
        selectRecipeById,
        loadRecipeItems,
        loadCategories,
        loadTags,
        tagList,
        categoryList,
        filterCategory,
        filterTags,
        setFilterTags,
        setFilterCategory,
        updateFavorite,
        updateWantToTry,
        selectedTags,
        setSelectedTags,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
