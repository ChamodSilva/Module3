console.log("\n" + "----Q1----");
// #region [Question 1]
console.log("" + 1 + 0); //output: "10"

console.log("" - 1 + 0); //output: "-1"

console.log(true + false); //output: "1"

console.log(!true); //output: "false"

console.log(6 / "3"); //output: "2"

console.log("2" * "3"); //output: "6"

console.log(4 + 5 + "px"); //output: "9px"

console.log("$" + 4 + 5); //output: "$45"

console.log("4" - 2); //output: "2"

console.log("4px" - 2);//output: "NaN"

console.log(" -9 " + 5); //output: " -9 5"

console.log(" -9 " - 5); //output: "-14"

console.log(null + 1); //output: "1"

console.log(undefined + 1); //output: "NaN"

console.log(undefined == null); //output: "true"

console.log(undefined === null); //output: "false"

console.log(" \t \n" - 2); //output: "2"
// #endregion

console.log("\n" + "----Q2----");

// #region [Question 2]
let three = 3;
let four = 4;
let thirty = 30;

//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
// #endregion

console.log("\n" + "----Q3----");

// #region [Question 3]
if (0) console.log('#1 zero is true');
if ("0") console.log('#2 zero is true');
if (null) console.log('null is true');
if (-1) console.log('negative is true');
if (1) console.log('positive is true');
// #endregion

console.log("\n" + "----Q4----");
// #region [Question 4]
let a = 2, b = 3; 
let result = `${a} + ${b} is `; 
let resultRewritten = `${a} + ${b} is `;

//Rewritten Code: with a conditional operator.
resultRewritten += (a + b < 10) ? "less than 10" : "greater than 10";
console.log(resultRewritten);
// #endregion

console.log("\n" + "----Q5----");
// #region [Question 5]
let userName = "Chamod";

//Basic Function Syntax
function getGreeting(userName)
{ 
    return 'Hello ' + userName + '!'; 
}
greeting = getGreeting(userName);
console.log(greeting);

//Function Expression Syntax
const greet = function(userName)
{
    return `Hello ${userName}!!`
};
console.log(greet(userName));

//Arrow Function Syntax
const arrowGreet = userName => `Hello ${userName}!!!`;
console.log(arrowGreet(userName));
// #endregion

console.log("\n" + "----Q6----");
// #region [Question 6]
const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
const inigo = { 
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person)
    {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    },
    getCatchPhrase: (person) => (person.numFingers === 6) ? "You killed my father. Prepare to die!" : "Nice to meet you.",
} 

inigo.greeting(westley) 
inigo.greeting(rugen)
// #endregion

console.log("\n" + "----Q7----");
// #region [Question 7]
const basketballGame =
{ 
    score: 0,
    fouls: 0,
    freeThrow()
    { 
        this.score++;
        return this;
    }, 
    basket()
    { 
        this.score += 2;
        return this; 
    }, 
    threePointer()
    { 
        this.score += 3;
        return this;
    },
    foul()
    {
        this.fouls++;
        return this;
    },
    halfTime()
    { 
        console.log(`Halftime score is ${this.score}. There have been ${this.fouls} fouls so far!`);
        return this;
    },
    fullTime()
    {
        console.log(`Fulltime score is ${this.score}. There have been a total of ${this.fouls} fouls this game!`);
        return this;
    },
    resetGame() //Used to reset game, allowing for easy testing aswell.
    {
        this.score = 0;
        this.fouls = 0;
        console.log("");
        return this;
    }
}  
//modify each of the above object methods to enable function chaining as below:

//Game 1
console.log("Game 1:")
basketballGame.basket().foul().freeThrow().foul().freeThrow().basket().threePointer().halfTime().foul().freeThrow().threePointer().fullTime().resetGame();
//Game 2
console.log("Game 2:")
basketballGame.foul().freeThrow().threePointer().basket().basket().foul().freeThrow().halfTime().basket().basket().basket().fullTime().resetGame();
//Game 3
console.log("Game 3:")
basketballGame.threePointer().basket().basket().threePointer().halfTime().foul().freeThrow().basket().threePointer().fullTime().resetGame();
// #endregion

console.log("\n" + "----Q8----");
// #region [Question 8]
const sydney =
{
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const perth =
{
    name: 'Perth',
    temp: 40.0,
    weather: 'Sunny, Clear',
}

function parseObject(object)
{
    for (const key in object)
    {
        console.log(`${key} : ${object[key]}`);
    }
}

parseObject(sydney);
console.log(); //Line Break
parseObject(perth);
// #endregion

console.log("\n" + "----Q9----");
// #region [Question 9]
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a & e)
let moreSports = [...teamSports];
moreSports.push("Football");
moreSports.unshift("Baseball");

//b)
dog2 = dog1;
cat2 = cat1;
dog2 = "Pluto";
cat2 = {name: 'Azymondias', breed: 'Mixed'};

//c)
console.log
(`Oringinal variables:\nteamSports: ${teamSports}\ndog1: ${dog1}\ncat1: ${cat1.name},${cat1.breed}`);

//d}
console.log();  //Line break
console.log
(`New variables:\nmoreSports: ${moreSports}\ndog2: ${dog2}\ncat2: ${cat2.name},${cat2.breed}`);
// #endregion

console.log("\n" + "----Q10----");
// #region [Question 10]
function Person(name, age)
{
    this.name = name;
    this.age = age;
    this.human = true;
    
    this.canDrive = function()
    {
        return (this.age >= 16) ? "can drive" : "cannot drive";
    }
}

//a) & b)
const jack = new Person("Jack", 24);
const jill = new Person("Jill", 25);

//c)
console.log(`${jack.name} is ${jack.age} years old and ${jack.canDrive()}.`)
console.log(`${jill.name} is ${jill.age} years old and ${jill.canDrive()}.`)

//d)
class PersonClass
{
    constructor(name, age, isHuman = true)
    {
        this.name = name;
        this.age = age;
        this.human = isHuman;
    }
    
    //e)
    canDrive()
    {
        return (this.age >= 16) ? "can drive" : "cannot drive";
    }
}
const humpty = new PersonClass("Humpty", 14, false);
console.log(`${humpty.name} is ${humpty.age} years old, he is ${(humpty.human) ? "a human" : "not a human"}, and ${humpty.canDrive()}.`);
// #endregion
