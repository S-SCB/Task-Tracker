function addTask() {
    // Get task name and deadline date input values
    var taskName = document.getElementById("taskName").value;
    var deadline = new Date(document.getElementById("deadline").value);

    // Calculate time left in days
    var now = new Date();
    var timeLeft = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 3600 * 24));

    // Create a new row for the task list table
    var tableBody = document.querySelector(".taskList tbody");
    var newRow = tableBody.insertRow();

    // Insert cells into the new row
    var taskCell = newRow.insertCell(0);
    var deadlineCell = newRow.insertCell(1);
    var timeLeftCell = newRow.insertCell(2);

    // Populate cells with task name, deadline date, and time left
    taskCell.textContent = taskName;
    deadlineCell.textContent = deadline.toLocaleDateString();
    timeLeftCell.textContent = timeLeft > 0 ? timeLeft + " days" : "Past deadline";
}