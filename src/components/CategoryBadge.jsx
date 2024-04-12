import { Badge } from '@radix-ui/themes';

export default function CategoryBadge({ recipe, size, radius }) {
  return (
    <>
      <Badge
        variant="surface"
        color={getColorForCategory(recipe.expand.Category.CategoryName)}
        size={size}
        radius={radius}
      >
        {recipe.expand.Category.CategoryName}
      </Badge>
    </>
  );
}

function getColorForCategory(categoryName) {
  switch (categoryName.toLowerCase()) {
    case 'dessert':
      return 'violet';
    case 'drink':
      return 'cyan';
    case 'snack':
      return 'sky';
    case 'dinner':
      return 'crimson';
    case 'lunch':
      return 'amber';
    case 'breakfast':
      return 'yellow';
    default:
      return 'jade';
  }
}
