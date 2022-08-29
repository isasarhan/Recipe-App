import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './pages.css'

const Searched = () => {
  
  const [result, setResult]  = useState([])
  let params = useParams()
  
  const getSearchResults = async (search) =>{
    const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
    )
    const data = await api.json()
    setResult(data.results)
  }
  useEffect(()=>{
    getSearchResults(params.search)
  }, [params.search])
  return (
    <div className='grid'>
      {result.map((result) =>(
        <Link to={result.is}>
        <div className='card' key={result.title}>
            <img src={result.image} alt={result.title}/>
            <h4>{result.title}</h4>
        </div></Link>
      ))}
    </div>
  )
}

export default Searched
