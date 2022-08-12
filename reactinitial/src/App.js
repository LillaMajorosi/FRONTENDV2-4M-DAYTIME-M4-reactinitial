import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [laptopData, setLaptopData] = useState([]);
  const [sort, setSort] = useState('desc')
  const [input, setInput] = useState('')


  
  useEffect(() => {
    fetch('https://demoapi.com/api/laptop')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setLoaded(true)
        setLaptopData(data)
    })
  },[]);


  const sortLaptop = () => {
    setLaptopData([...laptopData.sort((a, b) => sort === 'desc' ? b.weight - a.weight : a.weight - b.weight)])
    setSort(sort === 'desc' ? 'asc' : 'desc')

  }


  return (
    <div>
      <Button onClick={sortLaptop} variant="contained">Sort</Button>

      <input placeholder='Search' value={input} onChange={({target}) => {setInput(target.value)}}/>

      <h1>Laptops</h1>
      
      {!loaded && <LoadingMask />}

      {laptopData.map(({name, brand, weight}) => (name.toLowerCase().includes(input.toLowerCase()) && <Laptop key={weight} name={name} brand={brand} weight={weight}/>))}

    </div>
  )
}

export default App
