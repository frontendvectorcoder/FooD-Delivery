import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { ContentProvider } from './Components/Pages/Dark/ContentApi.jsx'; // Updated import

createRoot(document.getElementById('root')).render(
  <ContentProvider>
    <App />
  </ContentProvider>
);
