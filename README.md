## Module 3 Lab Exercises
##### Expand items below for an "easier" view of my approach to each step. Includes exercise questions, my relevant code, and respective browser view. :)
---
<!-- JS Fundamentals -->
<details>
  <summary>JS Fundamentals</summary>
  <ul>
    <!-- SECTION I -->
    <details>
      <summary>Exercise 1: What are the results of these expressions</summary>
      <ul>
        <li>
          <img alt="Exercise 1-1" src="/LabScreenshots/JSFundamentals/Exercise1-1.png">
        </li>
        <li>
          <img alt="Exercise 1-2" src="/LabScreenshots/JSFundamentals/Exercise1-2.png">
        </li>
      </ul>
    </details>
    <!-- SECTION II -->
    <details>
      <summary>
      Exercise 2: Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
      </summary>
      <ul>
        <li>
          The variables for multiplication, division, and for lessthan1 and 2, are incorrect. This is due to the fact that the 3 variables used for calculations are strings, and have limited mathematical capablities.
          <img alt="Exercise 2-1" src="/LabScreenshots/JSFundamentals/Exercise2-1.png">
          <img alt="Exercise 2-2" src="/LabScreenshots/JSFundamentals/Exercise2-2.png">
        </li>
        <li>
          We can fix this by declaring the 3 original variables as integers instead of strings.
          <img alt="Exercise 2-3" src="/LabScreenshots/JSFundamentals/Exercise2-3.png">
          <img alt="Exercise 2-4" src="/LabScreenshots/JSFundamentals/Exercise2-4.png">
        </li>
      </ul>
    </details>
    <!-- SECTION III -->
    <details>
      <summary>Exercise 3: Which of the following console.log messages will print? Why?</summary>
      <ul>
        <li>
          only 3 of the 5 if statements will be satisfied. 0 is equal to false. a string existing is true ("0"), (null) is nothing and therefore is false. -1 is not 0 and exist.
        </li>
        <li>
          <img alt="Exercise 3-1" src="/LabScreenshots/JSFundamentals/Exercise3-1.png">
          <img alt="Exercise 3-2" src="/LabScreenshots/JSFundamentals/Exercise3-2.png">
        </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>
        Exercise 4: Rewrite this <code>if</code> using the ternary/conditional operator <code>'?'</code>. Test it with different values for a 
        and b. What does the <code>‘+=’</code> do?
      </summary>
      <ul>
      <li>
        <img src="/LabFigures/JSFundamentals_4.png" alt="JS Fundamentals 4">
      </li>
      <li>
        The <code>'+='</code> is to specifiy that we're adding onto the variable's value instead of setting it.
      </li>
      <li>
        <img src="/LabScreenshots/JSFundamentals/Exercise4-1.png" alt="Exercise 4-1">
        <img src="/LabScreenshots/JSFundamentals/Exercise4-2.png" alt="Exercise 4-2">
      </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>Exercise 5: Rewrite the following function using: a) function expression syntax, and b) arrow function 
        syntax. Test each version to make sure they work the same.</summary>
        <ul>
          <li>
            <img src="/LabFigures/JSFundamentals_5.png" alt="JS Fundamentals 5">
          </li>
          <li>
            Rewritten:<br>
            <img src="/LabScreenshots/JSFundamentals/Exercise5-1.png" alt="Exercise 5-1">
            <img src="/LabScreenshots/JSFundamentals/Exercise5-2.png" alt="Exercise 5-2">
          </li>
        </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>Exercise 6:</summary>
      <ul>
      <li>
        <img alt="JS Fundamentals 6" src="/LabFigures/JSFundamentals_6.png">
      </li>
      <li>
        Complete the <code>inigo</code> object by adding a <code>lastName</code> property and including it in the 
        <code>greeting</code>. 
      </li>
      <li>
        Complete <code>getCatchPhrase</code> so that if the <code>person</code> argument has 6 fingers, it instead 
        prints his famous catch phrase to the console.
      </li>
      <li>
         Update <code>getCatchPhrase</code> to use arrow function syntax and a conditional operator.
      </li>
      <li>
        <img src="/LabScreenshots/JSFundamentals/Exercise6-1.png" alt="Exercise 6-1">
        <img src="/LabScreenshots/JSFundamentals/Exercise6-2.png" alt="Exercise 6-2">
      </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>Exercise7: The following object represents a basketball game and keeps track of the score as the 
        game progresses.</summary>
      <ul>
        <li>
          <img src="/LabFigures/JSFundamentals_7.png" alt="JS Fundamentals 7">
        </li>
        <li>
          Modify each of the methods so that they can be ‘chained’ together and the last line of 
          the example code works.
        </li>
        <li>
          Add a new method to print the full time final score.
        </li>
        <li>
          Add a new object property to keep track of the number of fouls and a method to 
          increment it, similar but separate to the score. Include the foul count in the half time and 
          full time console messages.
        </li>
        <li>
          Test your object by chaining all the method calls together in different combinations.
        </li>
        <li>
          <img src="/LabScreenshots/JSFundamentals/Exercise7-1.png" alt="Exercise 7-1">
          <img src="/LabScreenshots/JSFundamentals/Exercise7-2.png" alt="Exercise 7-2">
          <img src="/LabScreenshots/JSFundamentals/Exercise7-3.png" alt="Exercise 7-3">
        </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>Exercise 8: The object below represents a single city.</summary>
      <ul>
        <li>
          <img src="/LabFigures/JSFundamentals_8.png" alt="JS Fundamentals 8">
        </li>
        <li>
          Write a function that takes an object as an argument and uses a <code>for…in</code> 
          loop to access and print to the console each of those object properties and their 
          values. Test it using the <code>sydney</code> object below.
        </li>
        <li>
          Create a new object for a different city with different properties and call your 
          function again with the new object. 
        </li>
        <li>
          <img src="/LabScreenshots/JSFundamentals/Exercise8-1.png" alt="Exercise 8-1">
          <img src="/LabScreenshots/JSFundamentals/Exercise8-2.png" alt="Exercise 8-2">
        </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>Exercise 9: Use the following variables to understand how JavaScript stores objects by reference.</summary>
      <ul>
        <li>
          <img src="/LabFigures/JSFundamentals_9.png" alt="JS Fundamentals 9">
        </li>
        <li>
          Create a new <code>moreSports</code> variable equal to <code>teamSports</code> and add some new sport 
          values to it (using <code>push</code> and <code>unshift</code>).
        </li>
        <li>
          Create a new <code>dog2</code> variable equal to dog1 and give it a new value.
        </li>
        <li>
          Create a new <code>cat2</code> variable equal to cat1 and change its name property.
        </li>
        <li>
          Print the original <code>teamSports</code>, <code>dog1</code> and <code>cat1</code> variables to the console. Have they 
          changed? Why?
        </li>
        <li>
          Change the way the <code>moreSports</code> and <code>cat2</code> variables are created to ensure the 
          originals remain independent.
        </li>
        <li>
          The <code>teamSports</code> variable has changed as it was being referenced by <code>moreSports</code>, which was altered.
        </li>
        <li>
          <img src="/LabScreenshots/JSFundamentals/Exercise9-1.png" alt="Exercise 9-1">
          <img src="/LabScreenshots/JSFundamentals/Exercise9-2.png" alt="Exercise 9-2">
        </li>
      </ul>
    </details>
    <details>
      <summary>Exercise 10: The following constructor function creates a new Person object with the given name and 
        age values.</summary>
      <ul>
        <li>
          <img src="/LabFigures/JSFundamentals_10.png" alt="JS Fundamentals 10">
        </li>
        <li>
          Create a new person using the constructor function and store it in a variable.
        </li>
        <li>
          Create a second person using different name and age values and store it in a separate 
          variable.
        </li>
        <li>
          Print out the properties of each person object to the console.
        </li>
        <li>
          Rewrite the constructor function as a class called PersonClass and use it to create a 
          third person using different name and age values. Print it to the console as well.
        </li>
        <li>
          Add a <code>canDrive</code> method to both the constructor function and the class that returns true 
          if the person is old enough to drive.
        </li>
        <li>
          <img src="/LabScreenshots/JSFundamentals/Exercise10-1.png" alt="Exercise 10-1">
          <img src="/LabScreenshots/JSFundamentals/Exercise10-2.png" alt="Exercise 10-2">
        </li>
      </ul>
    </details>
  </details>
