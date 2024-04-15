import {
  Box,
  Card,
  Inset,
  Heading,
  Flex,
  Badge,
  AspectRatio,
  Grid,
} from '@radix-ui/themes';
import '../css/recipeList.scss';
import { Link } from 'react-router-dom';
import TagBadge from './TagBadge.jsx';
import CategoryBadge from './CategoryBadge.jsx';

export default function RecipeCard({ data, imgURLS }) {
  return (
    <>
      {data.map((recipe, i) => (
        <Box key={i}>
          <Link
            className="recipeCardLink"
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
          >
            <Card variant="surface" my="4" className="recipeCard">
              <Grid columns="2" rows="1" className="statusBadgeFlex">
                <Box>
                  {recipe.WantToTry ? (
                    <Badge
                      size="1"
                      radius="full"
                      variant="solid"
                      color="cyan"
                      className="statusBadge"
                    >
                      Want to Try
                    </Badge>
                  ) : null}
                </Box>
                <Box>
                  {recipe.Favorite === true ? (
                    <Badge
                      size="1"
                      radius="full"
                      variant="solid"
                      color="crimson"
                      className={
                        recipe.Favorite === true && recipe.WantToTry === true
                          ? 'secondStatusBadge'
                          : 'statusBadge'
                      }
                    >
                      Favorite
                    </Badge>
                  ) : null}
                </Box>
              </Grid>
              <Inset clip="padding-box" side="top" pb="current">
                <AspectRatio ratio={16 / 12}>
                  <img
                    src={imgURLS[i]}
                    alt={recipe.RecipeName}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'var(--gray-5)',
                    }}
                  />
                </AspectRatio>
              </Inset>
              <Heading as="h5" size="4">
                {recipe.RecipeName}
              </Heading>
              <Flex gap="2" wrap="wrap">
                <CategoryBadge recipe={recipe} size="1" radius="full" />
                <TagBadge recipe={recipe} size="1" radius="full" />
              </Flex>
            </Card>
          </Link>
        </Box>
      ))}
    </>
  );
}
