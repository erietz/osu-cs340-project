import './App.css';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Route path="/" exact>
                <HomePage/>
            </Route>
        </Router>
    </div>
  );
}

export default App;
