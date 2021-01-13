import './assets/App.css';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import NotFound from './components/NotFound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ResetPassword from './components/user/ResetPassword';


function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Login />}/>
          <Route path="/user/join" exact render={() => <SignUp />}/>
          <Route path="/user/resetpassword" exact render={() => <ResetPassword />}/>
          <Route path="*" component={NotFound} />

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

