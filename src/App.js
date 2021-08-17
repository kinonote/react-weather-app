import { useState } from "react";
import axios from "axios";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from "./components/Loading";
import './App.css';

function App() {
  const [loading,setLoading]=useState("false");
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
    setLoading(true);
    axios.get(`https://api.weatherapi.com/v1/current.json?key=0ea0bc9c09b54d5984883022210608&q=${city}&aqi=no`)
    .then(res=>{
      setResults({
        country:res.data.location.country,
        cityName:res.data.location.name,
        temperature:res.data.current.temp_c,
        conditionText:res.data.current.condition.text,
        icon:res.data.current.condition.icon
      })
      setCity("");
      setLoading(false);
    })
    .catch(err=>alert("英語で都市名を入力しよう！"))
  }

  return (
    <div className="wrapper">
      <div className="App container">
        <Title /> 
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading />:<Results results={results} />}
      </div>
    </div>
  );
}

export default App;
