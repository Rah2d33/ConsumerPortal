function updateFileTable() {
    const tableBody = document.querySelector('#files-table tbody');
    const noFilesMessageRow = document.getElementById('no-files-message');

    // Check if there are any file rows in the table body
    const fileRows = tableBody.querySelectorAll('.file-row');
    if (fileRows.length > 0) {
        // Hide the "No files have been added" message
        noFilesMessageRow.style.display = 'none';
    } else {
        // Show the "No files have been added" message
        noFilesMessageRow.style.display = '';
    }
}

// Example of how you might add a file row (this would be part of your file upload logic)
function addFileRow(fileData) {
    const tableBody = document.querySelector('#files-table tbody');

    // Create a new file row
    const fileRow = document.createElement('tr');
    fileRow.className = 'file-row';

    // Fill the row with file data (this will depend on your specific requirements)
    fileRow.innerHTML = `
        <td>${fileData.id}</td>
        <td>${fileData.companyName}</td>
        <td>${fileData.fileType}</td>
        <td>${fileData.uploadedDate}</td>
        <td>${fileData.description}</td>
        <td>${fileData.dueDate}</td>
        <td>${fileData.paymentMethod}</td>
        <td>${fileData.status}</td>
    `;

    // Insert the file row into the table
    tableBody.insertBefore(fileRow, tableBody.lastElementChild);

    // Update the table to show or hide the "No files have been added" message
    updateFileTable();
}

// Call this function initially to set the correct state
updateFileTable();


