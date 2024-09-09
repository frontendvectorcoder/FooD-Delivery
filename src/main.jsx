import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { ContentApi } from './Components/Pages/Dark/ContentApi.jsx';

createRoot(document.getElementById('root')).render(
  <ContentApi>
    <App />
  </ContentApi>
)
