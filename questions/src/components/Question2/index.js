import React, { useEffect, useState } from 'react';

const Question2 = () => {

    const [state, setstate] = useState("001100001001110".split(''));
    const [totalNumber, setTotalNumber] = useState(0);

    const getMaxLength = (arr) => {
        let count = 0;
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0)
                count = 0;
            else {
                count++;
                result = Math.max(result, count);
            }
        }
        setTotalNumber(result);
    }

    useEffect(() => {
        
        getMaxLength(state)
    }, [])

    return (
        <div className="">
            <h4>Number of list</h4>
            <ul className="numbers">
                {state.map(number => <li>{number}</li>) }
            </ul>

            <div className="block">
                <h4>Maximum consecutive 1's</h4>
                <ul className="numbers">
                    {totalNumber}
                </ul>
            </div>
        </div>
    )
}

export default Question2