<!-- JS Intermediate -->
<details>
  <summary>JS Intermediate</summary>
  <ul>
     <!-- SECTION I -->
     <details>
      <summary>
        Exercise 1: Create a function that takes a string as a parameter and returns the string with the first
        character of each word changed into a capital letter, as in the example below. Test it with
        different strings.
      </summary>
      <ul>
        <li>
          <img src="/LabScreenshots/JSIntermediate/Exercise1-1.png" alt="JS Intermediate Exercise 1-1">
          <img src="/LabScreenshots/JSIntermediate/Exercise1-2.png" alt="JS Intermediate Exercise 1-2">
        </li>
      </ul>
    </details>
    <!-- SECTION II -->
    <details>
      <summary>
        Exercise 2: Create a function <code>truncate(str, max)</code> that truncates a given string of text if its total
        length is greater than the <code>max</code> length. It should return either the truncated text, with an
        ellipsis (...) added to the end if it was too long, or the original text otherwise.
      </summary>
      <ul>
        <li>
          Write another variant of the truncate function that uses a conditional operator.
        </li>
        <li>
          <img src="/LabScreenshots/JSIntermediate/Exercise2-1.png" alt="JS Intermediate Exercise 2-1">
          <img src="/LabScreenshots/JSIntermediate/Exercise2-2.png" alt="JS Intermediate Exercise 2-2">
        </li>
      </ul>
    </details>
    <!-- SECTION III -->
    <details>
      <summary>
        Exercise 3: Use the following <code>animals</code> array for the below tasks. Test each one by printing the result to
        the console.
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_1.png" alt="JS Intermediate Figure 1">
        </li>
        <li>
          Add 2 new values to the end.
        </li>
        <li>
          Add 2 new values to the beginning.
        </li>
        <li>
          Sort the values alphabetically.
        </li>
        <li>
          Write a function <code>replaceMiddleAnimal(newValue)</code> that replaces the value in the
          middle of the <code>animals</code> array with <code>newValue</code>.
        </li>
        <li>
          Write a function <code>findMatchingAnimals(beginsWith)</code> that returns a new array
          containing all the animals that begin with the <code>beginsWith</code> string. Try to make it work
          regardless of upper/lower case.
        </li>
      </ul>
    </details>
    <!-- SECTION IV -->
    <details>
      <summary>
        Exercise 4: Write a function <code>camelCase(cssProp)</code> that changes dash-separated CSS properties like
        <code>'margin-left'</code> into camel-cased <code>marginLeft'</code>.
      </summary>
      <ul>
        <li>
          The function should remove all dashes, and uppercase the first letter of each word after a dash.
        </li>
        <li>
          Create variants of the camelCase function that use different types of for loops, and with and without the conditional operator.
        </li>
      </ul>
    </details>
    <!-- SECTION V -->
    <details>
      <summary>
        Exercise 5: Decimal number operations in JavaScript can lead to unexpected results, as in the
        following:.
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_2.png" alt="JS Intermediate 2">
        </li>
        <li>
          We can sometimes avoid this using the toFixed function to force the number of decimal
          places as below, but it’s not always useful:<br>
          <img src="/LabFigures/JSIntermediate_3.png" alt="JS Intermediate 3">
        </li>
        <li>
          Explain why the above code returns the wrong answer.
        </li>
        <li>
          Create a function <code>currencyAddition(float1, float2)</code> which safely adds the two
          decimal numbers <code>float1</code> and <code>float2</code> and returns the correct float result.
        </li>
        <li>
          Create a function <code>currencyOperation(float1, float2, operation)</code> which
          safely performs the given operation (either +, -, / or *) on the two numbers and return
          the correct float result.
        </li>
        <li>
          (Extension) Extend the above function to include a fourth argument numDecimals
          which allows the operation to support different amounts of decimal places from 1 to 10.
        </li>
      </ul>
    </details>
    <!-- SECTION VI -->
    <details>
      <summary>
        Exercise 6: Create a function <code>unique(duplicatesArray)</code> which takes an array parameter that may
        include duplicates. Your function should return an array containing only the unique values
        from <code>duplicatesArray</code>.
      </summary>
      <ul>
        <li>
          Test with the following arrays and create another one of your own.<br>
          <img src="/LabFigures/JSIntermediate_4.png" alt="JS Intermediate 4">
        </li>
      </ul>
    </details>
    <!-- SECTION VII -->
    <details>
      <summary>
        Exercise 7: Use the following array of book objects to practice the array functions for <code>map</code>, <code>find</code> and
        <code>filter</code>. Test each of your answers to the below tasks.
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_5.png" alt="JS Intermediate 5">
        </li>
        <li>
          Write a function <code>getBookTitle(bookId)</code> that uses the <code>find</code> function to return the
          title of the book object with the matching <code>id</code>.
        </li>
        <li>
          Write a function <code>getOldBooks()</code> that uses the <code>filter</code> function to return all book
          objects written before 1950.
        </li>
        <li>
          Write a function <code>addGenre()</code> that uses the <code>map</code> function to add a new <code>genre</code> property
          to all of the above books, with the value ‘classic’.
        </li>
        <li>
          (Extension) Write a function <code>getTitles(authorInitial)</code> that uses <code>map</code> and
          <code>filter</code> together to return an array of book titles for books written by authors whose
          names start with <code>authorInitial</code>.
        </li>
        <li>
          (Extension) Write a function <code>latestBook()</code> that uses <code>find</code> and <code>forEach</code> to get the
          book with the most recent publication date.
        </li>
      </ul>
    </details>
    <!-- SECTION VIII -->
    <details>
      <summary>
        Exercise 8: The following code creates a new Map object for storing names beginning with A, B, or C
        with their phone numbers.
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_6.png" alt="JS Intermediate 6">
        </li>
        <li>
          Create a new <code>phoneBookDEF</code> Map to store names beginning with D, E or F.
        </li>
        <li>
          Initialise the contents of <code>phoneBookDEF</code> by passing in an array of keys/values.
        </li>
        <li>
          Update the phone number for Caroline.
        </li>
        <li>
          Write a function <code>printPhoneBook(contacts)</code> that prints the names and phone
          numbers in the given Map.
        </li>
        <li>
          Combine the contents of the two individual Maps into a single <code>phoneBook</code> Map.
        </li>
        <li>
          Print out the full list of names in the combined phone book.
        </li>
      </ul>
    </details>
    <!-- SECTION IX -->
    <details>
      <summary>
        Exercise 9: Given the below salaries object, perform the following tasks.
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_7.png" alt="JS Intermediate 7">
        </li>
        <li>
          Write a function <code>sumSalaries(salaries)</code> that calculates and returns the total of all salaries.
        </li>
        <li>
          Write a function <code>topEarner</code>(salaries) that calculates and returns the name of the person
          earning the highest salary
        </li>
      </ul>
    </details>
    <!-- SECTION X -->
    <details>
      <summary>
        Exercise 10: The following code uses the Date object to print the current time and the number of hours
        that have passed today so far. Extend the code to do the following:
      </summary>
      <ul>
        <li>
          <img src="/LabFigures/JSIntermediate_8.png" alt="JS Intermediate 8">
        </li>
        <li>
          Print the total number of minutes that have passed so far today.
        </li>
        <li>
          Print the total number of seconds that have passed so far today.
        </li>
        <li>
          Calculate and print your age as: 'I am x years, y months and z days old'.
        </li>
        <li>
          Write a function <code>daysInBetween(date1, date2)</code> which calculates and returns the amounts
          of days in between the two given dates.
        </li>
      </ul>
    </details>
  </ul>
</details>
<!-- JS Advanced -->
<details>
  <summary>JS Advanced</summary>
  <ul>
    <li>
      <p>To be completed. VERY SOON!!</p>
    </li>
  </ul>
</details>