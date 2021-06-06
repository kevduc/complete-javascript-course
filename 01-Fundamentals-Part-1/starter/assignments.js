// Values and Variables
console.log(`LECTURE: Values and Variables`);

const country = 'France';
const continent = 'Europe';
let population = 10e6;

console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);

// Data Types
console.log(`LECTURE: Data Types`);

const isIsland = false;
let language;

console.log(`Type of isIsland:\t${typeof isIsland}`);
console.log(`Type of population:\t${typeof population}`);
console.log(`Type of country:\t${typeof country}`);
console.log(`Type of language:\t${typeof language}`);

// let, const and var
console.log(`LECTURE: let, const and var`);

language = 'french';

// Basic Operators
console.log(`LECTURE: Basic Operators`);

console.log(`1. Half population: ${population / 2}`);
console.log(`2. One person is born: ${++population}`);

const populationFinland = 6e6;
const hasMorePeopleThanFinland = population > populationFinland;
console.log(
  `3. ${country} has more people than Finland? ${hasMorePeopleThanFinland} (${population} ${
    hasMorePeopleThanFinland ? '>' : '<'
  } ${populationFinland})`
);

const averagePopulation = 33e6;
const hasMorePeopleThanAverage = population > averagePopulation;
console.log(
  `4. ${country} has more people than the average country? ${hasMorePeopleThanAverage} (${population} ${
    hasMorePeopleThanAverage ? '>' : '<'
  } ${averagePopulation})`
);

const description = `${country} is in ${continent}, and its ${
  population >= 1e6
    ? `(population/1e6).toFixed(1) million`
    : population >= 1e3
    ? `(population/1e3).toFixed(1) thousand`
    : population
} people speak ${language}`;
console.log(`5. ${description}`);

// Strings and Template Literals
console.log(`LECTURE: Strings and Template Literals`);

console.log(`${description}`);
