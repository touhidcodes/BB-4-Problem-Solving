// Task-01: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const filterAndMapMales = (people: TPerson[]): string[] =>
  people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);

// Example:
const people: TPerson[] = [
  { name: "Arnold", age: 30, gender: "male" },
  { name: "Aria", age: 25, gender: "female" },
  { name: "Austin", age: 35, gender: "male" },
  { name: "Amy", age: 22, gender: "female" },
];

const maleNames = filterAndMapMales(people);
console.log(maleNames);
// Output: ["Arnold", "Austin"]

// Task-02: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

type TBook = {
  title: string;
  author: string;
  year: number;
};

const getBookTitles = (books: TBook[]): string[] =>
  books.map((book) => book.title);

// Example:
const books: TBook[] = [
  { title: "Programming with JS", author: "JavaScript", year: 2010 },
  { title: "Typescript Technocrat", author: "TypeScript", year: 2015 },
  { title: "Next Ninja", author: "Ninja Publishers", year: 2024 },
];

const titles = getBookTitles(books);
console.log(titles);
// Output: ["Programming with JS", "Typescript Technocrat", "Next Ninja"]

// Task-03: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const compose = (num: number): number => addFive(double(square(num)));

// Example:
const result = compose(3);
console.log(result);
// Output: 23 (3^2 = 9, 9*2 = 18, 18+5 = 23)

// Task-04: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

type TCar = {
  make: string;
  model: string;
  year: number;
};

const sortCarsByYear = (cars: TCar[]): TCar[] =>
  cars.sort((a, b) => a.year - b.year);

// Example:
const cars: TCar[] = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Tesla", model: "Model S", year: 2020 },
];

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
// Output: [
//  { make: 'Ford', model: 'Mustang', year: 2015 },
//  { make: 'Toyota', model: 'Corolla', year: 2018 },
//  { make: 'Tesla', model: 'Model S', year: 2020 }
// ]

// Task-05: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const modifyPersonAge = (
  people: TPerson[],
  name: string,
  newAge: number
): TPerson[] =>
  people.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );

// Example:
const updatedPeople = modifyPersonAge(people, "Arnold", 40);
console.log(updatedPeople);
// Output: [
//   { name: "Arnold", age: 40, gender: "male" },
//   { name: "Aria", age: 25, gender: "female" },
//   { name: "Austin", age: 35, gender: "male" },
//   { name: "Amy", age: 22, gender: "female" },
// ];

// 6.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const sumEvenNumbers = (numbers: number[]): number =>
  numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

// Example
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums));
// Output: 12

// 7.   Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const isLeapYear = (year: number): string =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Happy Leap Year!"
    : "Not a Leap Year";

// Example
const year = 2024;
console.log(isLeapYear(year));
// Output: Happy Leap Year!

// 8. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const getUniqueNumbers = (numbers: number[]): number[] =>
  numbers.reduce((acc: number[], num: number) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

// Example
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueNumbers(numbersWithDuplicates));
// Output: [1, 2, 3, 4, 5]

// 09. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const findMaxValue = (numbers: number[]): number => Math.max(...numbers);

// Example
const numArray = [10, 25, 7, 42, 18];
console.log(findMaxValue(numArray)); // Output: 42

// 10.Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
