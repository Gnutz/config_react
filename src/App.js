import React, {Component} from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {Layout} from './layout/Layout'
import {NavigationBar} from './layout/Navigationbar'
import {NotFound} from './pages/NotFound'
import {ConfigurationList} from './configuration/ConfigurationList'
import {ConfigurationForm} from './configuration/ConfigurationForm'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />¨
              <Route path="/configuration" component={ConfigurationList}/>
              <Route path="/configuration/create" component= {ConfigurationForm} />
              <Route component= {NotFound} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );  
  }
}

export default App;
