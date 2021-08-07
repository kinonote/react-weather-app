import { useState } from "react";
import axios from "axios";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
  const [city,setCity]=useState("");
  const getWeather=(e)=>{
    e.preventDefault();
    axios.get("http://api.weatherapi.com/v1/current.json?key=0ea0bc9c09b54d5984883022210608&q=London&aqi=no")
    .then(res=>console.log(res))
  }

  return (
    <div className="App">
      <Title /> 
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
