import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launches = () => {
    let [launches, setLaunches] = useState([]);
    useEffect( ()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allLaunches => setLaunches(allLaunches))
    }, [])
    return (
        <div>
            {
                launches.map(launch => <Launch launch={launch}/>)
            }
        </div>
    );
};

export default Launches;