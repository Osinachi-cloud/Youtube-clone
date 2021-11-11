// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage';
// import Test from './Test';
import Test3 from './Test3';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Test3/> */}
        
      <Header/>


        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app-page">
          
                <Sidebar/>
                <SearchPage/>
            </div>

          </Route>


          <Route path="/">
                <div className="app-page">
                <Sidebar/>
                <RecommendedVideos/>

                </div>
          </Route>
        </Switch>
      </Router>
     
      {/* <Sidebars/> */}
    </div>
  );
}

export default App;
