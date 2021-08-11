import { useState } from "react";
import axios from "axios";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
  const [city,setCity]=useState("");
  const [results,setResults]=useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });
  const getWeather=(e)=>{
    e.preventDefault();
    axios.get(`http://api.weatherapi.com/v1/current.json?key=0ea0bc9c09b54d5984883022210608&q=${city}&aqi=no`)
    .then(res=>{
      setResults({
        country:res.data.location.country,
        cityName:res.data.location.name,
        temperature:res.data.current.temp_c,
        conditionText:res.data.current.condition.text,
        icon:res.data.current.condition.icon
      })
      setCity("");
    })
    .catch(err=>alert("都市名を入力するところです。都市名は英語でお願いします。ページをリロードして、もう一度試してください。"))
  }

  return (
    <div className="wrapper">
      <div className="App">
        <Title /> 
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
