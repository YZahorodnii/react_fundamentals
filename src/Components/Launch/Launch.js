import React from 'react';

const Launch = ({launch}) => {
    let launchYear = 2020;
    return (
        <div className="main">
            {launch.launch_year != 2020 &&
            <div className="internal">
                mission name: {launch.mission_name} <br/>
                launch year: {launch.launch_year} <br/>
                <img src={launch.links.mission_patch_small} alt="patch_small"/>
            </div>
            }
        </div>
    )
};

export default Launch;