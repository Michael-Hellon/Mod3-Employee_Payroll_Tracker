// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// creates an empty arrayOfEmployees array
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

  let salary = Number(prompt(`Enter Salary:`, 0));
    // could not get parseFloat to work properly - changed to number
    // should have left the isNan if statement in
    // if (salary === isNaN) {
    //   break;    
    // } else {
    //   alert(`Thank you for entering a number.`);
    // }
      
  // push data into arrayOfEmployees
    // ************** Just found the problem. I need {} instead of ()
    arrayOfEmployees.push({firstName, lastName, salary});

  // confirm button to add another employee
  add = window.confirm(`Do you want to add another employee?`); 
  } 
  console.log(arrayOfEmployees);
return arrayOfEmployees;
}

// No longer - WORKS TO HERE!!!  //

console.log('array of employees:', arrayOfEmployees);


// Now getting this message:
// The average employee salary between our 7 employee(s) is NaN.

// Calculates and displays the average salary of all employees
const displayAverageSalary = function(employeesArray) {
  // sets initial value to 0 so we can sum
  let sum = 0;
  // changed from for of loop - been a few months since I studied them.
  for(var i = 0; i < employeesArray.length; i++) {
    console.log('sum:', sum)
    console.log('employeesArray[i].salary:', employeesArray[i].salary);
    sum += employeesArray[i].salary;
  }
  // once we have the sum total, we can find the average. (.tofixed(2) displays 2 decimal points)
  const average = (sum/employeesArray.length).toFixed(2);
  console.log(`average:`, average);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average}.`)
}


// Now getting this message:
// Congratulations to undefined undefined, our random drawing winner!!!

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // Picks a random number based on number of employees
  let randomNumber = Math.floor(Math.random() * employeesArray.length);
  console.log(randomNumber);
  console.log(`Congratulations to ${employeesArray[randomNumber].firstName} ${employeesArray[randomNumber].lastName}, our random drawing winner!!!`)

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
