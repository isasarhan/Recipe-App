import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
const Search = () => {
  const [search, setSearch] = useState('')
  const  navigate = useNavigate()
  
  const submitHandler =(e)=>{
    e.preventDefault();
    navigate("/searched/"+search)
  }
  return (
    <form onSubmit={submitHandler} className="form">
        <FaSearch/>
        <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    </form>
  )
}

export default Search
