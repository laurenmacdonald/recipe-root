import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { RecipeProvider } from './contexts/RecipeContext.jsx';
import { SuggestionProvider } from './contexts/SuggestionContext.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RecipeProvider>
          <SuggestionProvider>
            <Theme accentColor="tomato" grayColor="sand" radius="none">
              <App />
            </Theme>
          </SuggestionProvider>
        </RecipeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
