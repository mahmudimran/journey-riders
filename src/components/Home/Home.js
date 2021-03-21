import React from 'react';
import fakeDataRiders from '../../data/data.json'
import { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import background from '../../images/Bg.png'

const Home = () => {
    const [riders, setRiders] = useState([])
    useEffect(()=>{
      setRiders(fakeDataRiders)
    })
    return (
        <div style= {{ backgroundImage: `url(${background})` }} className="header" >
        {
            riders.map(rider=><Rider rider={rider}></Rider>)
        }
        </div>
    );
};

export default Home;