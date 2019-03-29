import React from 'react';
import './SeasonDisplay.css';


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const weather = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${weather.iconName} icon`} />
            <h1>{ weather.text}</h1>
            <i className={`icon-right massive ${weather.iconName} icon`} />
        </div>
    );
};


const seasonConfig = {
    summer:{
        text: "Let's git the beach!",
        iconName: 'sun'
    },
    winter:{
        text: "Burr it is cold!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;