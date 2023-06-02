let Array1 = [];

function add () {
    let value = document.getElementById("input").value;
    Array1.push(value);
   
  document.getElementById("output").innerHTML = Array1;
}


function addInfo() {
   
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let age = document.getElementById("age").value;
  
   let newRow = document.createElement("tr");
 
   let firstNameCell = document.createElement("td");
   firstNameCell.textContent = firstName;
   let lastNameCell = document.createElement("td");
   lastNameCell.textContent = lastName;
   let ageCell = document.createElement("td");
   ageCell.textContent = age;
  
   newRow.appendChild(firstNameCell);
   newRow.appendChild(lastNameCell);
   newRow.appendChild(ageCell);
  
   document.getElementById("table").getElementsByTagName("tbody")[0].appendChild(newRow);
  }
