// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// creates an empty employeeData array
const arrayOfEmployees = [];


// Collect employee data
const collectEmployees = function() {  // TODO: Get user input to create and return an array of employee objects
// sets default for: add = window.confirm(`Do you want to add another employee?`)
let add = true; 

// runs while loop as long as we want to add another employee
while(add) {  
  let firstName = prompt(`Enter First Name:`);
  // break will allow the collection process to stop if user clicks 'Cancel'
    if(firstName === null) break;
  let lastName = prompt(`Enter Last Name:`);
    if(lastName === null) break;
  let salary = parseFloat(prompt(`Enter Salary:`, 0));


    
// push data into employee array and then increment i
arrayOfEmployees.push((firstName, lastName, salary));

// confirm button to add another employee
add = window.confirm(`Do you want to add another employee?`); 
} 
return arrayOfEmployees;
}

//text line
console.log('these are my employees:',employeesArray);

// WORKS TO HERE!!!  //

// Calculates and displays the average salary of all employees
const displayAverageSalary = function(employeesArray) {
// sets initial value to 0 so we can sum
let sum = 0;

// loops through each employee and pulls out their Salary value
for(let employee of employeesArray) {
  // sums up all the employees salary
  sum += employeesArray.salary;
}
// once we have the sum total, we can find the average. (.tofixed(2) displays 2 decimal points)
const average = (sum/employeesArray.length).toFixed(2);
console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  console.log('CCCC')


  // Picks a random number based on number of employees
  randomNumber = Math.floor(Math.random() * employeesArray.length);
  console.log(randomNumber);
  console.log(`Congratulations to ${employeesArray.firstName[randomNumber]} ${employeesArray.lastName[randomNumber]}, our random drawing winner!!!`)


  return randomNumber;
}



/*
  ******************   ====================   ******************
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
