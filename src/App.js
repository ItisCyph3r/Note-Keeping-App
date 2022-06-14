import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import Contact from './conponents/reactCommerce/contact/contact';
import Header from './conponents/reactCommerce/header/header';
import Ecommerce from './conponents/reactCommerce/homepage/home';
import { Categories } from './conponents/reactCommerce/shopPage/categories';
import Shoppage from './conponents/reactCommerce/shopPage/shop';
import {auth} from '../src/firebase/firebase.util.jsx';


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



class App extends Component {

  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // console.log(user )
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return ( 
      <Router>
        <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route exact path="/" element={<Ecommerce/>}/>
            <Route exact path="/shop" element={<Shoppage/>}/>
            <Route exact path="/shop/:categories" element={<Categories/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
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