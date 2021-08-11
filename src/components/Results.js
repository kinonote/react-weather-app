  const Results=({results})=>{

  const {cityName,country,temperature,conditionText,icon}=results;
  return(
    <div>
      {cityName&&<div className="result-city">{cityName}</div>}
      {country&&<div className="result-country">{country}</div>}
      {temperature&&<div className="result-temp">{temperature}<span>℃</span></div>}
      {conditionText&&
        <div className="result-condition">
          <img src={icon} alt="icon"/>
          <span>{conditionText}</span>
        </div>}
    </div>
  );
};

export default Results;