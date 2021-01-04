import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {


    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>
                        I am the best in the world
                    </h4>
                    <p>9009 agree with this</p>
                </div>
            </div>
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>
                        Corona vaccine is going to distribute among the people around the globe
                    </h4>
                    <p>Source Tribune.com</p>
                </div>
            </div>
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>
                        Elon musk earn billions in the global pandemic
                    </h4>
                    <p>More than the bill gates career earning</p>
                </div>
            </div>
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets__articleRight">
                    <h4>
                        Premiere league is back behind the closed doors
                    </h4>
                    <p>France football declare PSG as the Ligue1 champion </p>
                </div>
            </div>
        </div>
    )
}

export default Widgets
