import React, { createContext, useState, useContext } from 'react';

const SuggestionContext = createContext();

export const useSuggestionContext = () => useContext(SuggestionContext);

export const SuggestionProvider = ({ children }) => {
  const [suggestionData, setSuggestionData] = useState([]); // data returned from API request
  const [apiLoading, setApiLoading] = useState(false);
  // Strings to hold suggested fields
  const [suggestionRecipeName, setSuggestionRecipeName] = useState('');
  const [suggestionIngredients, setSuggestionIngredients] = useState('');
  const [suggestionInstructions, setSuggestionInstructions] = useState('');

  function parseRecipe(recipeArray) {
    const recipeString = recipeArray.toString();
    let recipeName = '';
    let ingredients = '';
    let instructions = '';
    const recipeParts = recipeString.split('Ingredients:');

    // Ensure that the recipe has at least two parts
    if (recipeParts.length >= 2) {
      const recipeNameWithRecipeTitle = recipeParts[0].trim();

      // Extract recipe name from the first part
      recipeName = recipeNameWithRecipeTitle
        .substring(0, recipeNameWithRecipeTitle.indexOf('Recipe:'))
        .trim();

      // need to split this on instructions.
      const ingredientsAndInstructions = recipeParts[1].trim();

      // array - ingredients at 0 and instructions at 1
      const ingrInstParts = ingredientsAndInstructions.split('Instructions:');
      if (ingrInstParts.length >= 2) {
        ingredients = ingrInstParts[0].trim();

        instructions = ingrInstParts[1].trim();
      } else {
        console.error(
          'Invalid recipe string. Unable to split at "Instructions:".'
        );
      }
    } else {
      console.error(
        'Invalid recipe string. Unable to split at "Ingredients:".'
      );
    }

    setSuggestionRecipeName(recipeName);
    setSuggestionIngredients(ingredients);
    setSuggestionInstructions(instructions);
  }
  return (
    <SuggestionContext.Provider
      value={{
        suggestionData,
        setSuggestionData,
        apiLoading,
        setApiLoading,
        suggestionRecipeName,
        suggestionIngredients,
        suggestionInstructions,
        parseRecipe,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
};
