import React, { useState } from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
const SearchPage = () => {

    const [searchText,setSearchText]=useState('');
    const [superheroData,setSuperheroData]=useState([]);

    const SearchSuperheros=async()=>{
            const response=await fetch(`https://superheroapi.com/api.php/4321136474668229/search/${searchText}`);
            const data=await response.json();
            setSuperheroData(data.results);
    } 

   const handleChange=(e)=>{
       const searchTerm=e.target.value;
       setSearchText(searchTerm);
       if(searchTerm.length===0)
       {
           setSuperheroData([]);
       }
       if(searchTerm.length>3)
       {
           SearchSuperheros();
       }
   }
    return (
        <>
        
         <Header />
         <div>

         
         <SearchBar searchText={searchText} handleChange={handleChange}/>
         <SearchResults superheroData={superheroData} />

         </div>
         
        </>
    )
}
export default SearchPage;
