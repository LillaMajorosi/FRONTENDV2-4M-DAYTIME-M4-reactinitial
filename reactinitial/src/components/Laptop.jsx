import React, { useState } from 'react'
import Button from '@mui/material/Button';


const Laptop = ({name, brand, weight}) => {
    const [more, setMore] = useState(false)


  return (
    <div>
        <div>Name: {name}</div>
        {more && <div>Brand: {brand}, weight {weight}</div>}
        <Button variant="contained" onClick={() => setMore(!more)}>{!more ? <p>Show more</p> : <p>Show less</p>}</Button>
    </div>
  )
}

export default Laptop