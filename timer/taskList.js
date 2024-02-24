function addTask() {
    var taskInput = document.getElementById("taskName");
    var taskValue = taskInput.value;
    
    var li = document.createElement("label");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    li.appendChild(checkBox);

    var textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);

    var ul = document.getElementById("taskList");
    ul.appendChild(li);

    var newLine = document.createElement("br");
    newLine.type = "br";
    li.appendChild(newLine);

    taskInput.value = "";

    checkBox.addEventListener('change', function() {
        ul.removeChild(li);
    });
}