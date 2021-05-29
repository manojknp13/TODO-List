import { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Details from './components/Details';
import Questions from './components/Questions';

const App = () => {

  const questions = [
    {
      id: 1,
      title: 'Question 1',
      desc: `Define an array of numbers (use any random numbers). Write a program to print
      only the even numbers of the array. Do not use any library functions, need to
      do via for loops only`,
    }, {
      id: 2,
      title: 'Question 2',
      desc: `Find the maximum consecutive 1's in an array of 0's and 1's.<br/>
      Example:<br/>
      a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]<br/>
      b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]`
    }, {
      id: 3,
      title: 'Question 3',
      desc: `Suppose you have an array of 101 integers. This array is already sorted and
      all numbers in this array are consecutive. Each number only occurs once in the
      array except one number which occurs twice. Write a js code to find the
      repeated number.<br/>
      e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);`
    }, {
      id: 4,
      title: 'Question 4',
      desc: `Let’s see we an api url
      https://my-json-server.typicode.com/typicode/demo/posts<br/>
      Write a sample code to call this rest api and display the result.`
    }, , {
      id: 5,
      title: 'Question 5',
      desc: `Assume there is a object of this format</br>
      <pre><code>var obj = {
      “id” : 4, “name” : “abc”,
      “id” : 10, “name” : “ab2”,
      “id” : 5, “name” : “abc3”,
      “id” : 6, “name” : “abc5”
      }</code></pre><br/>
      It can be a dictionary or java object, as per your language of choice. But its
      key/value pair dictionary simply.
      Write a code to sort the object by id
      I.e final output should have objected sort by id’s`
    }
  ]

  return (
    <div className="App">
      <Route path="/" exact>
        <Questions questions={questions} />
      </Route>
      <Route path="/:id" exact>
        <Details questions={questions} />
      </Route>
    </div>
  );
}

export default App;
