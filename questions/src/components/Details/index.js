import React, { useRef } from 'react';
import {useRouteMatch, useLocation} from 'react-router-dom';
import Question1 from '../Question1';
import Question2 from '../Question2';
import Question3 from '../Question3';
import Question4 from '../Question4';
import Question5 from '../Question5';
import "./index.css";

const Details = () => {

    const match = useRouteMatch();
    const location = useLocation();

    const path = location.pathname.split("/");

    const getQueston =  () => {
        const id = path.length ? path[1] : 0;
        switch(parseInt(id)){
            case 1: return <Question1 />
            case 2: return <Question2 />
            case 3: return <Question3 />
            case 4: return <Question4 />
            case 5: return <Question5 />
            default:
        }
    }

    return (
        <div className="details">
           {getQueston()}
        </div>
    )
}

export default Details
