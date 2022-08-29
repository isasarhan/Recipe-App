import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './pages.css'

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()


    const getCuisine = async (name) => {
        const check=localStorage.getItem(name)
        if(check){
            setCuisine(JSON.parse(check))
        }
        else{
          const api = await fetch(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
          );
          const recipes = await api.json()
          setCuisine(recipes.results)
          localStorage.setItem(name, JSON.stringify(recipes.results))

      }
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])

  return (
    <div className='grid'>
      {cuisine.map((cuisine) =>(
        <Link to={"/recipe/" + cuisine.id}>
        <div className='card' key={cuisine.title}>
            <img src={cuisine.image} alt={cuisine.title}/>
            <h4>{cuisine.title}</h4>
        </div></Link>
      ))}
    </div>
  )
}

export default Cuisine
