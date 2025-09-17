/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
class Student  {
   constructor(firstName, lastName, gpa) {
      this.firstName = firstName;
      this.lastName = lastName;
      this._gpa = gpa;
   }
   
   get fullName() {
      return this.firstName + " " + this.lastName
   }
   get gpa() {
      return this._gpa
   }
   set updateGpa(newVal) {
      if (newVal >= 0.0 && newVal <= 4.0) {
      this._gpa = newVal;
    } else {
      console.error("GPA must be between 0.0 and 4.0");
    }
   }
}

const student1 = new Student("Mohammed", "Kadem", 3.4)
console.log("Full Name:", student1.fullName);
console.log("GPA:", student1.gpa); 

// Update GPA and output again
student1.updateGpa = (3.6); // This will change the gpa
console.log("Updated GPA:", student1.gpa); 

student1.updateGpa = (5.6); // This will not change the gpa
console.log("Updated GPA:", student1.gpa); 

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
console.log("*****************************************************************************************");
console.log("TASK 2");

const courses = {
   "SWE 363": "Intro to web development", 
   "COE 301": "Computer organization"
}
for (let course in courses) {
   console.log(`${course}: ${courses[course]}`);
   
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
console.log("*****************************************************************************************");
console.log("TASK 3");
let str = "Mohammed";
console.log(str.charAt(2)); // Will print h
console.log(str.length); // The length of the str which is 8
 


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
console.log("*****************************************************************************************");
console.log("TASK 4");
const now = new Date();
const day = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()
console.log(`Day is ${day}`);
console.log(`Month is ${month}`);
console.log(`Year is ${year}`);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
console.log("*****************************************************************************************");
console.log("TASK 5");
const array = [3, 22, 4, 65, 77, 43, 64, 72, 11, 44]
const minValue = Math.min(...array)
const maxValue = Math.max(...array)
console.log(`Minimum value is ${minValue}`);
console.log(`Miximum value is ${maxValue}`);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
console.log("*****************************************************************************************");
console.log("TASK 6");
function getMax(arr) {
   if (arr.length == 0) {
      throw new Error("Array should not be empty ")
   }
   return Math.max(...arr)
}
try {
  console.log("Trying to get max element...");
  const max = getMaxElement([]); // empty array triggers error
  console.log("Max element is:", max);
} catch (e) {
  console.error("Caught an error:", e.message);
} finally {
  console.log("This runs regardless of error.");
}
// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
