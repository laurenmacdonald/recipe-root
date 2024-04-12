import { TextField, IconButton, Spinner, Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useSuggestionContext } from '../contexts/SuggestionContext.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { apiLoading, setApiLoading, parseRecipe } = useSuggestionContext();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const encodedQuery = encodeURIComponent(searchQuery);
  const apiUrl = `https://zylalabs.com/api/2697/recipe+generator+api/2803/get+recipes?user_content=${encodedQuery}`;
  var settings = {
    url: apiUrl,
    method: 'GET',
    headers: {
      Authorization: 'Bearer 3452|EbzkZR5Th125jzGHhmn0AcVhEWyjkLz3Z0Ln6MFD',
      'Content-Type': 'application/json',
    },
  };

  async function apiRequest() {
    setApiLoading(true);
    try {
      const response = await fetch(settings.url, {
        method: settings.method,
        headers: settings.headers,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      parseRecipe(data);
      navigate('/suggested-recipe');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setApiLoading(false);
    }
  }

  return (
    <Box maxWidth="300px">
      <TextField.Root
        id="searchBar"
        placeholder="Generate a suggestion"
        onChange={handleInputChange}
        size="3"
        variant="soft"
        color="jade"
        radius="full"
      >
        <TextField.Slot>
          <IconButton size="3" variant="ghost" onClick={apiRequest}>
            <MagnifyingGlassIcon height="16" width="16" />
          </IconButton>
          {apiLoading && <Spinner size="3" />}
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
}
