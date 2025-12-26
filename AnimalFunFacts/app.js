import { animals } from './animals';
/*01*/
import React from 'react';
import { createRoot } from 'react-dom/client';
/*02*/
const container = document.getElementById('app');
/*03*/
const root = createRoot(container);
/*04*/
const title = '';
/*07*/
const background = <img class='background' alt='ocean' src='/images/ocean.jpg' />

/*11*/
function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random()*animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  /*12*/
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

/*09*/
const images = [];
for(const animal in animals) {
  const image = (
    <img
    onClick={displayFact}
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    />
  );
  images.push(image);
}

/*13*/
const showBackground = true;
/*05*//*08*//*10*/
const animalFacts = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact!' : title}
    </h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>{images}</div>
  </div>);
/*06*/
root.render(animalFacts);

/*14 done */
