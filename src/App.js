import './App.css'
import React, {useState, useEffect} from "react";
import LoadingMask from './components/LoadingMask'

const App = () => {

  const [hotels, setHotels] = useState(false);

    useEffect(() => {

    fetch('api/hotels')
		.then(response => response.json())
		.then(data => setHotels(data));

    }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>

      
    </div>
  )
}

export default App
