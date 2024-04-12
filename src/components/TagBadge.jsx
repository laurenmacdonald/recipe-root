import { Badge } from '@radix-ui/themes';

export default function TagBadge({ recipe, size, radius }) {
  return (
    <>
      {recipe.expand.Tags.map((tag, index) => (
        <Badge
          key={index}
          variant="soft"
          color={getColorForTag(tag.TagName)}
          size={size}
          radius={radius}
          highContrast
        >
          {tag.TagName}
        </Badge>
      ))}
    </>
  );
}

function getColorForTag(tagName) {
  switch (tagName.toLowerCase()) {
    case 'gluten-free':
      return 'blue';
    case 'thai':
      return 'indigo';
    case 'italian':
      return 'red';
    case 'indian':
      return 'orange';
    case 'sweet':
      return 'plum';
    case 'healthy':
      return 'teal';
    case 'vegetarian':
      return 'green';
    case 'vegan':
      return 'grass';
    case 'fish':
      return 'cyan';
    case 'korean':
      return 'violet';
    case 'rice, grains, pasta':
      return 'amber';
    case 'pie, pastry':
      return 'bronze';
    case 'baked goods':
      return 'gold';
    case 'bread':
      return 'yellow';
    case 'meat':
      return 'crimson';
    case 'vegetables':
      return 'jade';
    case 'fruit':
      return 'pink';
    case 'tofu':
      return 'lime';
    case 'legume':
      return 'brown';

    default:
      return 'jade';
  }
}
