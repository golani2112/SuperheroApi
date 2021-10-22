import React, { useState,useEffect} from 'react'
import SuperheroDetail from '../components/SuperheroDetail';
import {useParams} from 'react-router-dom';


const DetailsPage = () => {
    const params=useParams();
    
    const [individualData,setIndividualData]=useState([]);
    const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
     
     useEffect(()=>{
       const fetchSuperhero=async()=>{
         setLoading(true);
         setError(false);
         try{
         const response=await fetch(`https://superheroapi.com/api.php/4321136474668229/${params.id}`)
        const data=await response.json();
         
        setIndividualData(data)
         }catch(error){
           setError(true);
         }
         setLoading(false);
       };
       
       
       fetchSuperhero();
       
     },[params.id])
      
    
    return (
      <>
      {loading && (
        <div style={{ color: `green` }}>
          loading  detail 
        </div>
      )}
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
      { individualData &&
      <SuperheroDetail individualData={individualData} />
      }
      </>
    )
}

export default DetailsPage
