// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = []; // Array to hold employee objects

  let addingEmployees = true;

  while (addingEmployees) {
    // Prompt user for employee details
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const salary = parseFloat(prompt("Enter salary:"));

    // Create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    // Add the employee to the array
    employees.push(employee);

    // Ask if the user wants to continue adding employees
    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addingEmployees = false;
    }
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let total = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    // Get each employee's salary and add it to the total
    total += employeesArray[i].salary;
  }

  // Calculate the average salary
  const average = total / employeesArray.length;

  // Log the average to the console
  console.log(`The average salary between our ${employeesArray.length} employee(s) is ${average.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select a random index from the employeesArray
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // Display the randomly selected employee
  console.log(`Congratulates to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
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
addEmployeesBtn.addEventListener('click', trackEmployeeData)