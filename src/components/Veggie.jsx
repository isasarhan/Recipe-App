import React, { useEffect, useState } from 'react'
import './components.css'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'
const Veggie = () => {
 
    const [veggie, setVeggie] = useState([])

    useEffect(()=>{
      getVeggie()
    }, [])

    const getVeggie = async () =>{
        const check=localStorage.getItem("veggie")

        if(check){
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            );
            const data = await api.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
        
    }
    return (
        <div>
        <div className='wrapper'>
            <h3>Our Vegeratian Picks</h3>
            <Splide 
                options={{
                    perPage:3,
                    pagination:false,
                    drag:'free',
                    gap:"5rem"
                }}>
                {veggie.map((recipe)=>
                    (<Link to={"/recipe/" + recipe.id}>
                        <SplideSlide key={recipe.id}>
                            <div  className='card'>
                                <p >{recipe.title}</p>
                                <img className='card-img' src={recipe.image} alt={recipe.title}/>
                                <div className='gradient'></div>
                            </div>
                        </SplideSlide></Link>
                    )
                )}
            </Splide>
    </div>
    </div>
  )
}


export default Veggie
