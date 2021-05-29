import React, { useEffect, useState } from 'react';

const Question3 = () => {

    const [state, setstate] = useState([0, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10]);
    const [totalNumber, setTotalNumber] = useState({});

    useEffect(() => {
        const obj = {};
        for (let index = 0; index < state.length; index++) {
            const element = state[index];
            obj[element] = (obj[element] && obj[element] >= 1) ? obj[element] + 1 : 1;
        }
        setTotalNumber(obj);
    }, [])

    return (
        <div className="">
            <h4>Number of list</h4>
            <ul className="numbers">
                {state.map((number, index) => <li key={index}>{number}</li>)}
            </ul>

            <div className="block">
                <h4>Repeated number.</h4>
                <ul className="numbers">
                    {Object.keys(totalNumber).map((number, index) => {
                        if (totalNumber[number] > 1) {
                            return <li key={index}>{`${number} --> ${totalNumber[number]}`}</li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Question3
