import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminForm from './components/AdminForm';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Memorial Information Service</h1>
                </header>
                <main>
                    <Switch>
                        <Route path="/admin" component={AdminForm} />
                        {/* Add more routes as needed */}
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;