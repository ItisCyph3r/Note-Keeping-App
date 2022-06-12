import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import Ecommerce from './conponents/reactCommerce/homepage/home';
import Shoppage from './conponents/reactCommerce/shopPage/shop';



const HomePage = (props) => {
  const navigate = useNavigate();
    return (
      <div>
        <h1>HomePage</h1>
        <button onClick={() => {navigate('/a')}}>hehe</button>
      </div>
    )
}

const TopicList = () => {
  const {userid} = useParams();
  return (
    <div>
      <h1>TopicList {userid}</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Error 404</h1>
    </div>
  )
}

const Contact = (props) => {
  return (
    <div>
      <h1>Child page</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Ecommerce/>}/>
            <Route exact path="/shop" element={<Shoppage/>}/>
            <Route exact path="/about/:userid" element={<TopicList/>}/>
            <Route exact path="*" element={<TopicDetail/>}/>
          </Routes>
        </div>


        
      </Router>
    )
  }
}

export default App;











// <ul>
//             <li>
//               <Link to="/"> Home </Link>
//             </li>
//             <li>
//               <Link to="/about"> About </Link>
//             </li>
//             <li>
//             <Link to="/contact"> Contact </Link>
//             </li>
//           </ul>