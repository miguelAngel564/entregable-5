import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({optionType, setOptionType, setPokeSearch}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => setListTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
  }

  return (
    <select value={optionType} onChange={handleChange}>
      <option value="All">All pokemons</option>
      {
        listTypes?.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType