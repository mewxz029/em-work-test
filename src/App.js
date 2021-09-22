import { Route, Switch } from 'react-router';
import './App.css';
import Create from './pages/CreatePost';
import Edit from './pages/EditPost';
import Home from './pages/Home';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/edit/:id" component={Edit}/>
			<Route path="/create" component={Create}/>
		</Switch>
	);
}

export default App;
