import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import DetailsPage from './pages/DetailsPage';
// import FavouritePage from './pages/FavouritePage';
import SearchPage from './pages/SearchPage';
export default function App() {
  return (
   <>
   <Router>
   <Switch>
     <Route path="/" exact component={SearchPage} />
     <Route path="/superhero/:id" exact component={DetailsPage} />
     {/* <Route path="/favourites" exact component={FavouritePage} /> */}
   </Switch>
   </Router>
   </>
  )
}

