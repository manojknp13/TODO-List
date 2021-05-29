import React, { useState } from 'react'

const Question5 = () => {

    const obj = [
        {"id" : 4, "name" : "abc"},
        {"id" : 10, "name" : "ab2"},
        {"id" : 5, "name" : "abc3"},
        {"id" : 6, "name" : "abc5"}
    ]

    const [state, setstate] = useState(obj.sort((a, b) => {
        return a.id - b.id;
    }));


    return (
        <ul>
            {
                state.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    )
}

export default Question5
