import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Heading, Grid } from '@radix-ui/themes';
import pb from '../util/pocketbase';
import '../css/recipeform.scss';
import { useRecipeContext } from '../contexts/RecipeContext';
import { useSuggestionContext } from '../contexts/SuggestionContext';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm(formLocation) {
  const navigate = useNavigate();
  const { loadCategories, loadTags, tagList, categoryList } =
    useRecipeContext();
  const {
    suggestionRecipeName,
    suggestionIngredients,
    suggestionInstructions,
    setSuggestionRecipeName,
    setSuggestionIngredients,
    setSuggestionInstructions,
  } = useSuggestionContext();
  const fileInputRef = useRef(null);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const response = {
      user: pb.authStore.model.id,
      RecipeName: data.recipeName,
      Ingredients: data.ingredients,
      Instructions: data.instructions,
      WantToTry: data.wantToTry,
      Favorite: data.favorite,
      Category: data.category,
      Tags: tagList.filter((tag) => data[tag.id]).map((tag) => data[tag.id]),
      Image: fileInputRef.current.files[0],
    };

    await pb.collection('Recipe').create(response);

    reset();
    setSuggestionRecipeName('');
    setSuggestionIngredients('');
    setSuggestionInstructions('');
    if (formLocation === 'recipeGenerator') {
      navigate('/recipe-book');
    }
  };

  useEffect(() => {
    loadTags();
    loadCategories();
  }, []);

  return (
    <>
      <Grid className="flexContainer" justify="center" direction="row">
        <form className="newRecipeForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="checkbox-group">
            <p className="entryLabel">What's the status</p>
            <label className="checkbox-label">
              <input
                name="wantToTry"
                type="checkbox"
                {...register('wantToTry')}
              />
              Want to Try
            </label>
            <label className="checkbox-label">
              <input
                name="favorite"
                type="checkbox"
                {...register('favorite')}
              />
              Favorite
            </label>
          </div>
          <label>
            <p className="entryLabel">Recipe Name</p>
            <input
              type="text"
              name="recipeName"
              defaultValue={suggestionRecipeName}
              {...register('recipeName', { required: true })}
            />
          </label>
          <label>
            <p className="entryLabel">Ingredients</p>
            <textarea
              name="ingredients"
              defaultValue={suggestionIngredients}
              {...register('ingredients', { required: true })}
            />
          </label>
          <label>
            <p className="entryLabel">Instructions</p>
            <textarea
              name="instructions"
              defaultValue={suggestionInstructions}
              {...register('instructions', { required: true })}
            />
          </label>
          {/* TAGS */}
          <p className="entryLabel">Tag</p>
          <Grid
            columns={{ xs: '1', sm: '2', md: '3' }}
            className="checkbox-group"
          >
            {tagList.map((tag) => (
              <label key={tag.id} className="checkbox-label">
                <input
                  id={tag.id}
                  type="checkbox"
                  value={tag.id}
                  placeholder={tag.id}
                  defaultChecked={false}
                  {...register(tag.id, {})}
                />
                {tag.TagName}
              </label>
            ))}
          </Grid>

          {/* CATEGORY */}
          <p className="entryLabel">Category</p>
          <select className="category" {...register('category')}>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.CategoryName}
              </option>
            ))}
          </select>
          {/* IMAGE */}
          <p className="entryLabel">Image</p>
          <input
            type="file"
            name="image"
            placeholder="Image"
            ref={fileInputRef}
            required
          />
          <button className="Button" type="submit" style={{ marginTop: 10 }}>
            Submit
          </button>
        </form>
      </Grid>
    </>
  );
}
