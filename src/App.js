import './App.css';
import { BrowserRouter, Switch, Route , HashRouter } from 'react-router-dom'
import Questions from './components/Questions';
import AddQuestion from './components/AddQuestion';
import Question from './components/Question';
import Home from './components/Home';

function App() {
  return (
    <div>
      <HashRouter basename={window.location.pathname === ""} >
        <Switch>
          <Route exact path="/questionApp" component={Home} />
          {/* <Route exact path = "/questions" component = {Questions} /> */}
          <Route exact path="/questionApp/questions/:type" component={Questions} />
          <Route path="/questionApp/questions/question/:id" component={Question} />
          <Route path="/questionApp/add-question" component={AddQuestion} />
        </Switch>
      </HashRouter>
    </div>

  );
}

export default App;
