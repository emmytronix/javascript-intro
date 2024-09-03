// Declare variables of different data types
var myString = "Hello, World!";  // String
var myNumber = 42;               // Number
var myBoolean = true;            // Boolean

// Log the variables to the console
console.log("String variable: ", myString);
console.log("Number variable: ", myNumber);
console.log("Boolean variable: ", myBoolean);

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    // Check to avoid division by zero
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return "Error: Division by zero is not allowed.";
    } else {
        return a / b;
    }
}

// DOM Manipulation and Event Listeners

// Change text content when the button is clicked
document.getElementById("changeTextButton").addEventListener("click", function() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "The text has been changed!";
    messageElement.classList.toggle("highlight");  // Toggle the highlight class
});

// Function to update the result paragraph with the calculated result
function updateResult(result) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Result: " + result;
    resultElement.classList.remove("hidden");  // Show the result element
}

// Event listeners for the math operation buttons
document.getElementById("addButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    updateResult(add(num1, num2));
});

document.getElementById("subtractButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    updateResult(subtract(num1, num2));
});

document.getElementById("multiplyButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    updateResult(multiply(num1, num2));
});

document.getElementById("divideButton").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    updateResult(divide(num1, num2));
});

// Chart.js Example: Render a Bar Chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',  // Specify the type of chart
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],  // X-axis labels
        datasets: [{
            label: 'Color Votes',
            data: [12, 19, 3, 5, 2, 3],  // Y-axis data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
