//* Get a reference to the #add-employees-btn element *\\
const addEmployeesBtn = document.querySelector("#add-employees-btn");

//*  Collect employee data  *\\
const employeesArray = [];

//*  Function to add employees to the array  *\\

const collectEmployees = function () {
  let keepGoing = true;

  while (keepGoing) {
    
    // Prompt user to add employee data 
    const firstName = prompt("Please enter the employee's first name");
    const lastName = prompt("Please enter the employee's last name");
    let salary = prompt("Please enter the employee's salary");

    // Takes employee prompt data and turns it into a sinlge object per employee
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    // Pushes individual employee object to employeesArray
    employeesArray.push(employee);

    keepGoing = confirm("Would you like to add another employee?");
    // "OK" = true, "Cancel" = false
  }
  return employeesArray;
};

//*  Function to Display the average salary of the employees  *\\

const displayAverageSalary = function(employeesArray) {

  // Calculates the total sum of the employee salaries
  let salaryTotal = 0;
  const numberEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    salaryTotal += employee.salary;
  }

  // Calculates the average salary using previous total sum, and logs it to the console to complete the displayAverageSalary function
  const averageSalary = salaryTotal / numberEmployees
  console.log(`Your employees have a total average salary of $ ${averageSalary}.`);
}

//*  Function to Select a random employee  *\\

const getRandomEmployee = function(employeesArray) {

  // Selects a random employee object from the employeesArray, and logs the winner to the console to complete the function
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}




/*
  ====================
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
