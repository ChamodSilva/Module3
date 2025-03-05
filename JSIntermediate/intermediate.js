console.log("\n" + "----Q1----");
// #region [Question 1]
function ucFirstLetters(str)
{
    let capitalisedString = "";
    const splitWords = str.split(" ") ;
    for(const word of splitWords)
    {
        if(word.length > 0)
        {
            capitalisedString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
        }
    }

    return capitalisedString.trimEnd();
}

//Testing with multiple different strings
console.log(ucFirstLetters("james clear"));
console.log(ucFirstLetters("john doe"));
console.log(ucFirstLetters("cat"));
console.log(ucFirstLetters("1"));
// #endregion

console.log("\n" + "----Q2----");
// #region [Question 2]
function truncate(str, max)
{
    let resultStr = "";
    if(typeof str === 'string')
    {
        if(str.length > max)
            {
                resultStr = str.slice(0, max).trimEnd() + "...";
            }
            else
            {
                resultStr = str;
            }
    }
    else
    {
        resultStr = "Please input a valid string";
    }
    return resultStr;
}

function newTruncate(str, max)
{
    return (typeof str === 'string') ? (str.length > max) ? str.slice(0, max).trimEnd() + "..." : str : "Please input a valid string";
}
//Original truncate function
console.log(truncate("This should truncate.", 10));
console.log(truncate("All good", 10));
console.log(truncate(999, 10));
//New truncate function
console.log("\n"+newTruncate("This should truncate.", 10));
console.log(newTruncate("All good", 10));
console.log(newTruncate(999, 10));
// #endregion

console.log("\n" + "----Q3----");
// #region [Question 3]
const animals = ['Tiger', 'Giraffe']

//Adding new values to the end of the animals array.
animals.push("Lion");
animals.push("Hippopotomus");

//Adding new values to the start of the animals array.
animals.unshift("Crocodile");
animals.unshift("Elephant");

console.log(`Unsorterd Array: ${animals}`);

sortedArray = animals.sort();
console.log(`Sorted Array: ${sortedArray}`);

function replaceMiddleAnimal(newValue)
{
    arrayLength = animals.length;
    if(arrayLength )
}
// #endregion

console.log("\n" + "----Q8----");
// #region [Question 8]
const phoneBookABC = new Map() //an empty map to begin with 

phoneBookABC.set('Annabelle', '0412312343')  
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')

//8.a)Create a new phoneBookDEF Map to store names beginning with D, E or F.
////b)Initialise the contents of phoneBookDEF by passing in an array of keys/values.
const arrayDEF =
[
    ['Dave', '0411324423'],
    ['Evelyn', '0411333423'],
    ['Fred', '0422325523'],
];

const phoneBookDEF = new Map(arrayDEF);

//8.c)Update the phone number for Caroline.
const carolineNewNumber = '0411554321';
phoneBookABC.set('Caroline', carolineNewNumber);
 
//8.d)Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map.
function printPhoneBook(contacts)
{
    if(!(contacts instanceof Map))
    {
        console.error("Map not found");
    }
    else
    {
        console.log("Phone book:");
        for (const [name, number] of contacts.entries())
        {
            console.log(`${name}: ${number}`);
        }
    }
}

printPhoneBook(phoneBookDEF);
// #endregion

console.log("\n" + "----Q9----");
// #region [Question 9]
let salaries =
{ 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};


function sumSalaries(salaries)
{
    let total = 0;
    if(salaries)
    {
        for(const value of Array.from(Object.values(salaries)))
        {
            total += parseFloat(value);
        }
    }
    return total;
}

salaryTotal = sumSalaries(salaries);
console.log(salaryTotal);
// #endregion

console.log("\n" + "----Q10----");
// #region [Question 10]
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today') 

const todayInHours = today.getHours();
const todayInMinutes = todayInHours * 60 + today.getMinutes();
const todayInSeconds = todayInMinutes * 60 + today.getSeconds();

console.log(`A total of: ${todayInHours} hours have passed today!`);
console.log(`A total of: ${todayInMinutes} minutes have passed today!`);
console.log(`A total of: ${todayInSeconds} seconds have passed today!`);

//Today's time stamp.
console.log('Current time is ' + today.toLocaleTimeString()) 

//Add 1 hour to time stamp.
today.setHours(today.getHours() + 1);
console.log(today.toLocaleTimeString())

//Add another 30 minutes.
today.setMinutes(today.getMinutes() + 30);
console.log(today.toLocaleTimeString());

// #endregion