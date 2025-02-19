console.log("\n" + "----Q1----");
// #region [Question 1]
//Default values set for function to work when values 
function makeCounter(startFrom = 0, incrementBy = 1)
{
    let currentCount = startFrom;

    return function() 
    {
        console.log(currentCount)
        currentCount += incrementBy;
    return currentCount;
    };
}

let counter1 = makeCounter(2, 5);
counter1(); // 2
counter1(); // 4
counter1(); // 6

let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2
counter2(); // 3
// #endregion

console.log("\n" + "----Q2----");
// #region [Question 2]
function delayMsg(msg)
{
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
// #endregion

console.log("\n" + "----Q3----");
// #region [Question 3]
function printMe()
{
    console.log('printing debounced message')
}

function debounce(func)
{
    let timeout();
    wait = 1000
    return function()
    {
        const context = this;
        const args = arguments;
        const later = function()
        {
            if (!immediate) func.apply(context, args); 
        }

        const callNow = immediate && !timeout;
        if (immediate && !timeout) func.apply(context, args)

        clearTimeout(timeout);
        timeout = setTimeout();
    }   
}

printMe = debounce(printMe); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);
// #endregion