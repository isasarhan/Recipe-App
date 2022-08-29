import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pages.css'

const Recipe = () => {
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("Instruction")
  let params = useParams()

  const getDetails = async (name)=>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const recipe = await data.json()
    setDetails(recipe)
  }
  useEffect(()=>{
    getDetails(params.name)
  }, [params.name])

  return (
    <div className='details'>
      <div>
        <h2>{details.title}</h2>
        <img src={details.img}/>
      </div>
      <div className='info'>
        <button onClick={()=>{setActiveTab("Instruction")}} className={`button ${activeTab==="Instruction"?'active':''} `}>Instruction</button>
        <button onClick={()=>{setActiveTab("Ingrediants")}} className={`button ${activeTab==="Ingrediants "?'active':''} `}>Ingrediants</button>
      </div>
      
      {activeTab === "Instruction" ?
      <div>
      <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
    </div> :

      <ul>
        {details.extemdedIngredients.map((ingredient)=>(
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    }
    </div>
  )
}

export default Recipe
