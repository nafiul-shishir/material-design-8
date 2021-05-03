import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './Component/Blog/Blog';
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ="/home">
          <Blog></Blog>
          </Route>
          <Route path="/post/:postId">
           
           <PostDetails></PostDetails>
         </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
