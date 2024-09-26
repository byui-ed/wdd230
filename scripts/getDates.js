// Main JavaScript file

// Update the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Functions for basic arithmetic operations
function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = (num1 + num2).toFixed(2);
}
function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = (num1 - num2).toFixed(2);
}

function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = (num1 * num2).toFixed(2);
}

function divideNumbers() {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    
    if (divisor !== 0) {
        document.getElementById('quotient').value = (dividend / divisor);
    } else {
        document.getElementById('quotient').value = "Cannot divide by zero";
    }
}

// Get references to the elements within section2
const section2 = document.getElementById('section2');
const subtotalInput = section2.querySelector('#subtotal');
const memberCheckbox = section2.querySelector('#member');
const getTotalButton = section2.querySelector('#getTotal');
const totalSpan = section2.querySelector('#total');

// Event listener for the getTotalButton click
getTotalButton.addEventListener('click', function() {
    let subtotal = parseFloat(subtotalInput.value);
    let isMember = memberCheckbox.checked;

    let totalDue = calculateTotal(subtotal, isMember);
    totalSpan.textContent = `$ ${totalDue.toFixed(2)}`;
});

// Function to calculate the total due based on subtotal and membership status
function calculateTotal(subtotal, isMember) {
    const membershipDiscount = 0.1; // Assuming 10% discount for club members
    let total = subtotal;

    if (isMember) {
        total -= total * membershipDiscount;
    }

    return total;
}


// Main JavaScript file

// Array manipulation using JavaScript
const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerText = sourceArray.toString();

// Filter odd and even numbers
const odds = sourceArray.filter(num => num % 2 !== 0);
const evens = sourceArray.filter(num => num % 2 === 0);
document.getElementById("odds").innerText = odds.toString();
document.getElementById("evens").innerText = evens.toString();

// Calculate sum of source array
const sumOfArray = sourceArray.reduce((acc, val) => acc + val, 0);
document.getElementById("sumOfArray").innerText = sumOfArray;

// Multiply every element by 2
const multiplied = sourceArray.map(num => num * 2);
document.getElementById("multiplied").innerText = multiplied.toString();

// Calculate sum of source array times two
const sumOfMultiplied = multiplied.reduce((acc, val) => acc + val, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;
  
  
// Event listeners for arithmetic operations
document.getElementById('addNumbers').addEventListener('click', addNumbers);
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);