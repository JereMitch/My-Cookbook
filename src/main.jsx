import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './pages/errorBoundary/ErrorBoundary.jsx'
import Profiles from './pages/profiles/profiles.jsx'
import Profile from './pages/profiles/Profile.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorBoundary />
},
{
  path: "/profiles",
  element: <Profiles />,
  children: [
    {
      path: "/profiles/:profileId",
      element: <Profile />
    },
  ],
},
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
