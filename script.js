// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Initialize an empty array to store employee data
const employeesArray = [];
const randomNumber = 0;

// Collect employee data
const collectEmployees = function() {  // TODO: Get user input to create and return an array of employee objects

 
  let add = true; 
  while(add) {  
    let employeeFirstName = prompt(`Enter First Name:`);
    let employeeLastName = prompt(`Enter Last Name:`);
    let employeeSalary = parseFloat(prompt(`Enter Salary:`, `0`)); // default = (prompt(`Enter Salary:`, `0`))
      // if (isNaN(employeeSalary)) {
      //   alert(`You must enter a number.`);
      //   } else {
      //   alert(`Thank you for entering a number`);
      // }
    
    if (!add) break;

  // build object to store employee data in to push into array
  const employee = {
    firstName:employeeFirstName,
    lastName:employeeLastName,
    salary:employeeSalary,
  }
  add = window.confirm(`Do you want to add another employee?`)
  // push data into employee array and then increment i
  employeesArray.push(employee);  
  }
 
}

console.log('these are my employees:',employeesArray);


addEmployeesBtn.addEventListener('click', function() {
  add = collectEmployees();
});

// WORKS TO HERE!!!  //

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculates and displays the average salary of all employees
  let sum = 0;

  console.log('AAAAA')
  
  for(let i = 0; i < employeesArray.length; i++){
    sum += employeesArray[i].salary;
  }
  console.log('BBBB')
  const average = sum/employeesArray.length;
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
