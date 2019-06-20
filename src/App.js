import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import TodoApp from './components/todo/TodoApp';
import Navbar from './components/navbar/navbar';
import Posts from './components/reduxapp/posts';


class App extends React.Component{
  
  render(){
    return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={TodoApp}  />
        <Route path="/reduxapp" component={Posts} />
        <Route path="/about"/>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
