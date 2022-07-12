import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Contact from './conponents/reactCommerce/contact/contact';
import Header from './conponents/reactCommerce/header/header';
import Ecommerce from './conponents/reactCommerce/homepage/home';
import { Categories } from './conponents/reactCommerce/shopPage/categories';
import Shoppage from './conponents/reactCommerce/shopPage/shop';
import {auth, createProfileDocument} from '../src/firebase/firebase.util.jsx';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { reficomActions } from './redux/RefiComm/reficomm';

export default function App() {

  const TopicDetail = (props) => {
    return (
      <div>
        <h1>Error 404</h1>
      </div>
    )
  }

  let unsubscribeFromAuth = null

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      
      unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createProfileDocument(userAuth)
        
        dispatch(reficomActions.setCurrentUser({
          id: userRef.id,
          ...userRef.data()
        }))

      }

      dispatch(reficomActions.setCurrentUser(userAuth))

    }) 
  }
    });

  return (
    <>
      <div className="App">
        <Header/>

        <Routes>
          <Route exact path="/" element={<Ecommerce/>}/>
          <Route exact path="/shop" element={<Shoppage/>}/>
          <Route exact path="/shop/:categories" element={<Categories/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="*" element={<TopicDetail/>}/>
        </Routes>
      </div>
    </>
  );
}





