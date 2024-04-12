import { useState, useEffect } from 'react';
import { Heading, Flex, Grid, Separator, Box, Button } from '@radix-ui/themes';
import '../css/recipeform.scss';
import { useRecipeContext } from '../contexts/RecipeContext';

export default function FilterContent() {
  const {
    loadCategories,
    loadTags,
    tagList,
    categoryList,
    setFilterTags,
    setFilterCategory,
    selectedTags,
    setSelectedTags,
    selectedCategory,
    setSelectedCategory,
  } = useRecipeContext();

  // Handler for when the filter criteria changes
  const handleFilterChange = (value, type) => {
    if (type === 'tag') {
      const updatedTags = [...selectedTags]; // Create a copy of selectedTags array
      const tagIndex = updatedTags.indexOf(value);

      if (tagIndex === -1) {
        // Tag is not in selectedTags, add it
        updatedTags.push(value);
      } else {
        // Tag is already in selectedTags, remove it
        updatedTags.splice(tagIndex, 1);
      }

      setSelectedTags(updatedTags);
      setFilterTags(updatedTags);
    } else if (type === 'category') {
      setSelectedCategory(value);
      setFilterCategory(value);
    }
  };

  function clearFilters() {
    setSelectedTags([]);
    setSelectedCategory('');
    setFilterTags([]);
    setFilterCategory('');
  }
  useEffect(() => {
    loadTags();
    loadCategories();
  }, []);

  return (
    <Grid>
      <Flex width="auto">
        <Flex direction="column">
          <Heading as="h6" size="3">
            Tags
          </Heading>
          <Grid className="checkbox-group" columns="2">
            {tagList.map((tag) => (
              <label key={tag.id} className="checkbox-label">
                <input
                  id={tag.id}
                  type="checkbox"
                  value={tag.id}
                  placeholder={tag.id}
                  onChange={() => handleFilterChange(tag.id, 'tag')}
                  checked={selectedTags.includes(tag.id)}
                />
                {tag.TagName}
              </label>
            ))}
          </Grid>
        </Flex>
        <Box>
          <Separator orientation="vertical" size="4" />
        </Box>
        <Flex direction="column" mx="4">
          <Heading as="h6" size="3">
            Categories
          </Heading>
          <Grid columns="1" className="radio-group">
            <label htmlFor="allCategory">
              <input
                type="radio"
                id="allCategory"
                className="category"
                name="category"
                value=""
                onChange={() => handleFilterChange('', 'category')}
                checked={selectedCategory === ''}
              />
              All
            </label>
            {categoryList.map((category) => (
              <label key={category.id} htmlFor={category.id}>
                <input
                  type="radio"
                  id={category.id}
                  className="category"
                  name="category"
                  value={category.id}
                  onChange={() => handleFilterChange(category.id, 'category')}
                  checked={selectedCategory === category.id}
                />
                {category.CategoryName}
              </label>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Box height="auto">
        <Button
          size="1"
          color="gray"
          variant="surface"
          radius="full"
          onClick={clearFilters}
        >
          Clear all filters
        </Button>
      </Box>
    </Grid>
  );
}
