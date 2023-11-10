var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Firstname"] = document.getElementById("Firstname").value;
    formData["Lastname"] = document.getElementById("Lastname").value;
    formData["Location"] = document.getElementById("Location").value;
    formData["Date"] = document.getElementById("Date").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("AppointmentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Location;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Date;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button class="buttons Edit" onClick="onEdit(this)">Edit</button> <button class="buttons Delete" onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Date").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Firstname;
    selectedRow.cells[1].innerHTML = formData.Lastname;
    selectedRow.cells[2].innerHTML = formData.Location;
    selectedRow.cells[3].innerHTML = formData.Date;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('AppointmentList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Firstname").value = '';
    document.getElementById("Lastname").value = '';
    document.getElementById("Location").value = '';
    document.getElementById("Date").value = '';
    selectedRow = null;
}