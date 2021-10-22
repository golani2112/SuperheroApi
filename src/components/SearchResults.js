import React from 'react'
import { Link } from 'react-router-dom'


const SearchResultItem = ({data}) => {
//    const handleClick=(e)=>{
//        e.preventDefault()
//        localStorage.setItem(data.id,data.name)
      
//    }
  return (
      <>
     <div className="search-result">
         <div className="left">
             <img src={data.image.url} alt="SuperHero Pic" />
         </div>
         <div className="right">
         <h1>{data.name}</h1>
      <span style={{ color:'gray', marginBottom: 5 }}>{data.biography['full-name']}</span>
      <div className="stats">
        <div>strength: {data.powerstats.strength}</div>
        <div>speed: {data.powerstats.speed}</div>
        <div>power: {data.powerstats.power}</div> 
       
       
        <div>
            <Link to={`/superhero/${data.id}`} target="_blank">Show details</Link>
         
            {/* <button style={{background:'red', color:'whitesmoke', marginLeft:'15px', cursor:'pointer'}}
             onClick={handleClick}   
           
            >Add to Favourites</button> */}
        </div>
        <div>
            
        </div>
         </div>
     </div>
     </div>
     
      </>
  )
}



const SearchResults = ({superheroData=[]}) => {

    return (
      <>
      <div>
      
       {
           superheroData.map((superhero,index)=>
            <SearchResultItem data={superhero} key={index}/> 
            )
       }
      
      </div>
      </>
    )
}

export default SearchResults
