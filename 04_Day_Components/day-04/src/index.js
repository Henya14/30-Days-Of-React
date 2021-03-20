// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
//import asabenehImage from './images/asabeneh.jpg'

// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo } from './math.js'

import * as everything from './math.js'
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
// JSX element, header


// JSX element, header


// JSX element, header
const Header = ({data: {
  welcome,
  title, 
  subtitle,
  author: { firstName, lastName},
  date,
},
}) => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>

        Instructor: {firstName} {lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)


const numOne = 3
const numTwo = 2

const Result = () =>  (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const PersonAge = ({author:{firstName, lastName}}) => (
  <p>
    {' '}
    {firstName} {lastName} is {age} years old
  </p>
)
// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

/*const user = (
  <div>
    <img  alt='asabeneh image' />
  </div>
)*/



const Button = () => (
  <button >Click me!!</button>
)
const Input = () => (
  <input type="text"/>
)
// JSX element, main
const Main =(props) => (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      <Result />
      <PersonAge author = {props.author} />
      <Input />
      <Button />

      <ColorBlock color = {hexaColor()}/>
    <ColorBlock color = {hexaColor()}/>
    <ColorBlock color = {hexaColor()}/>
    <ColorBlock color = {hexaColor()}/>
    <ColorBlock color = {hexaColor()}/>
    </div>
  </main>
)


const copyRight = 'Copyright 2021'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return '#' + color;
  
};

const ColorBlock = (props) => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '40px'}}>
  <div style={{
    margin: 'auto',
    padding: '10px',
    background: props.color, 
    textAlign: 'center',
    width: '80%'
  }}>
    <p>{props.color}</p>
  </div>
  </div>);
}
 // JSX element, app
const App = () =>{ 
  const author =  {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
  };
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: author,
    date: 'Oct 2, 2020'
  }
  return (
  <div className='app'>
    <Header data = {data}/>
    <Main author = {author}/>
    <Footer />
  </div>
)};

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
