import React, {Component} from 'react';
import {
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
import {auth, createProfileDocument} from '../src/firebase/firebase.util.jsx';
import Counter from './conponents/counter/counter';
import Log from './conponents/reduxLogin/log';
import Sign from './conponents/reduxLogin/sign';


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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createProfileDocument(userAuth)
        // console.log(userRef)

        this.setState({
          currentUser: {
            id: userRef.id,
            ...userRef.data()
          }
        }, () => {console.log('.')})
      }
      this.setState({currentUser: userAuth})
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return ( 
      
        // <div className="App">
        //   {/* <Header/> */}
        //   <Routes>
        //     <Route exact path="/" element={<Ecommerce/>}/>
        //     <Route exact path="/shop" element={<Shoppage/>}/>
        //     <Route exact path="/shop/:categories" element={<Categories/>}/>
        //     <Route exact path="/contact" element={<Contact/>}/>
        //     <Route exact path="*" element={<TopicDetail/>}/>
        //   </Routes>
        // </div>
        <div className="App">
          <Sign/>
        </div>
        
        
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