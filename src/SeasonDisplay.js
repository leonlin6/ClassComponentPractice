import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
   Summer: {   
      text : "Let's hit the beach",
      iconName : 'sun'
   },
   Winter: {
      text : "Burr, it is chilly",
      iconName : 'snowflake'
   }

};

const getSeason = (lat, month) => {
   if(month < 3 || month > 8){
      return lat > 0 ? 'Winter' : 'Summer';
   }else{
      return lat < 0 ? 'Summer' : 'Winter';
   }
}


const SeasonDisplay = (props) => {
   const season = getSeason(props.lat, (new Date().getMonth()));
   // const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
   // const icon = season === 'Winter' ? 'snowflake' : 'sun';
   const {text , iconName} = seasonConfig[season];
console.log("text=" , text);
console.log("iconName=" , iconName);
console.log("seasonConfig=" , seasonConfig[season]);

 return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
         <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
   </div>
 );
}


export default SeasonDisplay;