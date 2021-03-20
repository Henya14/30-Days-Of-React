import React from 'react';
import ReactDOM from 'react-dom';

const countriesList = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
];

const Country = ({country: {name, city}}) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
};

const CountryList = ({countries}) => {
  const countriesList = countries.map(country => <Country key={country.name} country={country}/>);
  return <div>{countriesList}</div>
};

const isPrime = (number) => {
  for (let i = 2; i <= number/2; i++) {
      if(number % i === 0) {
        return false;
      }
  }

  return true;
}

const isOdd = (number) => (number % 2) === 1;

const NumberSquare = ({number}) => {

  const color = isPrime(number)? '#c23232' : (isOdd(number)? '#ffd900': '#21d13c');
  console.log('\n');
  return (
    <div
    style={
      {
        background: color,
        width: 'calc(25% - 2px)',
        margin: '1px',
        textAlign:'center',
      }
    }>
      <p style={
        {
          margin:'auto',
          padding:'40px',
        }
      }>{number}</p>
    </div>
  );

}

const NumberList = ({numbers}) => {
  return (
    <div
    style={{
      width:'70%',
      display:'flex',
      justifyContent:'flex-start',
      flexWrap:'wrap',
    }}>
    {numbers.map(number => <NumberSquare key={number} number={number}/>)}
    </div>);
}
const numberList = [];

for(let i = 1; i <= 20; i++){
  numberList.push(i);
}

export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const worldPopulation = tenHighestPopulation[0].population;

const PopEntry = ({entry: {country, population}}) => {
    const barWidth = `${(population / worldPopulation) * 100}%`;
    console.log(barWidth);
      return (
      <div style={
        {
          width: '70%',
          display:'flex',
          justifyContent:'flex-start',
          flexWrap:'wrap',
        }
      }>
        <div style={
          {
            margin: 'auto',
            width:'10%',
          }
        }>{country}</div>

        <div style={{
           margin: 'auto',
           padding:'auto',
          width:'80%',
        }}
        >
          <div style={{
            margin:'10px',
            background: '#ffbf00',
            width: `calc(${barWidth} - 22px)`,
            padding:'10px',
            paddingRight:'1px',
            paddingLeft:'1px',
            borderRadius: '5px',
          }}></div>
        </div>

        <div style={
            {
              margin: 'auto',
              width:'10%',
            }
          }>{population}</div>

      </div>)
}

const PopList = ({populationList}) => {

 return ( <div
 style={{
   textAlign:'center',
 }}>
    <h1>30 Days of React</h1>
    <h2>World Population</h2>
    <small>Ten most populated countries</small>
    <div style={{
      display:'flex',
      justifyContent:'center',
      flexWrap:'wrap',
    }}>
    {populationList.map(pop => <PopEntry entry={pop}/>)}
    </div>
  </div>);

} 

const App = () => {

  return (
    <div>
  <div style={{
    display:'flex',
    justifyContent:'center',
  }}>
    <NumberList numbers={numberList}/>
    
  </div>
  <PopList populationList={tenHighestPopulation}/>
  <div>
    <CountryList countries={countriesList}/>
  </div>
  </div>);
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);