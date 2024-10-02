import { BrowserRouter } from 'react-router-dom';
import './style/_global.scss';
import { AppRouter } from './route/router';
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
