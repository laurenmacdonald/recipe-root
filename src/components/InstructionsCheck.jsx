import { Text, Checkbox, Box, Flex } from '@radix-ui/themes';
import { useState } from 'react';
export default function ListCheck({ listString }) {
  const listAsArray = listString.split('\n');
  const [completedItems, setCompletedItems] = useState(
    Array(listAsArray.length).fill(false)
  );

  const handleCheck = (index) => {
    const updatedCompletedItems = [...completedItems];
    updatedCompletedItems[index] = !updatedCompletedItems[index];
    setCompletedItems(updatedCompletedItems);
  };

  return (
    <>
      {listAsArray.map((item, i) => (
        <Box p="2" key={i}>
          <Text
            size="3"
            className="listFormat"
            style={{
              textDecoration: completedItems[i] ? 'line-through' : 'none',
            }}
          >
            <Flex gap="2">
              <Checkbox onCheckedChange={() => handleCheck(i)} variant="soft" />
              {item}
            </Flex>
          </Text>
        </Box>
      ))}
    </>
  );
}
