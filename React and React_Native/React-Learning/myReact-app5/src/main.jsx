import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Details from './Details.jsx';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="container mt-5 text-danger">
    <h4>Something went wrong:</h4>
    <pre>{error.message}</pre>
    <button className="btn btn-primary mt-3" onClick={resetErrorBoundary}>
      Try Again
    </button>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: '/Details',
    element: <Details />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
