import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FiltersProvider} from '../src/context/filter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
