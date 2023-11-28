import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={browserRouter} />
);
