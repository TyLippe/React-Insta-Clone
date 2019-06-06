import React from 'react';
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenicator from "./Authentication/Authentication";
import Login from './components/Login/Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
  }
}

const ComponentFromWithAuthenticate = withAuthenicator(PostsPage)(Login);

export default App;
