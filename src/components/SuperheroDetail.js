import React from 'react'


const SuperheroDetail = ({individualData}) => {
   console.log(individualData)

  
    return (
        <>
         <div className="search-result">
         <div className="left">
             <img src={individualData && individualData.image && individualData.image.url} alt="SuperHero Pic" />
         </div>
         <div className="right">
         <h1>{individualData && individualData.name}</h1>
      <span style={{ color:'gray', marginBottom: 5 }}>{ individualData && individualData.biography && individualData.biography.fullname}</span>
      <div className="stats">
        <div>Strength: {individualData && individualData.powerstats && individualData.powerstats.strength}</div>
        <div>Speed: {individualData && individualData.powerstats && individualData.powerstats.speed}</div>
        <div>Power: {individualData && individualData.powerstats && individualData.powerstats.power}</div> 
        <div>Intelligence: {individualData && individualData.powerstats && individualData.powerstats.intelligence}</div>
        <div>Durability: {individualData && individualData.powerstats && individualData.powerstats.durability}</div>
        <div>Combat: {individualData && individualData.powerstats && individualData.powerstats.combat}</div>
        <div>Occupation: {individualData && individualData.work && individualData.work.occupation}</div>
        
        </div>
        </div>
        </div>
       
        </>
    )
}

export default SuperheroDetail






