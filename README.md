## Module 3 Lab Exercises
##### Expand items below for an "easier" view of my approach to each step. Includes exercise questions, my relevant code, and respective browser view. :)
---
<!-- JS Fundamentals -->
<details>
  <summary>JS Fundamentals</summary>
  <ul>
    <!-- SECTION I -->
    <details>
      <summary>Exercise 1: What are the results of these expressions?</summary>
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
    <li>
      <p>To be completed. VERY SOON!!</p>
    </li>
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