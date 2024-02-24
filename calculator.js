function calculateGrade() {
    var currentGrade = parseFloat(document.getElementById("currentGrade").value);
    var finalWeight = parseFloat(document.getElementById("finalWeight").value);
    var desiredGrade = parseFloat(document.getElementById("desiredGrade").value);
    var errorMessageElement = document.getElementById("errorMessage");

    if (isNaN(currentGrade) || isNaN(finalWeight) || isNaN(desiredGrade)) {
        errorMessageElement.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (currentGrade < 0 || finalWeight > 100) {
        errorMessageElement.innerHTML = "Current grade should be between 0 and 100."
        return;
    }

    if (finalWeight < 0 || finalWeight > 100) {
        errorMessageElement.innerHTML = "Final exam weight should be between 0 and 100.";
        return;
    }
    
    if (desiredGrade < 0 || desiredGrade > 100) {
        errorMessageElement.innerHTML = "Desired grade should be between 0 and 100.";
        return;
    }

    var requiredGrade = ((desiredGrade - currentGrade) / finalWeight) * 100;

    if (requiredGrade < 0 || requiredGrade > 100) {
        document.getElementById("result").innerHTML = "Impossible to achieve. Please revise your inputs.";
    } else {
        document.getElementById("result").innerHTML = "You need to score at least " + requiredGrade.toFixed(2) + "% on the final exam.";
    }
}