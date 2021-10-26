import './App.css';
import HomePage from './pages/HomePage.js';
import RestaurantPage from './pages/RestaurantPage.js';
import CustomerPage from './pages/CustomerPage.js';
import DriverPage from './pages/DriverPage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>

            <Route path="/" exact>
                <HomePage/>
            </Route>

            <Route path="/restaurants" exact>
                <RestaurantPage/>
            </Route>

            <Route path="/customers" exact>
                <CustomerPage/>
            </Route>

            <Route path="/drivers" exact>
                <DriverPage/>
            </Route>

        </Router>
    </div>
  );
}

export default App;
