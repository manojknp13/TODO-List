import React, { useEffect, useState  } from 'react';

const Question4 = () => {
   
    const [state, setstate] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(res => res.json()).then(res=> {
            setstate(res);
            // console.log(res);
        }).catch(err  => {
            // console.log(err);
        })
    }, [])   
    return(
        <ul>
            {
                state.map(post => <li key={post.id}>
                    {post.title}
                </li>)
            }
        </ul>
    );
}

export default Question4;