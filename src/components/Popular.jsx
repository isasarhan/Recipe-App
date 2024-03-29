import React, { useEffect, useState } from 'react'
import './components.css'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

const Popular = () => {
 
    const [popular, setPopular] = useState([])

    useEffect(()=>{
        getPopular()
    }, [])

    const getPopular = async () =>{
        const check=localStorage.getItem("popular")

        if(check){
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
        
    }
    return (
        <div>
        <div className='wrapper'>
            <h3>Popular Picks</h3>
            <Splide 
                options={{
                    perPage:4,
                    pagination:false,
                    drag:'free',
                    gap:"5rem"
                }}>
                {popular.map((recipe)=>
                    (<Link to={"/recipe/" + recipe.id}>
                        <SplideSlide key={recipe.id}>
                            <div  className='card'>
                                <p >{recipe.title}</p>
                                <img className='card-img' src={recipe.image} alt={recipe.title}/>
                                <div className='gradient'></div>
                            </div>
                        </SplideSlide>
                    </Link>
                    )
                )}
            </Splide>
    </div>
    </div>
  )
}


export default Popular
