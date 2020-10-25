import React from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
            <Switch>
              <Route exact path="/" component={Home} />¨
              <Route path="/configuration" component={ConfigurationList}/>
              <Route component= {NotFound} />
            </Switch>
    </Router>
    </div>
  );
}

export default App;
