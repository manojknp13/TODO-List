import React, { useEffect, useState } from 'react';

const Question1 = () => {

   const [state, setstate] = useState([1, 4, 59, 22, 10, 34, 19, 11, 3, 9, 18, 26]);
   const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        let numbersArr = [];
        for (let index = 0; index < state.length; index++) {
            const element = state[index];
            if(element % 2 === 0) {
                numbersArr.push(element);
            }
        }
        setFilteredItems(numbersArr);
    }, [])

    return (
        <div className="">
            <h4>Number of list</h4>
            <ul className="numbers">
                {state.map(number => <li>{number}</li>) }
            </ul>

            <div className="block">
                <h4>Even number of list</h4>
                <ul className="numbers">
                    {filteredItems.map(number => <li>{number}</li>) }
                </ul>
            </div>
        </div>
    )
}

export default Question1
