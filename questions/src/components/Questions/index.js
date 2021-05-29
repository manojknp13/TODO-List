import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Questions = ({ questions }) => {

    return (
        <div className="questions">
           <ul>
           {
                questions.map(question => <Question key={question.id} question={question}/>)
            }
           </ul>
        </div>
    )
}

export default Questions


const Question = ({question}) => {

    return(
        <li >
           <Link className="link" to={`/${question.id}`}>
            <div className="title">{question.title}</div>
            <div dangerouslySetInnerHTML={{__html:question.desc}} />
           </Link>
        </li>
    )
}